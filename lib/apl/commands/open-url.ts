import { Command, CommandModel, CommandProps } from './command';
import { LabeledRequestHandler } from '../../skill/models';
import { Calculable } from '../../types';
import { convertCommandListToRequestHandlers } from '../interfaces/helpers';

export interface OpenURLCommandModel extends CommandModel {
  source: Calculable<string>;
  onFail?: Command<CommandModel, CommandProps>[];
}
export interface OpenURLCommandProps extends CommandProps {
  source: Calculable<string>;
  onFail?: Command<CommandModel, CommandProps>[];
}
export class OpenURLCommand extends Command<OpenURLCommandModel, OpenURLCommandProps> {
  constructor(props: OpenURLCommandProps) {
    super('OpenURL', props);
  }
  commandSpecificModel(): OpenURLCommandModel {
    return {
      source: this.props.source,
      onFail: this.props.onFail
    };
  }

  commandSpecificRequestHandlers(): LabeledRequestHandler[] {
    return convertCommandListToRequestHandlers(this.props.onFail);
  }
}
