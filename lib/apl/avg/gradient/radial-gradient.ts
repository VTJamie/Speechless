import { Gradient, GradientModel, GradientProps } from './gradient';
import { Calculable } from '../../../types';
import { Color, GradientUnits } from '../../interfaces';

export interface RadialGradientModel extends GradientModel {
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
   * The x-position of the center of the gradient
   */
  centerX?: Calculable<number>;
  /**
   * The y-position of the center of the gradient
   */
  centerY?: Calculable<number>;
  /**
   * The radius of the gradient (distance to end)
   */
  radius?: Calculable<number>;
}

export interface RadialGradientProps extends GradientProps {
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
   * The x-position of the center of the gradient
   */
  centerX?: Calculable<number>;
  /**
   * The y-position of the center of the gradient
   */
  centerY?: Calculable<number>;
  /**
   * The radius of the gradient (distance to end)
   */
  radius?: Calculable<number>;
}

export class RadialGradient extends Gradient<RadialGradientModel, RadialGradientProps> {
  constructor(props: RadialGradientProps) {
    super('radial', props);
  }
  componentSpecificModel(): RadialGradientModel {
    return {
      colorRange: this.props.colorRange,
      description: this.props.description,
      inputRange: this.props.inputRange,
      units: this.props.units,
      centerX: this.props.centerX,
      centerY: this.props.centerY,
      radius: this.props.radius
    };
  }
}
