import { Filter, FilterModel, FilterProps } from './filter';
import { Calculable } from '../../types';
import { Dimension } from '../interfaces';

export interface BlurFilterModel extends FilterModel {
  radius?: Calculable<Dimension>;
  source?: Calculable<number>;
}
export interface BlurFilterProps extends FilterProps {
  radius?: Calculable<Dimension>;
  source?: Calculable<number>;
}
export class BlurFilter extends Filter<BlurFilterModel, BlurFilterProps> {
  constructor(props: BlurFilterProps) {
    super('Blur', props);
  }

  componentSpecificModel(): BlurFilterModel {
    return {
      radius: this.props.radius,
      source: this.props.source
    };
  }
}
