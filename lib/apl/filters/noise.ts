import { Filter, FilterModel, FilterProps } from './filter';
import { Calculable } from '../../types';

export interface NoiseFilterModel extends FilterModel {
  kind?: Calculable<string>;
  useColor?: Calculable<boolean>;
  sigma?: Calculable<number>;
  source?: Calculable<number>;
}
export interface NoiseFilterProps extends FilterProps {
  kind?: Calculable<string>;
  useColor?: Calculable<boolean>;
  sigma?: Calculable<number>;
  source?: Calculable<number>;
}
export class NoiseFilter extends Filter<NoiseFilterModel, NoiseFilterProps> {
  constructor(props: NoiseFilterProps) {
    super('Noise', props);
  }

  componentSpecificModel() {
    return {
      kind: this.props.kind,
      useColor: this.props.useColor,
      sigma: this.props.sigma,
      source: this.props.source
    };
  }
}
