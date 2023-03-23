import { Command, CommandModel, CommandProps } from './command';
import { LabeledRequestHandler } from '../../skill/models';
import { Calculable } from '../../types';
import { AbsoluteRelativePosition } from '../interfaces';

export interface SetPageCommandModel extends CommandModel {
  componentId?: string;
  position?: Calculable<AbsoluteRelativePosition>;
  value: Calculable<number>;
}
export interface SetPageCommandProps extends CommandProps {
  componentId?: string;
  position?: Calculable<AbsoluteRelativePosition>;
  value: Calculable<number>;
}
export class SetPageCommand extends Command<SetPageCommandModel, SetPageCommandProps> {
  constructor(props: SetPageCommandProps) {
    super('SetPage', props);
  }
  commandSpecificModel(): SetPageCommandModel {
    return {
      componentId: this.props.componentId,
      position: this.props.position,
      value: this.props.value
    };
  }

  commandSpecificRequestHandlers(): LabeledRequestHandler[] {
    return [];
  }
}
