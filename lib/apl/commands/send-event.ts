import * as Alexa from 'ask-sdk-core';
import { HandlerInput } from 'ask-sdk-core';
import { interfaces } from 'ask-sdk-model';

import { Command, CommandModel, CommandProps } from './command';
import { IntentHandler, LabeledRequestHandler } from '../../skill';
import { wrapHandler } from '../../skill/helpers';

export interface SendEventCommandModel extends CommandModel {
  arguments?: unknown[];
  components?: string[];
}
export interface SendEventCommandProps extends CommandProps {
  arguments?: unknown[];
  components?: string[];
  uniqueId: string;
  handler: IntentHandler<interfaces.alexa.presentation.apl.UserEvent>;
}
export class SendEventCommand extends Command<SendEventCommandModel, SendEventCommandProps> {
  constructor(props: SendEventCommandProps) {
    super('SendEvent', props);
  }
  commandSpecificModel(): SendEventCommandModel {
    return {
      arguments: [this.props.uniqueId as unknown].concat(...(this.props.arguments ? this.props.arguments : [])),
      components: this.props.components
    };
  }

  commandSpecificRequestHandlers(): LabeledRequestHandler[] {
    return [
      {
        uniqueId: this.props.uniqueId,
        canHandle: (input: HandlerInput) => {
          const request: interfaces.alexa.presentation.apl.UserEvent = Alexa.getRequest(input.requestEnvelope);
          return (
            Alexa.getRequestType(input.requestEnvelope) === 'Alexa.Presentation.APL.UserEvent' &&
            request.arguments !== undefined &&
            request.arguments.length > 0 &&
            request.arguments[0] === this.props.uniqueId
          );
        },
        handle: (input: HandlerInput) => {
          const request: interfaces.alexa.presentation.apl.UserEvent = Alexa.getRequest(input.requestEnvelope);
          request.arguments?.shift();
          return wrapHandler(this.props.handler)(input);
        }
      }
    ];
  }
}
