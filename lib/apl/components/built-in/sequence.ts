import { LabeledRequestHandler } from '../../../skill/models';
import { Calculable } from '../../../types';
import { Command, CommandModel, CommandProps } from '../../commands';
import {
  APLActionableComponentModel,
  APLActionableComponentProps,
  APLMultiChildComponentModel,
  APLMultiChildComponentProps,
  PagerDirection,
  Snap
} from '../../interfaces';
import {
  convertActionableComponentPropsToRequestHandlers,
  convertCommandListToRequestHandlers,
  convertMultiChildComponentPropsToRequestHandlers
} from '../../interfaces/helpers';
import { APLBaseComponentModel, APLBaseComponentProps, APLComponent } from '../component';

export interface APLSequenceModel extends APLBaseComponentModel, APLActionableComponentModel, APLMultiChildComponentModel {
  /**
   * The direction to scroll this Sequence.
   */
  scrollDirection?: Calculable<PagerDirection>;
  numbered?: Calculable<boolean>;
  onScroll?: Command<CommandModel, CommandProps>[];
  snap?: Calculable<Snap>;
}

export interface APLSequenceProps extends APLBaseComponentProps, APLActionableComponentProps, APLMultiChildComponentProps {
  /**
   * The direction to scroll this Sequence.
   */
  scrollDirection?: Calculable<PagerDirection>;
  numbered?: Calculable<boolean>;
  onScroll?: Command<CommandModel, CommandProps>[];
  snap?: Calculable<Snap>;
}

export class APLSequence extends APLComponent<APLSequenceModel, APLSequenceProps> {
  constructor(props: APLSequenceProps) {
    super('Sequence', props);
  }
  componentSpecificModel(): APLSequenceModel {
    return {
      ...this.convertActionableComponentPropsToModel(this.props),
      ...this.convertMultiChildComponentPropsToModel(this.props),
      onScroll: this.props.onScroll,
      scrollDirection: this.props.scrollDirection,
      numbered: this.props.numbered,
      snap: this.props.snap
    };
  }

  componentSpecificRequestHandlers(): LabeledRequestHandler[] {
    return [
      ...convertCommandListToRequestHandlers(this.props.onScroll),
      ...convertMultiChildComponentPropsToRequestHandlers(this.props),
      ...convertActionableComponentPropsToRequestHandlers(this.props)
    ];
  }
}
