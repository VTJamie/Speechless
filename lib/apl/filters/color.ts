import { Filter, FilterModel, FilterProps } from './filter';
import { Calculable } from '../../types';
import { Color } from '../interfaces';

export interface ColorFilterModel extends FilterModel {
  color?: Calculable<Color>;
}
export interface ColorFilterProps extends FilterProps {
  color?: Calculable<Color>;
}
export class ColorFilter extends Filter<ColorFilterModel, ColorFilterProps> {
  constructor(props: ColorFilterProps) {
    super('Color', props);
  }

  componentSpecificModel(): ColorFilterModel {
    return {
      color: this.props.color
    };
  }
}
