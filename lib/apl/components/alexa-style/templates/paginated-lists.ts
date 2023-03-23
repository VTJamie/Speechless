import { LabeledRequestHandler } from '../../../../skill/models';
import { Calculable } from '../../../../types';
import { Command, CommandModel, CommandProps } from '../../../commands';
import { Source, VideoSourceProps, Color } from '../../../interfaces';
import { convertVideoSourcePropsToRequestHandlers, convertCommandListToRequestHandlers } from '../../../interfaces/helpers';
import { APLBaseComponentModel, APLBaseComponentProps, APLComponent } from '../../component';

export interface AlexaPaginatedListItemModel {
  primaryText?: Calculable<string>;
  secondaryText?: Calculable<string>;
  tertiaryText?: Calculable<string>;
  imageSource?: Source;
  primaryAction?: Command<CommandModel, CommandProps>;
}

export interface AlexaPaginatedListItemProps {
  primaryText?: Calculable<string>;
  secondaryText?: Calculable<string>;
  tertiaryText?: Calculable<string>;
  imageSource?: Source;
  primaryAction?: Command<CommandModel, CommandProps>;
}

export interface AlexaPaginatedListsModel extends APLBaseComponentModel {
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
  headerDivider?: Calculable<boolean>;
  headerSubtitle?: Calculable<string>;
  headerTitle?: Calculable<string>;
  listId?: Calculable<string>;
  listItems?: AlexaPaginatedListItemModel[];
  primaryAction?: Command<CommandModel, CommandProps>;
  speechItems?: string[];
}

export interface AlexaPaginatedListsProps extends APLBaseComponentProps {
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
  headerDivider?: Calculable<boolean>;
  headerSubtitle?: Calculable<string>;
  headerTitle?: Calculable<string>;
  listId?: Calculable<string>;
  listItems?: AlexaPaginatedListItemProps[];
  primaryAction?: Command<CommandModel, CommandProps>;
  speechItems?: string[];
}

export class AlexaPaginatedLists extends APLComponent<AlexaPaginatedListsModel, AlexaPaginatedListsProps> {
  constructor(props: AlexaPaginatedListsProps) {
    super('AlexaPaginatedLists', props);
  }

  componentSpecificModel(): AlexaPaginatedListsModel {
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
      headerDivider: this.props.headerDivider,
      headerSubtitle: this.props.headerSubtitle,
      headerTitle: this.props.headerTitle,
      listId: this.props.listId,
      listItems: this.props.listItems?.map((item) => {
        return {
          primaryText: item.primaryText,
          secondaryText: item.secondaryText,
          tertiaryText: item.tertiaryText,
          imageSource: item.imageSource,
          primaryAction: item.primaryAction
        };
      }),
      primaryAction: this.props.primaryAction,
      speechItems: this.props.speechItems
    };
  }

  componentSpecificRequestHandlers(): LabeledRequestHandler[] {
    return [
      ...convertVideoSourcePropsToRequestHandlers(this.props.backgroundVideoSource),
      ...convertCommandListToRequestHandlers([this.props.primaryAction]),
      ...convertCommandListToRequestHandlers(this.props.listItems?.map((item) => item.primaryAction))
    ];
  }
}
