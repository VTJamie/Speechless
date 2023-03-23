import { Command, CommandModel, CommandProps } from './command';
import { LabeledRequestHandler } from '../../skill/models';
import { Calculable } from '../../types';
import { ScrollAlignment, HighlightMode } from '../interfaces';
export interface SpeakItemCommandModel extends CommandModel {
  align?: Calculable<ScrollAlignment>;
  componentId?: string;
  highlightMode?: Calculable<HighlightMode>;
  minimumDwellTime?: Calculable<number>;
}
export interface SpeakItemCommandProps extends CommandProps {
  align?: ScrollAlignment;
  componentId?: string;
  highlightMode?: Calculable<HighlightMode>;
  minimumDwellTime?: Calculable<number>;
}
export class SpeakItemCommand extends Command<SpeakItemCommandModel, SpeakItemCommandProps> {
  constructor(props: SpeakItemCommandProps) {
    super('SpeakItem', props);
  }
  commandSpecificModel(): SpeakItemCommandModel {
    return {
      align: this.props.align,
      componentId: this.props.componentId,
      highlightMode: this.props.highlightMode,
      minimumDwellTime: this.props.minimumDwellTime
    };
  }

  commandSpecificRequestHandlers(): LabeledRequestHandler[] {
    return [];
  }
}
