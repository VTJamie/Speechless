import { Filter, FilterModel, FilterProps } from './filter';
import { Calculable } from '../../types';

export interface GrayscaleFilterModel extends FilterModel {
  amount?: Calculable<number>;
  source?: Calculable<number>;
}
export interface GrayscaleFilterProps extends FilterProps {
  amount?: Calculable<number>;
  source?: Calculable<number>;
}
export class GrayscaleFilter extends Filter<GrayscaleFilterModel, GrayscaleFilterProps> {
  constructor(props: GrayscaleFilterProps) {
    super('Grayscale', props);
  }

  componentSpecificModel() {
    return {
      amount: this.props.amount,
      source: this.props.source
    };
  }
}
