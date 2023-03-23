import { LabeledRequestHandler } from '../../../../skill/models';
import { Calculable } from '../../../../types';
import { Command, CommandModel, CommandProps } from '../../../commands';
import { Color, Dimension, Source, VideoSourceModel, VideoSourceProps } from '../../../interfaces';
import { convertCommandListToRequestHandlers, convertVideoSourcePropsToRequestHandlers } from '../../../interfaces/helpers';
import { APLBaseComponentModel, APLBaseComponentProps, APLComponent } from '../../component';

export interface AlexaImageListModel extends APLBaseComponentModel {
  backgroundAlign?: Calculable<string>;
  backgroundBlur?: Calculable<boolean>;
  backgroundColor?: Calculable<Color>;
  backgroundColorOverlay?: Calculable<boolean>;
  backgroundImageSource?: Source;
  backgroundOverlayGradient?: Calculable<boolean>;
  backgroundScale?: Calculable<string>;
  backgroundVideoSource?: VideoSourceModel;
  defaultImageSource?: Source;
  headerAttributionImage?: Calculable<string>;
  headerAttributionOpacity?: Calculable<number>;
  headerAttributionPrimacy?: Calculable<boolean>;
  headerAttributionText?: Calculable<string>;
  headerBackButton?: Calculable<boolean>;
  headerBackButtonAccessibilityLabel?: Calculable<string>;
  headerBackButtonCommand?: Command<CommandModel, CommandProps>;
  headerBackgroundColor?: Calculable<Color>;
  headerDivider?: Calculable<boolean>;
  headerTitle?: Calculable<string>;
  hideDivider?: Calculable<boolean>;
  hintText?: Calculable<string>;
  imageAlignment?: Calculable<string>;
  imageAspectRatio?: Calculable<string>;
  imageBlurredBackground?: Calculable<boolean>;
  imageHeight?: Calculable<Dimension>;
  imageHideScrim?: Calculable<boolean>;
  imageMetadataPrimacy?: Calculable<boolean>;
  imageRoundedCorner?: Calculable<boolean>;
  imageScale?: Calculable<boolean>;
  imageShadow?: Calculable<string>;
  listId?: Calculable<string>;
  listItems?: Calculable<string>;
  primaryAction?: Command<CommandModel, CommandProps>;
  speechItems?: string[];
  videoAudioTrack?: Calculable<string>;
  videoAutoPlay?: Calculable<string>;
}

export interface AlexaImageListProps extends APLBaseComponentProps {
  backgroundAlign?: Calculable<string>;
  backgroundBlur?: Calculable<boolean>;
  backgroundColor?: Calculable<Color>;
  backgroundColorOverlay?: Calculable<boolean>;
  backgroundImageSource?: Source;
  backgroundOverlayGradient?: Calculable<boolean>;
  backgroundScale?: Calculable<string>;
  backgroundVideoSource?: VideoSourceProps;
  defaultImageSource?: Source;
  headerAttributionImage?: Calculable<string>;
  headerAttributionOpacity?: Calculable<number>;
  headerAttributionPrimacy?: Calculable<boolean>;
  headerAttributionText?: Calculable<string>;
  headerBackButton?: Calculable<boolean>;
  headerBackButtonAccessibilityLabel?: Calculable<string>;
  headerBackButtonCommand?: Command<CommandModel, CommandProps>;
  headerBackgroundColor?: Calculable<Color>;
  headerDivider?: Calculable<boolean>;
  headerTitle?: Calculable<string>;
  hideDivider?: Calculable<boolean>;
  hintText?: Calculable<string>;
  imageAlignment?: Calculable<string>;
  imageAspectRatio?: Calculable<string>;
  imageBlurredBackground?: Calculable<boolean>;
  imageHeight?: Calculable<Dimension>;
  imageHideScrim?: Calculable<boolean>;
  imageMetadataPrimacy?: Calculable<boolean>;
  imageRoundedCorner?: Calculable<boolean>;
  imageScale?: Calculable<boolean>;
  imageShadow?: Calculable<string>;
  listId?: Calculable<string>;
  listItems?: Calculable<string>;
  primaryAction?: Command<CommandModel, CommandProps>;
  speechItems?: string[];
  videoAudioTrack?: Calculable<string>;
  videoAutoPlay?: Calculable<string>;
}

export class AlexaImageList extends APLComponent<AlexaImageListModel, AlexaImageListProps> {
  constructor(props: AlexaImageListProps) {
    super('AlexaImageList', props);
  }

  componentSpecificModel(): AlexaImageListModel {
    return {
      backgroundAlign: this.props.backgroundAlign,
      backgroundBlur: this.props.backgroundBlur,
      backgroundColor: this.props.backgroundColor,
      backgroundColorOverlay: this.props.backgroundColorOverlay,
      backgroundImageSource: this.props.backgroundImageSource,
      backgroundOverlayGradient: this.props.backgroundOverlayGradient,
      backgroundScale: this.props.backgroundScale,
      backgroundVideoSource: this.props.backgroundVideoSource,
      defaultImageSource: this.props.defaultImageSource,
      headerAttributionImage: this.props.headerAttributionImage,
      headerAttributionOpacity: this.props.headerAttributionOpacity,
      headerAttributionPrimacy: this.props.headerAttributionPrimacy,
      headerAttributionText: this.props.headerAttributionText,
      headerBackButton: this.props.headerBackButton,
      headerBackButtonAccessibilityLabel: this.props.headerBackButtonAccessibilityLabel,
      headerBackButtonCommand: this.props.headerBackButtonCommand,
      headerBackgroundColor: this.props.headerBackgroundColor,
      headerDivider: this.props.headerDivider,
      headerTitle: this.props.headerTitle,
      hideDivider: this.props.hideDivider,
      hintText: this.props.hintText,
      imageAlignment: this.props.imageAlignment,
      imageAspectRatio: this.props.imageAspectRatio,
      imageBlurredBackground: this.props.imageBlurredBackground,
      imageHeight: this.props.imageHeight,
      imageHideScrim: this.props.imageHideScrim,
      imageMetadataPrimacy: this.props.imageMetadataPrimacy,
      imageRoundedCorner: this.props.imageRoundedCorner,
      imageScale: this.props.imageScale,
      imageShadow: this.props.imageShadow,
      listId: this.props.listId,
      listItems: this.props.listItems,
      primaryAction: this.props.primaryAction,
      speechItems: this.props.speechItems,
      videoAudioTrack: this.props.videoAudioTrack,
      videoAutoPlay: this.props.videoAutoPlay
    };
  }

  componentSpecificRequestHandlers(): LabeledRequestHandler[] {
    return [
      ...convertVideoSourcePropsToRequestHandlers(this.props.backgroundVideoSource),
      ...convertCommandListToRequestHandlers([this.props.headerBackButtonCommand, this.props.primaryAction])
    ];
  }
}
