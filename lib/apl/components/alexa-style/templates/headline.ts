import { LabeledRequestHandler } from '../../../../skill/models';
import { Calculable } from '../../../../types';
import { Command, CommandModel, CommandProps } from '../../../commands';
import { Color, Source, VideoSourceModel, VideoSourceProps } from '../../../interfaces';
import { convertCommandListToRequestHandlers, convertVideoSourcePropsToRequestHandlers } from '../../../interfaces/helpers';
import { APLBaseComponentModel, APLBaseComponentProps, APLComponent } from '../../component';

export interface AlexaHeadlineModel extends APLBaseComponentModel {
  backgroundAlign?: Calculable<string>;
  backgroundBlur?: Calculable<boolean>;
  backgroundColor?: Calculable<Color>;
  backgroundColorOverlay?: Calculable<boolean>;
  backgroundImageSource?: Source;
  backgroundOverlayGradient?: Calculable<boolean>;
  backgroundScale?: Calculable<string>;
  backgroundVideoAudioTrack?: Calculable<string>;
  backgroundVideoAutoPlay?: Calculable<boolean>;
  backgroundVideoSource?: VideoSourceModel;
  footerHintText?: Calculable<string>;
  headerAttributionImage?: Calculable<string>;
  headerAttributionOpacity?: Calculable<number>;
  headerAttributionPrimacy?: Calculable<boolean>;
  headerAttributionText?: Calculable<string>;
  headerBackButton?: Calculable<boolean>;
  headerBackButtonAccessibilityLabel?: Calculable<string>;
  headerBackButtonCommand?: Command<CommandModel, CommandProps>;
  headerBackgroundColor?: Calculable<Color>;
  headerDivider?: Calculable<boolean>;
  headerSubtitle?: Calculable<string>;
  headerTitle?: Calculable<string>;
  primaryText?: Calculable<string>;
  secondaryText?: Calculable<string>;
}

export interface AlexaHeadlineProps extends APLBaseComponentProps {
  backgroundAlign?: Calculable<string>;
  backgroundBlur?: Calculable<boolean>;
  backgroundColor?: Calculable<Color>;
  backgroundColorOverlay?: Calculable<boolean>;
  backgroundImageSource?: Source;
  backgroundOverlayGradient?: Calculable<boolean>;
  backgroundScale?: Calculable<string>;
  backgroundVideoAudioTrack?: Calculable<string>;
  backgroundVideoAutoPlay?: Calculable<boolean>;
  backgroundVideoSource?: VideoSourceProps;
  footerHintText?: Calculable<string>;
  headerAttributionImage?: Calculable<string>;
  headerAttributionOpacity?: Calculable<number>;
  headerAttributionPrimacy?: Calculable<boolean>;
  headerAttributionText?: Calculable<string>;
  headerBackButton?: Calculable<boolean>;
  headerBackButtonAccessibilityLabel?: Calculable<string>;
  headerBackButtonCommand?: Command<CommandModel, CommandProps>;
  headerBackgroundColor?: Calculable<Color>;
  headerDivider?: Calculable<boolean>;
  headerSubtitle?: Calculable<string>;
  headerTitle?: Calculable<string>;
  primaryText?: Calculable<string>;
  secondaryText?: Calculable<string>;
}

export class AlexaHeadline extends APLComponent<AlexaHeadlineModel, AlexaHeadlineProps> {
  constructor(props: AlexaHeadlineProps) {
    super('AlexaHeadline', props);
  }

  componentSpecificModel(): AlexaHeadlineModel {
    return {
      backgroundAlign: this.props.backgroundAlign,
      backgroundBlur: this.props.backgroundBlur,
      backgroundColor: this.props.backgroundColor,
      backgroundColorOverlay: this.props.backgroundColorOverlay,
      backgroundImageSource: this.props.backgroundImageSource,
      backgroundOverlayGradient: this.props.backgroundOverlayGradient,
      backgroundScale: this.props.backgroundScale,
      backgroundVideoAudioTrack: this.props.backgroundVideoAudioTrack,
      backgroundVideoAutoPlay: this.props.backgroundVideoAutoPlay,
      backgroundVideoSource: this.props.backgroundVideoSource,
      headerAttributionImage: this.props.headerAttributionImage,
      headerAttributionPrimacy: this.props.headerAttributionPrimacy,
      headerAttributionText: this.props.headerAttributionText,
      headerBackButton: this.props.headerBackButton,
      headerBackButtonAccessibilityLabel: this.props.headerBackButtonAccessibilityLabel,
      headerBackButtonCommand: this.props.headerBackButtonCommand,
      headerBackgroundColor: this.props.headerBackgroundColor,
      headerDivider: this.props.headerDivider,
      headerSubtitle: this.props.headerSubtitle,
      headerTitle: this.props.headerTitle,
      primaryText: this.props.primaryText,
      secondaryText: this.props.secondaryText
    };
  }

  componentSpecificRequestHandlers(): LabeledRequestHandler[] {
    return [
      ...convertVideoSourcePropsToRequestHandlers(this.props.backgroundVideoSource),
      ...convertCommandListToRequestHandlers([this.props.headerBackButtonCommand])
    ];
  }
}
