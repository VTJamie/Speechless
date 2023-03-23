import { LabeledRequestHandler } from '../../../skill/models';
import { VideoSourceModel, VideoSourceProps } from '../../interfaces';
import { convertVideoSourcePropsToRequestHandlers } from '../../interfaces/helpers';
import { APLBaseComponentModel, APLBaseComponentProps, APLComponent } from '../component';

export interface APLVideoModel extends APLBaseComponentModel, VideoSourceModel {}

export interface APLVideoProps extends APLBaseComponentProps, VideoSourceProps {}

export class APLVideo extends APLComponent<APLVideoModel, APLVideoProps> {
  constructor(props: APLVideoProps) {
    super('Video', props);
  }
  componentSpecificModel(): APLVideoModel {
    return {
      audioTrack: this.props.audioTrack,
      autoplay: this.props.autoplay,
      muted: this.props.muted,
      scale: this.props.scale,
      source: this.props.source,
      onEnd: this.props.onEnd,
      onPause: this.props.onPause,
      onPlay: this.props.onPlay,
      onTimeUpdate: this.props.onTimeUpdate,
      onTrackFail: this.props.onTrackFail,
      onTrackReady: this.props.onTrackReady,
      onTrackUpdate: this.props.onTrackUpdate
    };
  }

  componentSpecificRequestHandlers(): LabeledRequestHandler[] {
    return convertVideoSourcePropsToRequestHandlers(this.props);
  }
}
