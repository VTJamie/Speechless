import { APLABaseComponentModel, APLABaseComponentProps, APLAComponent } from './component';
import { Calculable } from '../../types';

export interface APLASilenceModel extends APLABaseComponentModel {
  duration: Calculable<number>;
}

export interface APLASilenceProps extends APLABaseComponentProps {
  duration: Calculable<number>;
}

export class APLASilence extends APLAComponent<APLASilenceModel, APLASilenceProps> {
  constructor(props: APLASilenceProps) {
    super('Silence', props);
  }

  componentSpecificModel(): APLASilenceModel {
    return {
      duration: this.props.duration
    };
  }
}
