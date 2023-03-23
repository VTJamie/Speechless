import { Command, CommandModel, CommandProps } from './command';
import { LabeledRequestHandler } from '../../skill/models';
import { Calculable } from '../../types';
import { convertCommandListToRequestHandlers } from '../interfaces/helpers';

export interface SequentialCommandModel extends CommandModel {
  catch?: Command<CommandModel, CommandProps>[];
  commands: Command<CommandModel, CommandProps>[];
  repeatCount?: Calculable<number>;
  finally?: Command<CommandModel, CommandProps>[];
}
export interface SequentialCommandProps extends CommandProps {
  catch?: Command<CommandModel, CommandProps>[];
  commands: Command<CommandModel, CommandProps>[];
  repeatCount?: Calculable<number>;
  finally?: Command<CommandModel, CommandProps>[];
}
export class SequentialCommand extends Command<SequentialCommandModel, SequentialCommandProps> {
  constructor(props: SequentialCommandProps) {
    super('Sequential', props);
  }
  commandSpecificModel(): SequentialCommandModel {
    return {
      catch: this.props.catch,
      commands: this.props.commands,
      finally: this.props.finally,
      repeatCount: this.props.repeatCount
    };
  }

  commandSpecificRequestHandlers(): LabeledRequestHandler[] {
    const commandHandlers = convertCommandListToRequestHandlers(this.props.commands);
    const catchHandlers = convertCommandListToRequestHandlers(this.props.catch);
    const finallyHandlers = convertCommandListToRequestHandlers(this.props.finally);
    return [...commandHandlers, ...catchHandlers, ...finallyHandlers];
  }
}
