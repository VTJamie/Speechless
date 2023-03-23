import { Command, CommandModel, CommandProps } from './command';
import { LabeledRequestHandler } from '../../skill/models';
import { convertCommandListToRequestHandlers } from '../interfaces/helpers';

export interface SelectCommandModel extends CommandModel {
  commands: Command<CommandModel, CommandProps>[];
  data?: unknown[];
  otherwise?: Command<CommandModel, CommandProps>[];
}
export interface SelectCommandProps extends CommandProps {
  commands: Command<CommandModel, CommandProps>[];
  data?: unknown[];
  otherwise?: Command<CommandModel, CommandProps>[];
}
export class SelectCommand extends Command<SelectCommandModel, SelectCommandProps> {
  constructor(props: SelectCommandProps) {
    super('Select', props);
  }
  commandSpecificModel(): SelectCommandModel {
    return {
      commands: this.props.commands,
      data: this.props.data,
      otherwise: this.props.otherwise!
    };
  }

  commandSpecificRequestHandlers(): LabeledRequestHandler[] {
    const commandHandlers = convertCommandListToRequestHandlers(this.props.commands);
    const otherwiseHandlers = convertCommandListToRequestHandlers(this.props.otherwise);

    return [...commandHandlers, ...otherwiseHandlers];
  }
}
