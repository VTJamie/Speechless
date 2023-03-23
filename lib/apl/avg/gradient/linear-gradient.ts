import { Gradient, GradientModel, GradientProps } from './gradient';
import { Calculable } from '../../../types';
import { Color, GradientUnits, SpreadMethod } from '../../interfaces';

export interface LinearGradientModel extends GradientModel {
  colorRange: Calculable<Color[]>;
  /**
   * Optional description of this gradient
   */
  description?: string;
  /**
   * The input stops of the gradient.
   */
  inputRange?: Calculable<number[]>;
  /**
   * The coordinate system for positioning
   */
  units?: Calculable<GradientUnits>;
  /**
   * Gradient behavior outside of the defined range
   */
  spreadMethod?: Calculable<SpreadMethod>;
  /**
   * Gradient behavior outside of the defined range
   */
  x1?: Calculable<number>;
  /**
   * Gradient behavior outside of the defined range
   */
  x2?: Calculable<number>;
  /**
   * Gradient behavior outside of the defined range
   */
  y1?: Calculable<number>;
  /**
   * Gradient behavior outside of the defined range
   */
  y2?: Calculable<number>;
}

export interface LinearGradientProps extends GradientProps {
  colorRange: Calculable<Color[]>;
  /**
   * Optional description of this gradient
   */
  description?: string;
  /**
   * The input stops of the gradient.
   */
  inputRange?: Calculable<number[]>;
  /**
   * The coordinate system for positioning
   */
  units?: Calculable<GradientUnits>;
  /**
   * Gradient behavior outside of the defined range
   */
  spreadMethod?: Calculable<SpreadMethod>;
  /**
   * Gradient behavior outside of the defined range
   */
  x1?: Calculable<number>;
  /**
   * Gradient behavior outside of the defined range
   */
  x2?: Calculable<number>;
  /**
   * Gradient behavior outside of the defined range
   */
  y1?: Calculable<number>;
  /**
   * Gradient behavior outside of the defined range
   */
  y2?: Calculable<number>;
}

export class LinearGradient extends Gradient<LinearGradientModel, LinearGradientProps> {
  constructor(props: LinearGradientProps) {
    super('linear', props);
  }
  componentSpecificModel(): LinearGradientModel {
    return {
      colorRange: this.props.colorRange,
      description: this.props.description,
      inputRange: this.props.inputRange,
      units: this.props.units,
      spreadMethod: this.props.spreadMethod,
      x1: this.props.x1,
      x2: this.props.x2,
      y1: this.props.y1,
      y2: this.props.y2
    };
  }
}
