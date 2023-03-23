import { Calculable, ModelProvider } from '../../../types';
import { APLResourceModel, Dimension, ScaleType } from '../../interfaces';
import { AVGItem, AVGItemModel, AVGItemProps } from '../items/item';

export interface AVGGraphicModel {
  data?: unknown;
  description?: string;
  height?: Calculable<Dimension>;
  items?: AVGItemModel[];
  parameters?: unknown;
  resources?: APLResourceModel[];
  scaleTypeHeight?: Calculable<ScaleType>;
  scaleTypeWidth?: Calculable<ScaleType>;
  styles?: unknown[];
  type: 'AVG';
  version: '1.2';
  viewportHeight?: Calculable<Dimension>;
  viewportWidth?: Calculable<Dimension>;
  width?: Calculable<Dimension>;
}

export interface AVGGraphicProps {
  data?: unknown;
  description?: string;
  height?: Calculable<Dimension>;
  items?: AVGItem<AVGItemModel, AVGItemProps>[];
  parameters?: unknown;
  resources?: APLResourceModel[];
  scaleTypeHeight?: Calculable<ScaleType>;
  scaleTypeWidth?: Calculable<ScaleType>;
  styles?: unknown[];
  viewportHeight?: Calculable<Dimension>;
  viewportWidth?: Calculable<Dimension>;
  width?: Calculable<Dimension>;
}

export class AVGGraphic implements ModelProvider<AVGGraphicModel> {
  readonly props: AVGGraphicProps;
  constructor(props: AVGGraphicProps) {
    this.props = props;
  }
  toJSON(): AVGGraphicModel {
    return this.model();
  }
  model(): AVGGraphicModel {
    return {
      data: this.props.description,
      description: this.props.description,
      height: this.props.height,
      items: this.props.items?.map((item) => item.model()),
      parameters: this.props.parameters,
      resources: this.props.resources,
      scaleTypeHeight: this.props.scaleTypeHeight,
      scaleTypeWidth: this.props.scaleTypeWidth,
      styles: this.props.styles,
      type: 'AVG',
      version: '1.2',
      viewportHeight: this.props.viewportHeight,
      viewportWidth: this.props.viewportWidth,
      width: this.props.width
    };
  }
}
