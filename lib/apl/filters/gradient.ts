import { Filter, FilterModel, FilterProps } from './filter';
import { Gradient, GradientModel, GradientProps } from '../avg/gradient/gradient';

export interface GradientFilterModel extends FilterModel {
  gradient?: Gradient<GradientModel, GradientProps>;
}
export interface GradientFilterProps extends FilterProps {
  gradient?: Gradient<GradientModel, GradientProps>;
}
export class GradientFilter extends Filter<GradientFilterModel, GradientFilterProps> {
  constructor(props: GradientFilterProps) {
    super('Gradient', props);
  }

  componentSpecificModel(): GradientFilterModel {
    return {
      gradient: this.props.gradient
    };
  }
}
