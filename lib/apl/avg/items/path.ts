import { AVGItem, AVGItemModel, AVGItemProps } from './item';
import { Calculable } from '../../../types';
import { Color, PatternModel, PatternProps, StrokeLineCap, StrokeLineJoin } from '../../interfaces';
import { Gradient, GradientModel, GradientProps } from '../gradient';
export interface AVGPathModel extends AVGItemModel {
  /**
   * The fill color, gradient, or pattern.
   */
  fill?: Calculable<Color | GradientModel | PatternModel>;
  /**
   * The opacity of the path fill.
   */
  fillOpacity?: Calculable<number>;
  /**
   * Transform applied to the contents of the group.
   */
  fillTransform?: string;
  /**
   * The path drawing data.
   */
  pathData: string;
  /**
   * If defined, specifies the “length” of the path
   */
  pathLength?: Calculable<number>;
  /**
   * The stroke color, gradient, or pattern.
   */
  stroke?: Calculable<Color | GradientModel | PatternModel>;
  /**
   * Pattern of dashes and gaps
   */
  strokeDashArray?: Calculable<number>[];
  /**
   * Offset into dash array pattern
   */
  strokeDashOffset?: Calculable<number>;
  /**
   * Shape to be used at the end of open paths
   */
  strokeLineCap?: Calculable<StrokeLineCap>;
  /**
   * How path corners are drawn
   */
  strokeLineJoin?: Calculable<StrokeLineJoin>;
  /**
   * When sharp path corners are beveled
   */
  strokeMiterLimit?: Calculable<number>;
  /**
   * The opacity of the path stroke.
   */
  strokeOpacity?: Calculable<number>;
  /**
   * Transform applied to the contents of the group.
   */
  strokeTransform?: string;
  /**
   * The width of the path stroke.
   */
  strokeWidth?: Calculable<number>;
}

export interface AVGPathProps extends AVGItemProps {
  /**
   * The fill color, gradient, or pattern.
   */
  fill?: Calculable<Color | Gradient<GradientModel, GradientProps> | PatternProps>;
  /**
   * The opacity of the path fill.
   */
  fillOpacity?: Calculable<number>;
  /**
   * Transform applied to the contents of the group.
   */
  fillTransform?: string;
  /**
   * The path drawing data.
   */
  pathData: string;
  /**
   * If defined, specifies the “length” of the path
   */
  pathLength?: Calculable<number>;
  /**
   * The stroke color, gradient, or pattern.
   */
  stroke?: Calculable<Color | Gradient<GradientModel, GradientProps> | PatternProps>;
  /**
   * Pattern of dashes and gaps
   */
  strokeDashArray?: Calculable<number>[];
  /**
   * Offset into dash array pattern
   */
  strokeDashOffset?: Calculable<number>;
  /**
   * Shape to be used at the end of open paths
   */
  strokeLineCap?: Calculable<StrokeLineCap>;
  /**
   * How path corners are drawn
   */
  strokeLineJoin?: Calculable<StrokeLineJoin>;
  /**
   * When sharp path corners are beveled
   */
  strokeMiterLimit?: Calculable<number>;
  /**
   * The opacity of the path stroke.
   */
  strokeOpacity?: Calculable<number>;
  /**
   * Transform applied to the contents of the group.
   */
  strokeTransform?: string;
  /**
   * The width of the path stroke.
   */
  strokeWidth?: Calculable<number>;
}

export class AVGPath extends AVGItem<AVGPathModel, AVGPathProps> {
  constructor(props: AVGPathProps) {
    super('path', props);
  }

  commandSpecificModel(): AVGPathModel {
    return {
      fill: this.props.fill,
      fillOpacity: this.props.fillOpacity,
      fillTransform: this.props.fillTransform,
      pathData: this.props.pathData,
      pathLength: this.props.pathLength,
      stroke: this.props.stroke,
      strokeDashArray: this.props.strokeDashArray,
      strokeDashOffset: this.props.strokeDashOffset,
      strokeLineCap: this.props.strokeLineCap,
      strokeLineJoin: this.props.strokeLineJoin,
      strokeMiterLimit: this.props.strokeMiterLimit,
      strokeOpacity: this.props.strokeOpacity,
      strokeTransform: this.props.strokeTransform,
      strokeWidth: this.props.strokeWidth
    };
  }
}
