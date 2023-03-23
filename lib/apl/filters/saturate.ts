import { Filter, FilterModel, FilterProps } from './filter';
import { Calculable } from '../../types';

export interface SaturateFilterModel extends FilterModel {
  amount?: Calculable<number>;
  source?: Calculable<number>;
}
export interface SaturateFilterProps extends FilterProps {
  amount?: Calculable<number>;
  source?: Calculable<number>;
}
export class SaturateFilter extends Filter<SaturateFilterModel, SaturateFilterProps> {
  constructor(props: SaturateFilterProps) {
    super('Saturate', props);
  }

  componentSpecificModel() {
    return {
      amount: this.props.amount,
      source: this.props.source
    };
  }
}
