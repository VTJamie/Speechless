import { LabeledRequestHandler } from '../../../skill/models';
import { Calculable } from '../../../types';
import { Command, CommandModel, CommandProps } from '../../commands';
import {
  APLActionableComponentModel,
  APLActionableComponentProps,
  APLMultiChildComponentModel,
  APLMultiChildComponentProps,
  PagerDirection,
  PagerNavigation
} from '../../interfaces';
import {
  convertActionableComponentPropsToRequestHandlers,
  convertCommandListToRequestHandlers,
  convertComponentListToRequestHandlers,
  convertMultiChildComponentPropsToRequestHandlers
} from '../../interfaces/helpers';
import { APLBaseComponentModel, APLBaseComponentProps, APLComponent } from '../component';

export interface APLPagerModel extends APLBaseComponentModel, APLActionableComponentModel, APLMultiChildComponentModel {
  handlePageMove?: Calculable<string>[];
  initialPage?: Calculable<number>;
  navigation?: Calculable<PagerNavigation>;
  onPageChanged?: Command<CommandModel, CommandProps>[];
  pageDirection?: Calculable<PagerDirection>;
}

export interface APLPagerProps extends APLBaseComponentProps, APLActionableComponentProps, APLMultiChildComponentProps {
  handlePageMove?: Calculable<string>[];
  initialPage?: Calculable<number>;
  navigation?: Calculable<PagerNavigation>;
  onPageChanged?: Command<CommandModel, CommandProps>[];
  pageDirection?: Calculable<PagerDirection>;
}

export class APLPager extends APLComponent<APLPagerModel, APLPagerProps> {
  constructor(props: APLPagerProps) {
    super('Pager', props);
  }

  addItems(...items: APLComponent<APLBaseComponentModel, APLBaseComponentProps>[]): this {
    this.props.items.push(...items);
    return this;
  }

  componentSpecificModel(): APLPagerModel {
    return {
      ...this.convertActionableComponentPropsToModel(this.props),
      ...this.convertMultiChildComponentPropsToModel(this.props),
      handlePageMove: this.props.handlePageMove,
      initialPage: this.props.initialPage,
      navigation: this.props.navigation,
      onPageChanged: this.props.onPageChanged,
      pageDirection: this.props.pageDirection
    };
  }

  componentSpecificRequestHandlers(): LabeledRequestHandler[] {
    return [
      ...convertActionableComponentPropsToRequestHandlers(this.props),
      ...convertMultiChildComponentPropsToRequestHandlers(this.props),
      ...convertCommandListToRequestHandlers(this.props.onPageChanged)
    ];
  }
}
