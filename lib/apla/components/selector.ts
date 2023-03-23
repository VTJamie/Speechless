import { APLABaseComponentModel, APLABaseComponentProps, APLAComponent } from './component';
import { Calculable } from '../../types';
import { APLAMultiChildComponentModel, APLAMultiChildComponentProps, SelectorStrategy } from '../interfaces';
import { convertAPLAMultiChildComponentPropsToModel } from '../interfaces/helpers';

export interface APLASelectorModel extends APLABaseComponentModel, APLAMultiChildComponentModel {
  strategy?: Calculable<SelectorStrategy>;
}

export interface APLASelectorProps extends APLABaseComponentProps, APLAMultiChildComponentProps {
  strategy?: Calculable<SelectorStrategy>;
}

export class APLASelector extends APLAComponent<APLASelectorModel, APLASelectorProps> {
  constructor(props: APLASelectorProps) {
    super('Selector', props);
  }

  componentSpecificModel(): APLASelectorModel {
    return {
      strategy: this.props.strategy,
      ...convertAPLAMultiChildComponentPropsToModel(this.props)
    };
  }
}
