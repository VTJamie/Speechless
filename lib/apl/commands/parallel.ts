import { Command, CommandModel, CommandProps } from './command';
import { LabeledRequestHandler } from '../../skill/models';
import { convertCommandListToRequestHandlers } from '../interfaces/helpers';

export interface ParallelCommandModel extends CommandModel {
  commands: Command<CommandModel, CommandProps>[];
}
export interface ParallelCommandProps extends CommandProps {
  commands: Command<CommandModel, CommandProps>[];
}
export class ParallelCommand extends Command<ParallelCommandModel, ParallelCommandProps> {
  constructor(props: ParallelCommandProps) {
    super('Parallel', props);
  }
  commandSpecificModel(): ParallelCommandModel {
    return {
      commands: this.props.commands
    };
  }

  commandSpecificRequestHandlers(): LabeledRequestHandler[] {
    return convertCommandListToRequestHandlers(this.props.commands);
  }
}
