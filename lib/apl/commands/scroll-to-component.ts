import { Command, CommandModel, CommandProps } from './command';
import { LabeledRequestHandler } from '../../skill/models';
import { Calculable } from '../../types';
import { ScrollAlignment } from '../interfaces';

export interface ScrollToComponentCommandModel extends CommandModel {
  align?: Calculable<ScrollAlignment>;
  componentId?: string;
}
export interface ScrollToComponentCommandProps extends CommandProps {
  align?: Calculable<ScrollAlignment>;
  componentId?: string;
}
export class ScrollToComponentCommand extends Command<ScrollToComponentCommandModel, ScrollToComponentCommandProps> {
  constructor(props: ScrollToComponentCommandProps) {
    super('ScrollToComponent', props);
  }
  commandSpecificModel(): ScrollToComponentCommandModel {
    return {
      align: this.props.align,
      componentId: this.props.componentId
    };
  }

  commandSpecificRequestHandlers(): LabeledRequestHandler[] {
    return [];
  }
}
