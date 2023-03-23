import { LabeledRequestHandler } from '../../../../skill/models';
import { Calculable } from '../../../../types';
import { Command, CommandModel, CommandProps } from '../../../commands';
import { DirectionRowCol, Source, Dimension } from '../../../interfaces';
import { APLBaseComponentModel, APLBaseComponentProps, APLComponent } from '../../component';

export interface AlexaImageListItemModel extends APLBaseComponentModel {
  contentDirection?: DirectionRowCol;
  defaultImageSource: Calculable<string>;
  emptyRatingGraphic?: Calculable<string>;
  fullRatingGraphic?: Calculable<string>;
  halfRatingGraphic?: Calculable<string>;
  hasPlayIcon?: Calculable<boolean>;
  hideDivider?: Calculable<boolean>;
  hideOrdinal?: Calculable<boolean>;
  imageAlignment?: Calculable<string>;
  imageAltText?: Calculable<string>;
  imageAspectRatio?: Calculable<string>;
  imageBlurredBackground?: Calculable<boolean>;
  imageHeight?: Calculable<Dimension>;
  imageHideScrim?: Calculable<boolean>;
  imageMetadataPrimacy?: Calculable<boolean>;
  imageProgressBarPercentage?: Calculable<string>;
  imageRoundedCorner?: Calculable<boolean>;
  imageScale?: Calculable<string>;
  imageShadow?: Calculable<boolean>;
  imageShowProgressBar?: Calculable<boolean>;
  imageSource?: Source;
  primaryAction?: Command<CommandModel, CommandProps>;
  primaryText: Calculable<string>;
  providerText: Calculable<string>;
  ratingGraphicType?: Calculable<string>;
  ratingNumber?: Calculable<number>;
  ratingSlotMode?: Calculable<string>;
  ratingText?: Calculable<string>;
  secondaryText?: Calculable<string>;
  singleRatingGraphic?: Calculable<string>;
  singleRatingGraphicWidth?: Calculable<Dimension>;
  speech?: Calculable<string>;
  tertiaryText?: Calculable<string>;
}

export interface AlexaImageListItemProps extends APLBaseComponentProps {
  contentDirection?: DirectionRowCol;
  defaultImageSource: Calculable<string>;
  emptyRatingGraphic?: Calculable<string>;
  fullRatingGraphic?: Calculable<string>;
  halfRatingGraphic?: Calculable<string>;
  hasPlayIcon?: Calculable<boolean>;
  hideDivider?: Calculable<boolean>;
  hideOrdinal?: Calculable<boolean>;
  imageAlignment?: Calculable<string>;
  imageAltText?: Calculable<string>;
  imageAspectRatio?: Calculable<string>;
  imageBlurredBackground?: Calculable<boolean>;
  imageHeight?: Calculable<Dimension>;
  imageHideScrim?: Calculable<boolean>;
  imageMetadataPrimacy?: Calculable<boolean>;
  imageProgressBarPercentage?: Calculable<string>;
  imageRoundedCorner?: Calculable<boolean>;
  imageScale?: Calculable<string>;
  imageShadow?: Calculable<boolean>;
  imageShowProgressBar?: Calculable<boolean>;
  imageSource?: Source;
  primaryAction?: Command<CommandModel, CommandProps>;
  primaryText: Calculable<string>;
  providerText: Calculable<string>;
  ratingGraphicType?: Calculable<string>;
  ratingNumber?: Calculable<number>;
  ratingSlotMode?: Calculable<string>;
  ratingText?: Calculable<string>;
  secondaryText?: Calculable<string>;
  singleRatingGraphic?: Calculable<string>;
  singleRatingGraphicWidth?: Calculable<Dimension>;
  speech?: Calculable<string>;
  tertiaryText?: Calculable<string>;
}

export class AlexaImageListItem extends APLComponent<AlexaImageListItemModel, AlexaImageListItemProps> {
  constructor(props: AlexaImageListItemProps) {
    super('AlexaImageListItem', props);
  }

  componentSpecificModel(): AlexaImageListItemModel {
    return {
      contentDirection: this.props.contentDirection,
      defaultImageSource: this.props.defaultImageSource,
      emptyRatingGraphic: this.props.emptyRatingGraphic,
      fullRatingGraphic: this.props.fullRatingGraphic,
      halfRatingGraphic: this.props.halfRatingGraphic,
      hasPlayIcon: this.props.hasPlayIcon,
      hideDivider: this.props.hideDivider,
      hideOrdinal: this.props.hideOrdinal,
      imageAlignment: this.props.imageAlignment,
      imageAltText: this.props.imageAltText,
      imageAspectRatio: this.props.imageAspectRatio,
      imageBlurredBackground: this.props.imageBlurredBackground,
      imageHeight: this.props.imageHeight,
      imageHideScrim: this.props.imageHideScrim,
      imageMetadataPrimacy: this.props.imageMetadataPrimacy,
      imageProgressBarPercentage: this.props.imageProgressBarPercentage,
      imageRoundedCorner: this.props.imageRoundedCorner,
      imageScale: this.props.imageScale,
      imageShadow: this.props.imageShadow,
      imageShowProgressBar: this.props.imageShowProgressBar,
      imageSource: this.props.imageSource,
      primaryAction: this.props.primaryAction,
      primaryText: this.props.primaryText,
      providerText: this.props.providerText,
      ratingGraphicType: this.props.ratingGraphicType,
      ratingNumber: this.props.ratingNumber,
      ratingSlotMode: this.props.ratingSlotMode,
      ratingText: this.props.ratingText,
      secondaryText: this.props.secondaryText,
      singleRatingGraphic: this.props.singleRatingGraphic,
      singleRatingGraphicWidth: this.props.singleRatingGraphicWidth,
      speech: this.props.speech,
      tertiaryText: this.props.tertiaryText
    };
  }

  componentSpecificRequestHandlers(): LabeledRequestHandler[] {
    return this.props.primaryAction ? this.props.primaryAction.getRequestHandlers() : [];
  }
}
