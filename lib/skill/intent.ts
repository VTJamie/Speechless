import * as Alexa from 'ask-sdk';
import { IntentRequest } from 'ask-sdk-model';

import { hashValue, wrapHandler } from './helpers';
import { SlotProps, ConfirmationProps, RequestHandlerProvider, SlotModel, LabeledRequestHandler, IntentPrompt } from './models';
import { IntentHandler, DelegationStrategyType } from './types';
import { ModelProvider } from '../types';

export interface IntentModel {
  /**
   * Name to identify the intent.
   */
  name: string;
  /**
   * Name of the generator used to generate this object.
   */
  generatedBy?: string;
  /**
   * List of slots within the intent.
   */
  slots?: Array<SlotModel>;
  /**
   * Phrases the user can speak e.g. to trigger an intent or provide value for a slot elicitation.
   */
  samples?: Array<string>;

  confirmationRequired?: boolean;
  prompts?: IntentPrompt;
  delegationStrategy?: DelegationStrategyType;
}

export interface IntentProps {
  intentName: string;
  intentHandler: IntentHandler<IntentRequest>;
  samples: string[];
  launchHandler?: boolean;
  slots?: SlotProps[];
  confirmation?: ConfirmationProps;
  delegationStrategy?: DelegationStrategyType;
}
export class Intent extends ModelProvider<IntentModel> implements RequestHandlerProvider {
  public readonly props: IntentProps;

  constructor(props: IntentProps) {
    super();

    this.props = props;
  }

  toJSON(): IntentModel {
    return this.model();
  }

  private getSlotModel(): SlotModel[] {
    return this.props.slots
      ? this.props.slots?.map((slot) => {
          return {
            name: slot.name,
            multipleValues: slot.multipleValues,
            samples: slot.samples,
            type: slot.type,
            confirmationRequired: slot.confirmation !== undefined,
            elicitationRequired: slot.required !== undefined,
            prompts: {
              confirmation: slot.confirmation ? hashValue(slot.confirmation.prompts) : undefined,
              elicitation: slot.required ? hashValue(slot.required.prompts) : undefined
            }
          };
        })
      : [];
  }

  model(): IntentModel {
    const intentModel: IntentModel = {
      name: this.props.intentName,
      slots: this.getSlotModel(),
      samples: this.props.samples,
      delegationStrategy: this.props.delegationStrategy
    };
    return intentModel;
  }

  usesDialog(): boolean {
    const countsOfDialogSlots = this.props.slots
      ? this.props.slots?.filter((slot) => {
          return slot.confirmation !== undefined || slot.required !== undefined;
        })
      : [];
    return this.props.confirmation !== undefined && countsOfDialogSlots.length > 0;
  }

  slotsUsingDialog(): SlotProps[] {
    return this.props.slots
      ? this.props.slots?.filter((slot) => {
          return slot.required !== undefined || slot.confirmation !== undefined;
        })
      : [];
  }

  getRequestHandlers(): LabeledRequestHandler[] {
    const handler: LabeledRequestHandler = {
      uniqueId: this.props.intentName,
      canHandle: (input: Alexa.HandlerInput) => {
        const requestType = Alexa.getRequestType(input.requestEnvelope);
        const canHandle = requestType === 'IntentRequest' && Alexa.getIntentName(input.requestEnvelope) === this.props.intentName;
        return canHandle;
      },
      handle: wrapHandler(this.props.intentHandler)
    };
    return [handler];
  }
}
