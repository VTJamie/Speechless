import { Command, CommandModel, CommandProps } from './command';
import { LabeledRequestHandler } from '../../skill/models';
import { Calculable } from '../../types';
export interface AutoPageCommandModel extends CommandModel {
  componentId?: string;
  count?: Calculable<number>;
  duration?: Calculable<number>;
}
export interface AutoPageCommandProps extends CommandProps {
  componentId?: string;
  count?: Calculable<number>;
  duration?: Calculable<number>;
}
export class AutoPageCommand extends Command<AutoPageCommandModel, AutoPageCommandProps> {
  constructor(props: AutoPageCommandProps) {
    super('AutoPage', props);
  }
  commandSpecificModel(): AutoPageCommandModel {
    return {
      componentId: this.props.componentId,
      count: this.props.count,
      duration: this.props.duration
    };
  }

  commandSpecificRequestHandlers(): LabeledRequestHandler[] {
    return [];
  }
}
