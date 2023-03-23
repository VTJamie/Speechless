import { Command, CommandModel, CommandProps } from './command';
import { LabeledRequestHandler } from '../../skill/models';
import { Calculable } from '../../types';

export interface SetValueCommandModel extends CommandModel {
  componentId?: string;
  property: Calculable<string>;
  value: Calculable<unknown>;
}
export interface SetValueCommandProps extends CommandProps {
  componentId?: string;
  property: Calculable<string>;
  value: Calculable<unknown>;
}

export class SetValueCommand extends Command<SetValueCommandModel, SetValueCommandProps> {
  constructor(props: SetValueCommandProps) {
    super('SetValue', props);
  }
  commandSpecificModel(): SetValueCommandModel {
    return {
      componentId: this.props.componentId,
      property: this.props.property,
      value: this.props.value
    };
  }

  commandSpecificRequestHandlers(): LabeledRequestHandler[] {
    return [];
  }
}
