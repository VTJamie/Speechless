import { Command, CommandModel, CommandProps } from './command';
import { LabeledRequestHandler } from '../../skill/models';
import { Calculable } from '../../types';
import { ScrollAlignment } from '../interfaces';
export interface ScrollToIndexCommandModel extends CommandModel {
  align?: Calculable<ScrollAlignment>;
  componentId?: string;
  index: Calculable<number>;
}
export interface ScrollToIndexCommandProps extends CommandProps {
  align?: Calculable<ScrollAlignment>;
  componentId?: string;
  index: Calculable<number>;
}
export class ScrollToIndexCommand extends Command<ScrollToIndexCommandModel, ScrollToIndexCommandProps> {
  constructor(props: ScrollToIndexCommandProps) {
    super('ScrollToIndex', props);
  }
  commandSpecificModel(): ScrollToIndexCommandModel {
    return {
      align: this.props.align,
      componentId: this.props.componentId,
      index: this.props.index
    };
  }

  commandSpecificRequestHandlers(): LabeledRequestHandler[] {
    return [];
  }
}
