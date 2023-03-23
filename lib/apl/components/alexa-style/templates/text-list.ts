import { LabeledRequestHandler } from '../../../../skill/models';
import { Calculable } from '../../../../types';
import { Command, CommandModel, CommandProps } from '../../../commands';
import { Color, Source, VideoSourceModel, VideoSourceProps } from '../../../interfaces';
import { convertCommandListToRequestHandlers, convertVideoSourcePropsToRequestHandlers } from '../../../interfaces/helpers';
import { APLBaseComponentModel, APLBaseComponentProps, APLComponent } from '../../component';
import { AlexaTextListItem, AlexaTextListItemModel } from '../basic';

export interface AlexaTextListModel extends APLBaseComponentModel {
  backgroundAlign?: Calculable<string>;
  backgroundBlur?: Calculable<boolean>;
  backgroundColor?: Calculable<Color>;
  backgroundColorOverlay?: Calculable<boolean>;
  backgroundImageSource?: Source;
  backgroundScale?: Calculable<string>;
  backgroundOverlayGradient?: Calculable<boolean>;
  backgroundVideoAudioTrack?: Calculable<string>;
  backgroundVideoAutoPlay?: Calculable<boolean>;
  backgroundVideoSource?: VideoSourceModel;
  headerAttributionImage?: Calculable<string>;
  headerAttributionOpacity?: Calculable<number>;
  headerAttributionPrimacy?: Calculable<boolean>;
  headerAttributionText?: Calculable<string>;
  headerBackButton?: Calculable<boolean>;
  headerBackButtonAccessibilityLabel?: Calculable<string>;
  headerBackButtonCommand?: Command<CommandModel, CommandProps>;
  headerBackgroundColor?: Calculable<Color>;
  hideDivider?: Calculable<boolean>;
  hideOrdinal?: Calculable<boolean>;
  headerSubtitle?: Calculable<string>;
  headerTitle?: Calculable<string>;
  listId?: Calculable<string>;
  listItems?: AlexaTextListItemModel[];
  onSwipeDone?: Command<CommandModel, CommandProps>;
  optionsButton1Command?: Command<CommandModel, CommandProps>;
  optionsButton1Text?: Calculable<string>;
  optionsButton2Command?: Command<CommandModel, CommandProps>;
  optionsButton2Text?: Calculable<string>;
  primaryAction?: Command<CommandModel, CommandProps>;
  speechItems?: unknown[];
  swipeActionIcon?: Calculable<string>;
  swipeActionIconBackground?: Calculable<Color>;
  swipeActionIconForeground?: Calculable<Color>;
  swipeActionIconType?: Calculable<string>;
  swipeDirection?: Calculable<string>;
  touchForward?: Calculable<boolean>;
}

export interface AlexaTextListProps extends APLBaseComponentProps {
  backgroundAlign?: Calculable<string>;
  backgroundBlur?: Calculable<boolean>;
  backgroundColor?: Calculable<Color>;
  backgroundColorOverlay?: Calculable<boolean>;
  backgroundImageSource?: Source;
  backgroundScale?: Calculable<string>;
  backgroundOverlayGradient?: Calculable<boolean>;
  backgroundVideoAudioTrack?: Calculable<string>;
  backgroundVideoAutoPlay?: Calculable<boolean>;
  backgroundVideoSource?: VideoSourceProps;
  headerAttributionImage?: Calculable<string>;
  headerAttributionOpacity?: Calculable<number>;
  headerAttributionPrimacy?: Calculable<boolean>;
  headerAttributionText?: Calculable<string>;
  headerBackButton?: Calculable<boolean>;
  headerBackButtonAccessibilityLabel?: Calculable<string>;
  headerBackButtonCommand?: Command<CommandModel, CommandProps>;
  headerBackgroundColor?: Calculable<Color>;
  hideDivider?: Calculable<boolean>;
  hideOrdinal?: Calculable<boolean>;
  headerSubtitle?: Calculable<string>;
  headerTitle?: Calculable<string>;
  listId?: Calculable<string>;
  listItems?: AlexaTextListItem[];
  onSwipeDone?: Command<CommandModel, CommandProps>;
  optionsButton1Command?: Command<CommandModel, CommandProps>;
  optionsButton1Text?: Calculable<string>;
  optionsButton2Command?: Command<CommandModel, CommandProps>;
  optionsButton2Text?: Calculable<string>;
  primaryAction?: Command<CommandModel, CommandProps>;
  speechItems?: unknown[];
  swipeActionIcon?: Calculable<string>;
  swipeActionIconBackground?: Calculable<Color>;
  swipeActionIconForeground?: Calculable<Color>;
  swipeActionIconType?: Calculable<string>;
  swipeDirection?: Calculable<string>;
  touchForward?: Calculable<boolean>;
}

