import { LabeledRequestHandler } from '../../../skill/models';
import { Calculable } from '../../../types';
import { Alignment, APLMultiChildComponentModel, APLMultiChildComponentProps, Direction, Justify, Wrap } from '../../interfaces';
import { convertMultiChildComponentPropsToRequestHandlers } from '../../interfaces/helpers';
import { APLBaseComponentModel, APLBaseComponentProps, APLComponent } from '../component';

export interface APLContainerModel extends APLBaseComponentModel, APLMultiChildComponentModel {
  alignItems?: Calculable<Alignment>;
  direction?: Calculable<Direction>;
  justifyContent?: Calculable<Justify>;
  numbered?: Calculable<boolean>;
  wrap?: Calculable<Wrap>;
}

export interface APLContainerProps extends APLBaseComponentProps, APLMultiChildComponentProps {
  alignItems?: Calculable<Alignment>;
  direction?: Calculable<Direction>;
  justifyContent?: Calculable<Justify>;
  numbered?: Calculable<boolean>;
  wrap?: Calculable<Wrap>;
}

export class APLContainer extends APLComponent<APLContainerModel, APLContainerProps> {
  constructor(props: APLContainerProps) {
    super('Container', props);
  }

  addItems(...items: APLComponent<APLBaseComponentModel, APLBaseComponentProps>[]): this {
    this.props.items.push(...items);
    return this;
  }

  componentSpecificModel(): APLContainerModel {
    return {
      ...this.convertMultiChildComponentPropsToModel(this.props),
      alignItems: this.props.alignItems,
      direction: this.props.direction,
      justifyContent: this.props.justifyContent,
      numbered: this.props.numbered,
      wrap: this.props.wrap
    };
  }

  componentSpecificRequestHandlers(): LabeledRequestHandler[] {
    return convertMultiChildComponentPropsToRequestHandlers(this.props);
  }
}
