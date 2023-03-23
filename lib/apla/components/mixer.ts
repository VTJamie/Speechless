import { APLABaseComponentModel, APLABaseComponentProps, APLAComponent } from './component';
import { APLAMultiChildComponentModel } from '../interfaces';
import { convertAPLAMultiChildComponentPropsToModel } from '../interfaces/helpers';
import { APLAMultiChildComponentProps } from '../interfaces/props';

export interface APLAMixerModel extends APLABaseComponentModel, APLAMultiChildComponentModel {}

export interface APLAMixerProps extends APLABaseComponentProps, APLAMultiChildComponentProps {}

export class APLAMixer extends APLAComponent<APLAMixerModel, APLAMixerProps> {
  constructor(props: APLAMixerProps) {
    super('Mixer', props);
  }

  componentSpecificModel(): APLAMixerModel {
    return {
      ...convertAPLAMultiChildComponentPropsToModel(this.props)
    };
  }
}
