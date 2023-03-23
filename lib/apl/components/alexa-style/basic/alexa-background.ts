import { LabeledRequestHandler } from '../../../../skill/models';
import { Calculable } from '../../../../types';
import { Alignment, Color, Scale, Source, VideoSourceModel, VideoSourceProps } from '../../../interfaces';
import { convertVideoSourcePropsToRequestHandlers } from '../../../interfaces/helpers';
import { APLBaseComponentModel, APLBaseComponentProps, APLComponent } from '../../component';

export interface AlexaBackgroundModel extends APLBaseComponentModel {
  backgroundAlign?: Calculable<Alignment>;
  backgroundBlur?: Calculable<boolean>;
  backgroundColor?: Calculable<Color>;
  backgroundImageSource?: Calculable<Source>;
  backgroundScale?: Calculable<Scale>;
  backgroundVideoSource?: VideoSourceModel;
  colorOverlay?: Calculable<boolean>;
  overlayGradient?: Calculable<boolean>;
  overlayNoise?: Calculable<boolean>;
  videoAudioTrack?: Calculable<string>;
  videoAutoPlay?: Calculable<boolean>;
}

export interface AlexaBackgroundProps extends APLBaseComponentProps {
  backgroundAlign?: Calculable<Alignment>;
  backgroundBlur?: Calculable<boolean>;
  backgroundColor?: Calculable<Color>;
  backgroundImageSource?: Calculable<Source>;
  backgroundScale?: Calculable<Scale>;
  backgroundVideoSource?: VideoSourceProps;
  colorOverlay?: Calculable<boolean>;
  overlayGradient?: Calculable<boolean>;
  overlayNoise?: Calculable<boolean>;
  videoAudioTrack?: Calculable<string>;
  videoAutoPlay?: Calculable<boolean>;
}

export class AlexaBackground extends APLComponent<AlexaBackgroundModel, AlexaBackgroundProps> {
  constructor(props: AlexaBackgroundProps) {
    super('AlexaBackground', props);
  }

  componentSpecificModel(): AlexaBackgroundModel {
    return {
      backgroundAlign: this.props.backgroundAlign,
      backgroundBlur: this.props.backgroundBlur,
      backgroundColor: this.props.backgroundColor,
      backgroundImageSource: this.props.backgroundImageSource,
      backgroundScale: this.props.backgroundScale,
      backgroundVideoSource: this.props.backgroundVideoSource,
      colorOverlay: this.props.colorOverlay,
      overlayGradient: this.props.overlayGradient,
      overlayNoise: this.props.overlayNoise,
      videoAudioTrack: this.props.videoAudioTrack,
      videoAutoPlay: this.props.videoAutoPlay
    };
  }

  componentSpecificRequestHandlers(): LabeledRequestHandler[] {
    return [...convertVideoSourcePropsToRequestHandlers(this.props.backgroundVideoSource)];
  }
}
