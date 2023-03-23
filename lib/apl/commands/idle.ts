import { Command, CommandModel, CommandProps } from './command';
import { LabeledRequestHandler } from '../../skill/models';
import { Calculable } from '../../types';

export interface IdleCommandModel extends CommandModel {
  delay: Calculable<number>;
}
export interface IdleCommandProps extends CommandProps {
  delay: Calculable<number>;
}
export class IdleCommand extends Command<IdleCommandModel, IdleCommandProps> {
  constructor(props: IdleCommandProps) {
    super('Idle', props);
  }
  commandSpecificModel(): IdleCommandModel {
    return {
      delay: this.props.delay
    };
  }

  commandSpecificRequestHandlers(): LabeledRequestHandler[] {
    return [];
  }
}
