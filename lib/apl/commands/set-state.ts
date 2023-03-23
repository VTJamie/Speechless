import { Command, CommandModel, CommandProps } from './command';
import { LabeledRequestHandler } from '../../skill/models';
import { Calculable } from '../../types';
import { ComponentState } from '../interfaces';

export interface SetStateCommandModel extends CommandModel {
  componentId?: string;
  state: Calculable<ComponentState>;
  value: Calculable<boolean>;
}
export interface SetStateCommandProps extends CommandProps {
  componentId?: string;
  state: Calculable<ComponentState>;
  value: Calculable<boolean>;
}
export class SetStateCommand extends Command<SetStateCommandModel, SetStateCommandProps> {
  constructor(props: SetStateCommandProps) {
    super('SetState', props);
  }
  commandSpecificModel(): SetStateCommandModel {
    return {
      componentId: this.props.componentId,
      state: this.props.state,
      value: this.props.value
    };
  }

  commandSpecificRequestHandlers(): LabeledRequestHandler[] {
    return [];
  }
}
