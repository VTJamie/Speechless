import { LabeledRequestHandler } from '../../../../skill/models';
import { Calculable } from '../../../../types';
import { Command, CommandModel, CommandProps } from '../../../commands';
import { Color, Dimension, Source, VideoSourceModel, VideoSourceProps } from '../../../interfaces';
import { convertCommandListToRequestHandlers, convertVideoSourcePropsToRequestHandlers } from '../../../interfaces/helpers';
import { APLBaseComponentModel, APLBaseComponentProps, APLComponent } from '../../component';

export interface AlexaDetailModel extends APLBaseComponentModel {
  backgroundAlign?: Calculable<string>;
  backgroundBlur?: Calculable<boolean>;
  backgroundColor?: Calculable<Color>;
  backgroundColorOverlay?: Calculable<boolean>;
  backgroundImageSource?: Source;
  backgroundOverlayGradient?: Calculable<boolean>;
  backgroundOverlayNoise?: Calculable<boolean>;
  backgroundScale?: Calculable<string>;
  backgroundVideoAudioTrack?: Calculable<string>;
  backgroundVideoAutoPlay?: Calculable<boolean>;
  backgroundVideoSource?: VideoSourceModel;
  bodyText?: Calculable<string>;
  button1AccessibilityLabel?: Calculable<string>;
  button1PrimaryAction?: Command<CommandModel, CommandProps>;
  button1Style?: Calculable<string>;
  button1Text?: Calculable<string>;
  button1Theme?: Calculable<string>;
  button2AccessibilityLabel?: Calculable<string>;
  button2PrimaryAction?: Command<CommandModel, CommandProps>;
  button2Style?: Calculable<string>;
  button2Text?: Calculable<string>;
  button2Theme?: Calculable<string>;
  detailImageAlignment?: Calculable<string>;
  detailType?: Calculable<string>;
  emptyRatingGraphic?: Calculable<string>;
  externalLinkButtonAccessibilityLabel?: Calculable<string>;
  externalLinkButtonPrimaryAction?: Command<CommandModel, CommandProps>;
  externalLinkButtonText?: Calculable<string>;
  externalLinkButtonTheme?: Calculable<string>;
  fullRatingGraphic?: Calculable<string>;
  halfRatingGraphic?: Calculable<string>;
  headerAttributionImage?: Calculable<string>;
  headerAttributionPrimacy?: Calculable<boolean>;
  headerAttributionText?: Calculable<string>;
  headerBackButton?: Calculable<boolean>;
  headerBackButtonAccessibilityLabel?: Calculable<string>;
  headerBackButtonCommand?: Command<CommandModel, CommandProps>;
  headerBackgroundColor?: Calculable<Color>;
  headerDivider?: Calculable<boolean>;
  headerSubtitle?: Calculable<string>;
  headerTitle?: Calculable<string>;
  imageAlignment?: Calculable<string>;
  imageAspectRatio?: Calculable<string>;
  imageBlurredBackground?: Calculable<boolean>;
  imageCaption?: Calculable<string>;
  imageHeight?: Calculable<Dimension>;
  imageRoundedCorner?: Calculable<boolean>;
  imageScale?: Calculable<string>;
  imageShadow?: Calculable<boolean>;
  imageSource?: Source;
  ingredientListItems?: Calculable<string>;
  ingredientsHideDivider?: Calculable<boolean>;
  ingredientsText?: Calculable<string>;
  locationText?: Calculable<string>;
  primaryText?: Calculable<string>;
  quaternaryText?: Calculable<string>;
  ratingGraphicType?: Calculable<string>;
  ratingNumber?: Calculable<number>;
  ratingSlotMode?: Calculable<string>;
  ratingSlotPadding?: Calculable<Dimension>;
  ratingText?: Calculable<string>;
  scrollViewId?: Calculable<string>;
  secondaryText?: Calculable<string>;
  singleRatingGraphic?: Calculable<string>;
  singleRatingGraphicWidth?: Calculable<Dimension>;
  tertiaryText?: Calculable<string>;
}

