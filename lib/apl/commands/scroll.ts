import { Command, CommandModel, CommandProps } from './command';
import { LabeledRequestHandler } from '../../skill/models';
import { Calculable } from '../../types';
import { Dimension } from '../interfaces';

export interface ScrollCommandModel extends CommandModel {
  componentId?: string;
  distance?: Calculable<Dimension>;
}
export interface ScrollCommandProps extends CommandProps {
  componentId?: string;
  distance?: Calculable<Dimension>;
}
export class ScrollCommand extends Command<ScrollCommandModel, ScrollCommandProps> {
  constructor(props: ScrollCommandProps) {
    super('Scroll', props);
  }
  commandSpecificModel(): ScrollCommandModel {
    return {
      componentId: this.props.componentId,
      distance: this.props.distance
    };
  }

  commandSpecificRequestHandlers(): LabeledRequestHandler[] {
    return [];
  }
}
