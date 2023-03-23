import { LabeledRequestHandler } from '../../../skill/models';
import { Calculable } from '../../../types';
import { Command, CommandModel, CommandProps } from '../../commands';
import {
  APLActionableComponentModel,
  APLActionableComponentProps,
  APLMultiChildComponentModel,
  APLMultiChildComponentProps
} from '../../interfaces';
import {
  convertActionableComponentPropsToRequestHandlers,
  convertCommandListToRequestHandlers,
  convertMultiChildComponentPropsToRequestHandlers
} from '../../interfaces/helpers';
import { APLBaseComponentModel, APLBaseComponentProps, APLComponent } from '../component';

export interface APLGridSequenceModel extends APLBaseComponentModel, APLActionableComponentModel, APLMultiChildComponentModel {
  childHeights?: string[];
  childWidths?: string[];
  numbered: Calculable<boolean>;
  onScroll?: Command<CommandModel, CommandProps>[];
}

export interface APLGridSequenceProps extends APLBaseComponentProps, APLActionableComponentProps, APLMultiChildComponentProps {
  childHeights?: string[];
  childWidths?: string[];
  numbered: Calculable<boolean>;
  onScroll?: Command<CommandModel, CommandProps>[];
}

export class APLGridSequence extends APLComponent<APLGridSequenceModel, APLGridSequenceProps> {
  constructor(props: APLGridSequenceProps) {
    super('GridSequence', props);
  }

  addItems(...items: APLComponent<APLBaseComponentModel, APLBaseComponentProps>[]): this {
    this.props.items.push(...items);
    return this;
  }

  componentSpecificModel(): APLGridSequenceModel {
    return {
      ...this.convertActionableComponentPropsToModel(this.props),
      ...this.convertMultiChildComponentPropsToModel(this.props),
      childHeights: this.props.childHeights,
      childWidths: this.props.childWidths,
      numbered: this.props.numbered,
      onScroll: this.props.onScroll
    };
  }

  componentSpecificRequestHandlers(): LabeledRequestHandler[] {
    return [
      ...convertActionableComponentPropsToRequestHandlers(this.props),
      ...convertMultiChildComponentPropsToRequestHandlers(this.props),
      ...convertCommandListToRequestHandlers(this.props.onScroll)
    ];
  }
}
