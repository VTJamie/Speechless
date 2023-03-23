import { LabeledRequestHandler } from '../../../skill/models';
import { Calculable } from '../../../types';
import { APLMultiChildComponentModel, APLMultiChildComponentProps, Color, Dimension } from '../../interfaces';
import { convertMultiChildComponentPropsToRequestHandlers } from '../../interfaces/helpers';
import { APLBaseComponentModel, APLBaseComponentProps, APLComponent } from '../component';

export interface APLFrameModel extends APLBaseComponentModel, APLMultiChildComponentModel {
  backgroundColor?: Calculable<Color>;
  borderBottomLeftRadius?: Calculable<string>;
  borderBottomRightRadius?: Calculable<string>;
  borderColor?: Calculable<Color>;
  borderRadius?: Calculable<string>;
  borderStrokeWidth?: Calculable<Dimension>;
  borderTopLeftRadius?: Calculable<string>;
  borderTopRightRadius?: Calculable<string>;
  borderWidth?: Calculable<Dimension>;
}

export interface APLFrameProps extends APLBaseComponentProps, APLMultiChildComponentProps {
  backgroundColor?: Calculable<Color>;
  borderBottomLeftRadius?: Calculable<string>;
  borderBottomRightRadius?: Calculable<string>;
  borderColor?: Calculable<Color>;
  borderRadius?: Calculable<string>;
  borderStrokeWidth?: Calculable<Dimension>;
  borderTopLeftRadius?: Calculable<string>;
  borderTopRightRadius?: Calculable<string>;
  borderWidth?: Calculable<Dimension>;
}

export class APLFrame extends APLComponent<APLFrameModel, APLFrameProps> {
  constructor(props: APLFrameProps) {
    super('Frame', props);
  }
  addItems(...items: APLComponent<APLBaseComponentModel, APLBaseComponentProps>[]): this {
    this.props.items.push(...items);
    return this;
  }

  componentSpecificModel(): APLFrameModel {
    return {
      ...this.convertMultiChildComponentPropsToModel(this.props)
    };
  }

  componentSpecificRequestHandlers(): LabeledRequestHandler[] {
    return convertMultiChildComponentPropsToRequestHandlers(this.props);
  }
}
