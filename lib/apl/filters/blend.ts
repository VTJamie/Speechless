import { Filter, FilterModel, FilterProps } from './filter';
import { Calculable } from '../../types';

export interface BlendFilterModel extends FilterModel {
  destination?: Calculable<number>;
  mode?: Calculable<string>;
  source?: Calculable<number>;
}
export interface BlendFilterProps extends FilterProps {
  destination?: Calculable<number>;
  mode?: Calculable<string>;
  source?: Calculable<number>;
}
export class BlendFilter extends Filter<BlendFilterModel, BlendFilterProps> {
  constructor(props: BlendFilterProps) {
    super('Blend', props);
  }

  componentSpecificModel(): BlendFilterModel {
    return {
      destination: this.props.destination,
      mode: this.props.mode,
      source: this.props.destination
    };
  }
}
