import { HandlerInput, getLocale, getRequestType, getIntentName } from 'ask-sdk-core';
import { IntentRequest, LaunchRequest, Request, SessionEndedRequest } from 'ask-sdk-model';
import * as fs from 'fs';

import { hashValue, wrapHandler } from './helpers';
import { Intent } from './intent';
import {
  InteractionModel,
  FilePackageWriter,
  RequestHandlerProvider,
  DialogIntents,
  DialogSlotItems,
  PromptItems,
  LabeledErrorHandler,
  LabeledRequestHandler
} from './models';
import { IntentHandler, JSBErrorHandler } from './types';
import { LocaleString, ModelProvider } from '../types';

export interface LocaleProps {
  locale: LocaleString;
  invocationName: string;
  cancelHandler?: IntentHandler<IntentRequest>;
  helpHandler?: IntentHandler<IntentRequest>;
  fallbackHandler?: IntentHandler<Request>;
  launchHandler?: IntentHandler<LaunchRequest>;
  sessionEndedHandler?: IntentHandler<SessionEndedRequest>;
  errorHandler?: JSBErrorHandler;
}
export class Locale extends ModelProvider<InteractionModel> implements FilePackageWriter, RequestHandlerProvider {
  readonly localeValue: LocaleString;
  readonly props: LocaleProps;

  readonly intents: { [intentName: string]: Intent };
  constructor(props: LocaleProps) {
    super();
    this.localeValue = props.locale;
    this.props = props;
    this.intents = {};
    this.props.cancelHandler = this.props.cancelHandler
      ? this.props.cancelHandler
      : (input: HandlerInput) => {
          console.log('Inside default cancel handler');
          return input.responseBuilder.speak('Goodbye').reprompt('Until again!').getResponse();
        };
    this.props.sessionEndedHandler = this.props.sessionEndedHandler
      ? this.props.sessionEndedHandler
      : (input: HandlerInput) => {
          console.log('Inside default session ended handler');
          return input.responseBuilder.speak('Ending session, goodbye').reprompt('Until again!').getResponse();
        };
    this.props.fallbackHandler = this.props.fallbackHandler
      ? this.props.fallbackHandler
      : (input: HandlerInput) => {
          console.log('Inside default fallbackHandler');
          return input.responseBuilder.speak("I am sorry I don't understand.").reprompt('Fell through!').getResponse();
        };
    this.props.helpHandler = this.props.helpHandler
      ? this.props.helpHandler
      : (input: HandlerInput) => {
          console.log('Inside default help handler');
          return input.responseBuilder.speak("I am sorry I can't help you.").reprompt("I am sorry I can't help you.").getResponse();
        };
    this.props.launchHandler = this.props.launchHandler
      ? this.props.launchHandler
      : (input: HandlerInput) => {
          console.log('Inside default Launch Handler');
          return input.responseBuilder.speak('Hello, welcome to the skill!').reprompt('Welcome').getResponse();
        };
    this.props.errorHandler = this.props.errorHandler
      ? this.props.errorHandler
      : (input: HandlerInput, error: Error) => {
          console.error('Inside default Error Handler', JSON.stringify(error), JSON.stringify(input), error);
          return input.responseBuilder.speak('Something went wrong').getResponse();
        };
  }

  toJSON(): InteractionModel {
    return this.model();
  }

  addCustomIntent(intent: Intent): this {
    if (this.intents[intent.props.intentName]) {
      throw new Error(`${intent.props.intentName} already defined`);
    }
    this.intents[intent.props.intentName] = intent;
    return this;
  }

  getString() {
    return this.localeValue;
  }

  model(): InteractionModel {
    const intents = Object.keys(this.intents).map((intentName: string) => this.intents[intentName]);
    const dialogIntents = intents.filter((intent) => intent.usesDialog());

    const dialog =
      dialogIntents.length > 0
        ? {
            intents: intents
              .filter((intent) => intent.usesDialog())
              .map((intent) => {
                const dialogIntents: DialogIntents = {
                  name: intent.props.intentName,
                  confirmationRequired: intent.props.confirmation !== undefined,
                  prompts: intent.props.confirmation
                    ? {
                        confirmation: hashValue(intent.props.confirmation.prompts)
                      }
                    : undefined,
                  delegationStrategy: intent.props.delegationStrategy,
                  slots: intent.slotsUsingDialog().map((slot) => {
                    const dialogSlot: DialogSlotItems = {
                      name: slot.name,
                      type: slot.type,
                      elicitationRequired: slot.required !== undefined,
                      confirmationRequired: slot.confirmation !== undefined,
                      prompts: {
                        elicitation: slot.required ? hashValue(slot.required.prompts) : undefined,
                        confirmation: slot.confirmation ? hashValue(slot.confirmation.prompts) : undefined
                      }
                    };
                    return dialogSlot;
                  })
                };
                return dialogIntents;
              })
          }
        : undefined;

    const prompts =
      dialogIntents.length > 0
        ? dialogIntents
            .flatMap((intent) => {
              const slotPrompts = intent.slotsUsingDialog().flatMap((slot) => {
                return [...(slot.confirmation ? [slot.confirmation.prompts] : []), ...(slot.required ? [slot.required.prompts] : [])];
              });
              const intentPrompts = intent.props.confirmation ? [intent.props.confirmation.prompts] : [];
              return [...slotPrompts, ...intentPrompts];
            })
            .map((prompt: PromptItems[]) => {
              return {
                id: hashValue(prompt),
                variations: prompt
              };
            })
        : undefined;

    return {
      interactionModel: {
        languageModel: {
          intents: intents
            .map((intent: Intent) => intent.model())
            .concat([
              {
                name: 'AMAZON.CancelIntent',
                samples: []
              },
              {
                name: 'AMAZON.StopIntent',
                samples: []
              },
              {
                name: 'AMAZON.HelpIntent',
                samples: []
              },
              {
                name: 'AMAZON.FallbackIntent',
                samples: []
              }
            ]),
          invocationName: this.props.invocationName
        },
        dialog,
        prompts
      }
    };
  }

