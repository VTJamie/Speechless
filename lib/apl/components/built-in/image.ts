import { LabeledRequestHandler } from '../../../skill/models';
import { Calculable } from '../../../types';
import { Command, CommandModel, CommandProps } from '../../commands';
import { Filter, FilterModel, FilterProps } from '../../filters';
import { Color, Dimension, ImageAlign, Scale, Source } from '../../interfaces';
import { convertCommandListToRequestHandlers } from '../../interfaces/helpers';
import { APLBaseComponentModel, APLBaseComponentProps, APLComponent } from '../component';

export interface APLImageModel extends APLBaseComponentModel {
  sources?: Source[];
  source?: Source;
  scale?: Scale;
  align?: ImageAlign;
  borderRadius?: Calculable<Dimension>;
  overlayColor?: Calculable<Color>;
  filters?: FilterModel[];
  overlayGradient?: Calculable<string>;
  onLoad?: Command<CommandModel, CommandProps>[];
  onFail?: Command<CommandModel, CommandProps>[];
}

export interface APLImageProps extends APLBaseComponentProps {
  sources?: Source[];
  source?: Source;
  scale?: Scale;
  align?: ImageAlign;
  borderRadius?: Calculable<Dimension>;
  overlayColor?: Calculable<Color>;
  filters?: Filter<FilterModel, FilterProps>[];
  overlayGradient?: Calculable<string>;
  onLoad?: Command<CommandModel, CommandProps>[];
  onFail?: Command<CommandModel, CommandProps>[];
}

export class APLImage extends APLComponent<APLImageModel, APLImageProps> {
  constructor(props: APLImageProps) {
    super('Image', props);
  }
  componentSpecificModel(): APLImageModel {
    return {
      sources: this.props.sources,
      source: this.props.source,
      scale: this.props.scale,
      align: this.props.align,
      borderRadius: this.props.borderRadius,
      overlayColor: this.props.overlayColor,
      filters: this.props.filters,
      overlayGradient: this.props.overlayGradient,
      onLoad: this.props.onLoad,
      onFail: this.props.onFail
    };
  }
  componentSpecificRequestHandlers(): LabeledRequestHandler[] {
    return [...convertCommandListToRequestHandlers(this.props.onLoad), ...convertCommandListToRequestHandlers(this.props.onFail)];
  }
}
