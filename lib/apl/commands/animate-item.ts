import { Command, CommandModel, CommandProps } from './command';
import { LabeledRequestHandler } from '../../skill/models';
import { Calculable } from '../../types';
import { AnimateValueModel, Easing, RepeatMode } from '../interfaces';

export interface AnimateItemCommandModel extends CommandModel {
  componentId?: string;
  duration: Calculable<number>;
  easing?: Calculable<Easing>;
  repeatCount?: Calculable<number>;
  repeatMode?: Calculable<RepeatMode>;
  value: Calculable<AnimateValueModel[]>;
}
export interface AnimateItemCommandProps extends CommandProps {
  componentId?: string;
  duration: Calculable<number>;
  easing?: Calculable<Easing>;
  repeatCount?: Calculable<number>;
  repeatMode?: Calculable<RepeatMode>;
  value: Calculable<AnimateValueModel[]>;
}
export class AnimateItemCommand extends Command<AnimateItemCommandModel, AnimateItemCommandProps> {
  constructor(props: AnimateItemCommandProps) {
    super('AnimateItem', props);
  }
  commandSpecificModel(): AnimateItemCommandModel {
    return {
      componentId: this.props.componentId,
      duration: this.props.duration,
      easing: this.props.easing,
      repeatMode: this.props.repeatMode,
      value: this.props.value
    };
  }

  commandSpecificRequestHandlers(): LabeledRequestHandler[] {
    return [];
  }
}
