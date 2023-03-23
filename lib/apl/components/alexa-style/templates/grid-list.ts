import { LabeledRequestHandler } from '../../../../skill/models';
import { Calculable } from '../../../../types';
import { Command, CommandModel, CommandProps } from '../../../commands';
import { Color, Dimension, Source, VideoSourceModel, VideoSourceProps } from '../../../interfaces';
import { convertCommandListToRequestHandlers } from '../../../interfaces/helpers';
import { APLBaseComponentModel, APLBaseComponentProps, APLComponent } from '../../component';

export interface AlexaGridListModel extends APLBaseComponentModel {
  backgroundAlign?: Calculable<string>;
  backgroundBlur?: Calculable<boolean>;
  backgroundColor?: Calculable<Color>;
  backgroundColorOverlay?: Calculable<boolean>;
  backgroundImageSource?: Source;
  backgroundOverlayGradient?: Calculable<boolean>;
  backgroundScale?: Calculable<string>;
  backgroundVideoSource?: VideoSourceModel;

  customLayoutName?: Calculable<string>;
  defaultImageSource?: Source;

  headerAttributionImage?: Calculable<string>;
  headerAttributionOpacity?: Calculable<string>;
  headerAttributionPrimacy?: Calculable<boolean>;
  headerAttributionText?: Calculable<string>;
  headerBackButton?: Calculable<boolean>;
  headerBackButtonAccessibilityLabel?: Calculable<string>;
  headerBackButtonCommand?: Command<CommandModel, CommandProps>;
  headerBackgroundColor?: Calculable<Color>;
  headerDivider?: Calculable<boolean>;
  headerSubtitle?: Calculable<string>;
  headerTitle?: Calculable<string>;
  hideOrdinal?: Calculable<boolean>;
  imageAlignment?: Calculable<string>;
  imageAspectRatio?: Calculable<string>;
  imageBlurredBackground?: Calculable<boolean>;
  imageHideScrim?: Calculable<string>;
  imageCaption?: Calculable<string>;
  imageMetadataPrimacy?: Calculable<string>;
  imageRoundedCorner?: Calculable<boolean>;
  imageScale?: Calculable<string>;
  imageShadow?: Calculable<boolean>;
  imageShowProgressBar?: Calculable<string>;
  listId?: Calculable<string>;
  listItemHeight?: Calculable<Dimension>;
  listItemHorizontalCount?: Calculable<string>;
  listItems?: Calculable<string>;
  primaryAction?: Command<CommandModel, CommandProps>;
  speechItems?: Calculable<string>;
  videoAudioTrack?: Calculable<string>;
  videoAutoPlay?: Calculable<boolean>;
}

export interface AlexaGridListProps extends APLBaseComponentProps {
  backgroundAlign?: Calculable<string>;
  backgroundBlur?: Calculable<boolean>;
  backgroundColor?: Calculable<Color>;
  backgroundColorOverlay?: Calculable<boolean>;
  backgroundImageSource?: Source;
  backgroundOverlayGradient?: Calculable<boolean>;
  backgroundScale?: Calculable<string>;
  backgroundVideoSource?: VideoSourceProps;

  customLayoutName?: Calculable<string>;
  defaultImageSource?: Source;

  headerAttributionImage?: Calculable<string>;
  headerAttributionOpacity?: Calculable<string>;
  headerAttributionPrimacy?: Calculable<boolean>;
  headerAttributionText?: Calculable<string>;
  headerBackButton?: Calculable<boolean>;
  headerBackButtonAccessibilityLabel?: Calculable<string>;
  headerBackButtonCommand?: Command<CommandModel, CommandProps>;
  headerBackgroundColor?: Calculable<Color>;
  headerDivider?: Calculable<boolean>;
  headerSubtitle?: Calculable<string>;
  headerTitle?: Calculable<string>;
  hideOrdinal?: Calculable<boolean>;
  imageAlignment?: Calculable<string>;
  imageAspectRatio?: Calculable<string>;
  imageBlurredBackground?: Calculable<boolean>;
  imageHideScrim?: Calculable<string>;
  imageCaption?: Calculable<string>;
  imageMetadataPrimacy?: Calculable<string>;
  imageRoundedCorner?: Calculable<boolean>;
  imageScale?: Calculable<string>;
  imageShadow?: Calculable<boolean>;
  imageShowProgressBar?: Calculable<string>;
  listId?: Calculable<string>;
  listItemHeight?: Calculable<Dimension>;
  listItemHorizontalCount?: Calculable<string>;
  listItems?: Calculable<string>;
  primaryAction?: Command<CommandModel, CommandProps>;

  speechItems?: Calculable<string>;
  videoAudioTrack?: Calculable<string>;
  videoAutoPlay?: Calculable<boolean>;
}

export class AlexaGridList extends APLComponent<AlexaGridListModel, AlexaGridListProps> {
  constructor(props: AlexaGridListProps) {
    super('AlexaGridList', props);
  }

  componentSpecificModel(): AlexaGridListModel {
    return {
      backgroundAlign: this.props.backgroundAlign,
      backgroundBlur: this.props.backgroundBlur,
      backgroundColor: this.props.backgroundColor,
      backgroundColorOverlay: this.props.backgroundColorOverlay,
      backgroundImageSource: this.props.backgroundImageSource,
      backgroundOverlayGradient: this.props.backgroundOverlayGradient,

      backgroundScale: this.props.backgroundScale,

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
      imageAlignment: this.props.imageAlignment,
      imageAspectRatio: this.props.imageAspectRatio,
      imageBlurredBackground: this.props.imageBlurredBackground,
      imageCaption: this.props.imageCaption,

      imageRoundedCorner: this.props.imageRoundedCorner,
      imageScale: this.props.imageScale,
      imageShowProgressBar: this.props.imageShowProgressBar,
      listItemHeight: this.props.listItemHeight,
      listId: this.props.listId,
      listItemHorizontalCount: this.props.listItemHorizontalCount,
      listItems: this.props.listItems,
      primaryAction: this.props.primaryAction,
      speechItems: this.props.speechItems,
      videoAudioTrack: this.props.videoAudioTrack,
      videoAutoPlay: this.props.videoAutoPlay
    };
  }

  componentSpecificRequestHandlers(): LabeledRequestHandler[] {
    return convertCommandListToRequestHandlers([this.props.headerBackButtonCommand, this.props.primaryAction]);
  }
}
