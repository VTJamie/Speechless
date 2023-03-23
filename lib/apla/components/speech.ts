import { APLABaseComponentModel, APLABaseComponentProps, APLAComponent } from './component';
import { Calculable, SpeechType } from '../../types';

export interface APLASpeechModel extends APLABaseComponentModel {
  contentType?: Calculable<SpeechType>;
  content: Calculable<string>;
}

export interface APLASpeechProps extends APLABaseComponentProps {
  contentType?: Calculable<SpeechType>;
  content: Calculable<string>;
}

export class APLASpeech extends APLAComponent<APLASpeechModel, APLASpeechProps> {
  constructor(props: APLASpeechProps) {
    super('Speech', props);
  }

  componentSpecificModel(): APLASpeechModel {
    return {
      contentType: this.props.contentType,
      content: this.props.content
    };
  }
}