export class AlexaTextList extends APLComponent<AlexaTextListModel, AlexaTextListProps> {
  constructor(props: AlexaTextListProps) {
    super('AlexaTextList', props);
  }

  componentSpecificModel(): AlexaTextListModel {
    return {
      backgroundAlign: this.props.backgroundAlign,
      backgroundBlur: this.props.backgroundBlur,
      backgroundColor: this.props.backgroundColor,
      backgroundColorOverlay: this.props.backgroundColorOverlay,
      backgroundImageSource: this.props.backgroundImageSource,
      backgroundScale: this.props.backgroundScale,
      backgroundOverlayGradient: this.props.backgroundOverlayGradient,
      backgroundVideoAudioTrack: this.props.backgroundVideoAudioTrack,
      backgroundVideoAutoPlay: this.props.backgroundVideoAutoPlay,
      backgroundVideoSource: this.props.backgroundVideoSource,
      headerAttributionImage: this.props.headerAttributionImage,
      headerAttributionOpacity: this.props.headerAttributionOpacity,
      headerAttributionPrimacy: this.props.headerAttributionPrimacy,
      headerAttributionText: this.props.headerAttributionText,
      headerBackButton: this.props.headerBackButton,
      headerBackButtonAccessibilityLabel: this.props.headerBackButtonAccessibilityLabel,
      headerBackButtonCommand: this.props.headerBackButtonCommand,
      headerBackgroundColor: this.props.headerBackgroundColor,
      hideDivider: this.props.hideDivider,
      hideOrdinal: this.props.hideOrdinal,
      headerSubtitle: this.props.headerSubtitle,
      headerTitle: this.props.headerTitle,
      listId: this.props.listId,
      listItems: this.props.listItems?.map((item) => item.model()),
      onSwipeDone: this.props.onSwipeDone,
      optionsButton1Command: this.props.optionsButton1Command,
      optionsButton1Text: this.props.optionsButton1Text,
      optionsButton2Command: this.props.optionsButton2Command,
      optionsButton2Text: this.props.optionsButton2Text,
      primaryAction: this.props.primaryAction,
      speechItems: this.props.speechItems,
      swipeActionIcon: this.props.swipeActionIcon,
      swipeActionIconBackground: this.props.swipeActionIconBackground,
      swipeActionIconForeground: this.props.swipeActionIconForeground,
      swipeActionIconType: this.props.swipeActionIconType,
      swipeDirection: this.props.swipeDirection,
      touchForward: this.props.touchForward
    };
  }

  componentSpecificRequestHandlers(): LabeledRequestHandler[] {
    const itemRequestHandlers = this.props.listItems?.flatMap((item) => item.getRequestHandlers());
    return [
      ...convertVideoSourcePropsToRequestHandlers(this.props.backgroundVideoSource),
      ...convertCommandListToRequestHandlers([
        this.props.primaryAction,
        this.props.headerBackButtonCommand,
        this.props.optionsButton1Command,
        this.props.optionsButton2Command
      ]),
      ...(itemRequestHandlers ? itemRequestHandlers : [])
    ];
  }
}
