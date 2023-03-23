import { AVGItem, AVGItemModel, AVGItemProps } from './item';
import { Calculable } from '../../../types';
import { Color, FontStyle, FontWeight, PatternModel, PatternProps, TextAnchor } from '../../interfaces';
import { Gradient, GradientModel, GradientProps } from '../gradient';
export interface AVGTextModel extends AVGItemModel {
  /**
   * The text fill color, gradient, or pattern
   */
  fill?: Color | GradientModel | PatternModel;
  /**
   * The opacity of the text fill.
   */
  fillOpacity?: Calculable<number>;
  /**
   * Transform applied to the contents of the group.
   */
  fillTransform?: Calculable<string>;
  /**
   * The name of the font family
   */
  fontFamily?: Calculable<string>;
  /**
   * The size of the font
   */
  fontSize?: Calculable<number>;
  /**
   * The style of the font
   */
  fontStyle?: Calculable<FontStyle>;
  /**
   * The weight of the font
   */
  fontWeight?: Calculable<FontWeight>;
  /**
   * Additional space to add between letters
   */
  letterSpacing?: Calculable<number>;
  /**
   * The text stroke color, gradient, or pattern.
   */
  stroke?: Color | GradientModel | PatternModel;
  /**
   * The opacity of the text stroke.
   */
  strokeOpacity?: Calculable<number>;
  /**
   * Transform applied to the contents of the group.
   */
  strokeTransform?: Calculable<string>;
  /**
   * The width of the text stroke.
   */
  strokeWidth?: Calculable<number>;
  /**
   * The text to display
   */
  text?: Calculable<string>;
  /**
   * Direction the text hangs from the starting point
   */
  textAnchor?: Calculable<TextAnchor>;
  /**
   * X-coordinate starting point (viewport coordinates)
   */
  x?: Calculable<number>;
  /**
   * Y-coordinate starting point (viewport coordinates)
   */
  y?: Calculable<number>;
}

export interface AVGTextProps extends AVGItemProps {
  /**
   * The text fill color, gradient, or pattern
   */
  fill?: Color | Gradient<GradientModel, GradientProps> | PatternModel;
  /**
   * The opacity of the text fill.
   */
  fillOpacity?: Calculable<number>;
  /**
   * Transform applied to the contents of the group.
   */
  fillTransform?: Calculable<string>;
  /**
   * The name of the font family
   */
  fontFamily?: Calculable<string>;
  /**
   * The size of the font
   */
  fontSize?: Calculable<number>;
  /**
   * The style of the font
   */
  fontStyle?: Calculable<FontStyle>;
  /**
   * The weight of the font
   */
  fontWeight?: Calculable<FontWeight>;
  /**
   * Additional space to add between letters
   */
  letterSpacing?: Calculable<number>;
  /**
   * The text stroke color, gradient, or pattern.
   */
  stroke?: Color | Gradient<GradientModel, GradientProps> | PatternProps;
  /**
   * The opacity of the text stroke.
   */
  strokeOpacity?: Calculable<number>;
  /**
   * Transform applied to the contents of the group.
   */
  strokeTransform?: Calculable<string>;
  /**
   * The width of the text stroke.
   */
  strokeWidth?: Calculable<number>;
  /**
   * The text to display
   */
  text?: Calculable<string>;
  /**
   * Direction the text hangs from the starting point
   */
  textAnchor?: Calculable<TextAnchor>;
  /**
   * X-coordinate starting point (viewport coordinates)
   */
  x?: Calculable<number>;
  /**
   * Y-coordinate starting point (viewport coordinates)
   */
  y?: Calculable<number>;
}
export class AVGText extends AVGItem<AVGTextModel, AVGTextProps> {
  constructor(props: AVGTextProps) {
    super('text', props);
  }

  commandSpecificModel(): AVGTextModel {
    return {
      fill: this.props.fill,
      fillOpacity: this.props.fillOpacity,
      fillTransform: this.props.fillTransform,
      fontFamily: this.props.fontFamily,
      fontSize: this.props.fontSize,
      fontStyle: this.props.fontStyle,
      fontWeight: this.props.fontWeight,
      letterSpacing: this.props.letterSpacing,
      stroke: this.props.stroke,
      strokeOpacity: this.props.strokeOpacity,
      strokeTransform: this.props.strokeTransform,
      strokeWidth: this.props.strokeWidth,
      text: this.props.text,
      textAnchor: this.props.textAnchor,
      x: this.props.x,
      y: this.props.y
    };
  }
}
