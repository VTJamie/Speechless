import { LabeledRequestHandler } from '../../../../skill/models';
import { Calculable } from '../../../../types';
import { Command, CommandModel, CommandProps } from '../../../commands';
import { Source, VideoSourceModel, Color, VideoSourceProps, Dimension } from '../../../interfaces';
import { APLBaseComponentModel, APLBaseComponentProps, APLComponent } from '../../component';

export interface AlexaListsModel extends APLBaseComponentModel {
  backgroundAlign?: Calculable<string>;
  backgroundBlur?: Calculable<boolean>;
  backgroundColor?: Calculable<Color>;
  backgroundColorOverlay?: Calculable<boolean>;
  backgroundImageSource?: Source;
  backgroundOverlayGradient?: Calculable<boolean>;
  backgroundVideoAudioTrack?: Calculable<string>;
  backgroundVideoAutoPlay?: Calculable<boolean>;
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
  headerSubtitle?: Calculable<string>;
  headerTitle?: Calculable<string>;
  hideDivider?: Calculable<boolean>;
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
  listImagePrimacy?: Calculable<boolean>;
  listItems?: unknown[];
  primaryAction?: Command<CommandModel, CommandProps>;
  speechItems?: string[];
  touchForward?: Calculable<boolean>;
}

export interface AlexaListsProps extends APLBaseComponentProps {
  backgroundAlign?: Calculable<string>;
  backgroundBlur?: Calculable<boolean>;
  backgroundColor?: Calculable<Color>;
  backgroundColorOverlay?: Calculable<boolean>;
  backgroundImageSource?: Source;
  backgroundOverlayGradient?: Calculable<boolean>;
  backgroundVideoAudioTrack?: Calculable<string>;
  backgroundVideoAutoPlay?: Calculable<boolean>;
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
  headerSubtitle?: Calculable<string>;
  headerTitle?: Calculable<string>;
  hideDivider?: Calculable<boolean>;
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
  listImagePrimacy?: Calculable<boolean>;
  listItems?: unknown[];
  primaryAction?: Command<CommandModel, CommandProps>;
  speechItems?: string[];
  touchForward?: Calculable<boolean>;
}

export class AlexaLists extends APLComponent<AlexaListsModel, AlexaListsProps> {
  constructor(props: AlexaListsProps) {
    super('AlexaLists', props);
  }

  componentSpecificModel(): AlexaListsModel {
    return {};
  }

  componentSpecificRequestHandlers(): LabeledRequestHandler[] {
    return [];
  }
}