export interface AlexaDetailProps extends APLBaseComponentProps {
  backgroundAlign?: Calculable<string>;
  backgroundBlur?: Calculable<boolean>;
  backgroundColor?: Calculable<Color>;
  backgroundColorOverlay?: Calculable<boolean>;
  backgroundImageSource?: Source;
  backgroundOverlayGradient?: Calculable<boolean>;
  backgroundOverlayNoise?: Calculable<boolean>;
  backgroundScale?: Calculable<string>;
  backgroundVideoAudioTrack?: Calculable<string>;
  backgroundVideoAutoPlay?: Calculable<boolean>;
  backgroundVideoSource?: VideoSourceProps;
  bodyText?: Calculable<string>;
  button1AccessibilityLabel?: Calculable<string>;
  button1PrimaryAction?: Command<CommandModel, CommandProps>;
  button1Style?: Calculable<string>;
  button1Text?: Calculable<string>;
  button1Theme?: Calculable<string>;
  button2AccessibilityLabel?: Calculable<string>;
  button2PrimaryAction?: Command<CommandModel, CommandProps>;
  button2Style?: Calculable<string>;
  button2Text?: Calculable<string>;
  button2Theme?: Calculable<string>;
  detailImageAlignment?: Calculable<string>;
  detailType?: Calculable<string>;
  emptyRatingGraphic?: Calculable<string>;
  externalLinkButtonAccessibilityLabel?: Calculable<string>;
  externalLinkButtonPrimaryAction?: Command<CommandModel, CommandProps>;
  externalLinkButtonText?: Calculable<string>;
  externalLinkButtonTheme?: Calculable<string>;
  fullRatingGraphic?: Calculable<string>;
  halfRatingGraphic?: Calculable<string>;
  headerAttributionImage?: Calculable<string>;
  headerAttributionPrimacy?: Calculable<boolean>;
  headerAttributionText?: Calculable<string>;
  headerBackButton?: Calculable<boolean>;
  headerBackButtonAccessibilityLabel?: Calculable<string>;
  headerBackButtonCommand?: Command<CommandModel, CommandProps>;
  headerBackgroundColor?: Calculable<Color>;
  headerDivider?: Calculable<boolean>;
  headerSubtitle?: Calculable<string>;
  headerTitle?: Calculable<string>;
  imageAlignment?: Calculable<string>;
  imageAspectRatio?: Calculable<string>;
  imageBlurredBackground?: Calculable<boolean>;
  imageCaption?: Calculable<string>;
  imageHeight?: Calculable<Dimension>;
  imageRoundedCorner?: Calculable<boolean>;
  imageScale?: Calculable<string>;
  imageShadow?: Calculable<boolean>;
  imageSource?: Source;
  ingredientListItems?: Calculable<string>;
  ingredientsHideDivider?: Calculable<boolean>;
  ingredientsText?: Calculable<string>;
  locationText?: Calculable<string>;
  primaryText?: Calculable<string>;
  quaternaryText?: Calculable<string>;
  ratingGraphicType?: Calculable<string>;
  ratingNumber?: Calculable<number>;
  ratingSlotMode?: Calculable<string>;
  ratingSlotPadding?: Calculable<Dimension>;
  ratingText?: Calculable<string>;
  scrollViewId?: Calculable<string>;
  secondaryText?: Calculable<string>;
  singleRatingGraphic?: Calculable<string>;
  singleRatingGraphicWidth?: Calculable<Dimension>;
  tertiaryText?: Calculable<string>;
}

export class AlexaDetail extends APLComponent<AlexaDetailModel, AlexaDetailProps> {
  constructor(props: AlexaDetailProps) {
    super('AlexaDetail', props);
  }

  componentSpecificModel(): AlexaDetailModel {
    return {
      backgroundAlign: this.props.backgroundAlign,
      backgroundBlur: this.props.backgroundBlur,
      backgroundColor: this.props.backgroundColor,
      backgroundColorOverlay: this.props.backgroundColorOverlay,
      backgroundImageSource: this.props.backgroundImageSource,
      backgroundOverlayGradient: this.props.backgroundOverlayGradient,
      backgroundOverlayNoise: this.props.backgroundOverlayNoise,
      backgroundScale: this.props.backgroundScale,
      backgroundVideoAudioTrack: this.props.backgroundVideoAudioTrack,
      backgroundVideoAutoPlay: this.props.backgroundVideoAutoPlay,
      backgroundVideoSource: this.props.backgroundVideoSource,
      bodyText: this.props.bodyText,
      button1AccessibilityLabel: this.props.button1AccessibilityLabel,
      button1PrimaryAction: this.props.button1PrimaryAction,
      button1Style: this.props.button1Style,
      button1Text: this.props.button1Text,
      button1Theme: this.props.button1Theme,
      button2AccessibilityLabel: this.props.button2AccessibilityLabel,
      button2PrimaryAction: this.props.button2PrimaryAction,
      button2Style: this.props.button2Style,
      button2Text: this.props.button2Text,
      button2Theme: this.props.button2Theme,
      detailImageAlignment: this.props.detailImageAlignment,
      detailType: this.props.detailType,
      emptyRatingGraphic: this.props.emptyRatingGraphic,
      externalLinkButtonAccessibilityLabel: this.props.externalLinkButtonAccessibilityLabel,
      externalLinkButtonPrimaryAction: this.props.externalLinkButtonPrimaryAction,
      externalLinkButtonText: this.props.externalLinkButtonText,
      externalLinkButtonTheme: this.props.externalLinkButtonTheme,
      fullRatingGraphic: this.props.fullRatingGraphic,
      halfRatingGraphic: this.props.halfRatingGraphic,
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
      imageHeight: this.props.imageHeight,
      imageRoundedCorner: this.props.imageRoundedCorner,
      imageScale: this.props.imageScale,
      imageShadow: this.props.imageShadow,
      imageSource: this.props.imageSource,
      ingredientListItems: this.props.ingredientListItems,
      ingredientsHideDivider: this.props.ingredientsHideDivider,
      ingredientsText: this.props.ingredientsText,
      locationText: this.props.locationText,
      primaryText: this.props.primaryText,
      quaternaryText: this.props.quaternaryText,
      ratingGraphicType: this.props.ratingGraphicType,
      ratingNumber: this.props.ratingNumber,
      ratingSlotMode: this.props.ratingSlotMode,
      ratingSlotPadding: this.props.ratingSlotPadding,
      ratingText: this.props.ratingText,
      scrollViewId: this.props.scrollViewId,
      secondaryText: this.props.secondaryText,
      singleRatingGraphic: this.props.singleRatingGraphic,
      singleRatingGraphicWidth: this.props.singleRatingGraphicWidth,
      tertiaryText: this.props.tertiaryText
    };
  }

  componentSpecificRequestHandlers(): LabeledRequestHandler[] {
    return [
      ...convertVideoSourcePropsToRequestHandlers(this.props.backgroundVideoSource),
      ...convertCommandListToRequestHandlers([
        this.props.button1PrimaryAction,
        this.props.button2PrimaryAction,
        this.props.headerBackButtonCommand,
        this.props.externalLinkButtonPrimaryAction
      ])
    ];
  }
}