  writeToPackageFile(baseSkillPackagePath?: string | undefined): void {
    const interactionFolder = (baseSkillPackagePath ? baseSkillPackagePath : './') + '/interactionModels/custom';
    if (!fs.existsSync(interactionFolder)) {
      fs.mkdirSync(interactionFolder, { recursive: true });
    }

    const model = this.model();
    // write interaction models
    fs.writeFileSync(`${interactionFolder}/${this.getString()}.json`, JSON.stringify(model, null, 2));
  }

  getErrorHandler(): LabeledErrorHandler {
    return {
      uniqueId: `ErrorHandler-${this.getString()}`,
      canHandle: (input: HandlerInput) => {
        const locale = getLocale(input.requestEnvelope);
        const isLocale = locale === this.getString();
        return isLocale;
      },
      handle: this.props.errorHandler!
    };
  }

  getRequestHandlers(): LabeledRequestHandler[] {
    const intentList = Object.keys(this.intents).map((intentName: string) => this.intents[intentName]!);

    return intentList
      .flatMap((intent: Intent) => intent.getRequestHandlers())
      .concat(
        {
          uniqueId: `SessionEnded-${this.getString()}`,
          canHandle: (input: HandlerInput) => {
            const locale = getLocale(input.requestEnvelope);
            const isLocale = locale === this.getString();
            if (!isLocale) {
              return false;
            }
            const requestType = getRequestType(input.requestEnvelope);
            const canHandle = requestType === 'SessionEndedRequest';

            return canHandle;
          },
          handle: wrapHandler(this.props.sessionEndedHandler!)
        },
        {
          uniqueId: `CancelHandler-${this.getString()}`,
          canHandle: (input: HandlerInput) => {
            const locale = getLocale(input.requestEnvelope);
            const isLocale = locale === this.getString();
            if (!isLocale) {
              return false;
            }
            const requestType = getRequestType(input.requestEnvelope);
            const canHandle =
              requestType === 'IntentRequest' &&
              (getIntentName(input.requestEnvelope) === 'AMAZON.StopIntent' ||
                getIntentName(input.requestEnvelope) === 'AMAZON.CancelIntent');

            return canHandle;
          },
          handle: wrapHandler(this.props.cancelHandler!)
        },
        {
          uniqueId: `FallbackHandler-${this.getString()}`,
          canHandle: (input: HandlerInput) => {
            const locale = getLocale(input.requestEnvelope);
            const isLocale = locale === this.getString();
            if (!isLocale) {
              return false;
            }
            const requestType = getRequestType(input.requestEnvelope);
            const canHandle = requestType === 'IntentRequest' && getIntentName(input.requestEnvelope) === 'AMAZON.FallbackIntent';
            return canHandle;
          },
          handle: wrapHandler(this.props.fallbackHandler!)
        },
        {
          uniqueId: `HelpHandler-${this.getString()}`,
          canHandle: (input: HandlerInput) => {
            const locale = getLocale(input.requestEnvelope);
            const isLocale = locale === this.getString();
            if (!isLocale) {
              return false;
            }
            const requestType = getRequestType(input.requestEnvelope);
            const canHandle = requestType === 'IntentRequest' && getIntentName(input.requestEnvelope) === 'AMAZON.HelpIntent';
            return canHandle;
          },
          handle: wrapHandler(this.props.helpHandler!)
        },
        {
          uniqueId: `LaunchHandler-${this.getString()}`,
          canHandle: (input: HandlerInput) => {
            const locale = getLocale(input.requestEnvelope);
            const isLocale = locale === this.getString();
            if (!isLocale) {
              return false;
            }
            const requestType = getRequestType(input.requestEnvelope);
            return requestType === 'LaunchRequest';
          },
          handle: wrapHandler(this.props.launchHandler!)
        }
      );
  }
}
