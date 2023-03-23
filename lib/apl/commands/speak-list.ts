import { Command, CommandModel, CommandProps } from './command';
import { LabeledRequestHandler } from '../../skill/models';
import { Calculable } from '../../types';
import { ScrollAlignment, HighlightMode } from '../interfaces';

export interface SpeakListCommandModel extends CommandModel {
  align?: Calculable<ScrollAlignment>;
  componentId?: string;
  highlightMode?: Calculable<HighlightMode>;
  minimumDwellTime?: Calculable<number>;
  count: Calculable<number>;
  start: Calculable<number>;
}
export interface SpeakListCommandProps extends CommandProps {
  align?: Calculable<ScrollAlignment>;
  componentId?: string;
  highlightMode?: Calculable<HighlightMode>;
  minimumDwellTime?: Calculable<number>;
  count: Calculable<number>;
  start: Calculable<number>;
}
export class SpeakListCommand extends Command<SpeakListCommandModel, SpeakListCommandProps> {
  constructor(props: SpeakListCommandProps) {
    super('SpeakList', props);
  }
  commandSpecificModel(): SpeakListCommandModel {
    return {
      align: this.props.align,
      componentId: this.props.componentId,
      highlightMode: this.props.highlightMode,
      minimumDwellTime: this.props.minimumDwellTime,
      count: this.props.count,
      start: this.props.start
    };
  }

  commandSpecificRequestHandlers(): LabeledRequestHandler[] {
    return [];
  }
}
