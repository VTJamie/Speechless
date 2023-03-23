import { APLABaseComponentModel, APLABaseComponentProps, APLAComponent } from './component';
import { Calculable } from '../../types';

export interface APLAAudioModel extends APLABaseComponentModel {
  source: Calculable<string>;
}

export interface APLAAudioProps extends APLABaseComponentProps {
  source: Calculable<string>;
}

export class APLAAudio extends APLAComponent<APLAAudioModel, APLAAudioProps> {
  constructor(props: APLAAudioProps) {
    super('Audio', props);
  }

  componentSpecificModel(): APLAAudioModel {
    return {
      source: this.props.source
    };
  }
}
