import { APLABaseComponentModel, APLABaseComponentProps, APLAComponent } from './component';
import { APLAMultiChildComponentModel, APLAMultiChildComponentProps } from '../interfaces';
import { convertAPLAMultiChildComponentPropsToModel } from '../interfaces/helpers';

export interface APLASequencerModel extends APLABaseComponentModel, APLAMultiChildComponentModel {}

export interface APLASequencerProps extends APLABaseComponentProps, APLAMultiChildComponentProps {}

export class APLASequencer extends APLAComponent<APLASequencerModel, APLASequencerProps> {
  constructor(props: APLASequencerProps) {
    super('Sequencer', props);
  }

  componentSpecificModel(): APLASequencerModel {
    return {
      ...convertAPLAMultiChildComponentPropsToModel(this.props)
    };
  }
}
