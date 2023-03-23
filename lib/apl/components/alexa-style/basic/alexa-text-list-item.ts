import { LabeledRequestHandler } from '../../../../skill/models';
import { Calculable } from '../../../../types';
import { Command, CommandModel, CommandProps } from '../../../commands';
import { Source, Dimension } from '../../../interfaces';
import { convertCommandListToRequestHandlers } from '../../../interfaces/helpers';
import { APLBaseComponentModel, APLBaseComponentProps, APLComponent } from '../../component';

export interface AlexaTextListItemModel extends APLBaseComponentModel {
  emptyRatingGraphic?: Calculable<string>;
  fullRatingGraphic?: Calculable<string>;
  halfRatingGraphic?: Calculable<string>;
  hideDivider?: Calculable<boolean>;
  hideHorizontalMargin?: Calculable<boolean>;
  hideOrdinal?: Calculable<boolean>;
  imageAlignment?: Calculable<string>;
  imageBlurredBackground?: Calculable<boolean>;
  imageScale?: Calculable<string>;
  imageThumbnailShadow?: Calculable<boolean>;
  imageThumbnailSource?: Source;
  primaryAction?: Command<CommandModel, CommandProps>;
  primaryText?: Calculable<string>;
  ratingGraphicType?: Calculable<string>;
  ratingNumber?: Calculable<number>;
  ratingSlotMode?: Calculable<string>;
  ratingText?: Calculable<string>;
  secondaryText?: Calculable<string>;
  secondaryTextPosition?: Calculable<string>;
  singleRatingGraphic?: Calculable<string>;
  singleRatingGraphicWidth?: Calculable<Dimension>;
  tertiaryText?: Calculable<string>;
  tertiaryTextPosition?: Calculable<string>;
  textAlignmentCenter?: Calculable<boolean>;
  touchForward?: Calculable<boolean>;
}

export interface AlexaTextListItemProps extends APLBaseComponentProps {
  emptyRatingGraphic?: Calculable<string>;
  fullRatingGraphic?: Calculable<string>;
  halfRatingGraphic?: Calculable<string>;
  hideDivider?: Calculable<boolean>;
  hideHorizontalMargin?: Calculable<boolean>;
  hideOrdinal?: Calculable<boolean>;
  imageAlignment?: Calculable<string>;
  imageBlurredBackground?: Calculable<boolean>;
  imageScale?: Calculable<string>;
  imageThumbnailShadow?: Calculable<boolean>;
  imageThumbnailSource?: Source;
  primaryAction?: Command<CommandModel, CommandProps>;
  primaryText?: Calculable<string>;
  ratingGraphicType?: Calculable<string>;
  ratingNumber?: Calculable<number>;
  ratingSlotMode?: Calculable<string>;
  ratingText?: Calculable<string>;
  secondaryText?: Calculable<string>;
  secondaryTextPosition?: Calculable<string>;
  singleRatingGraphic?: Calculable<string>;
  singleRatingGraphicWidth?: Calculable<Dimension>;
  tertiaryText?: Calculable<string>;
  tertiaryTextPosition?: Calculable<string>;
  textAlignmentCenter?: Calculable<boolean>;
  touchForward?: Calculable<boolean>;
}

export class AlexaTextListItem extends APLComponent<AlexaTextListItemModel, AlexaTextListItemProps> {
  constructor(props: AlexaTextListItemProps) {
    super('AlexaTextListItem', props);
  }

  componentSpecificModel(): AlexaTextListItemModel {
    return {
      emptyRatingGraphic: this.props.emptyRatingGraphic,
      fullRatingGraphic: this.props.fullRatingGraphic,
      halfRatingGraphic: this.props.halfRatingGraphic,
      hideDivider: this.props.hideDivider,
      hideHorizontalMargin: this.props.hideHorizontalMargin,
      hideOrdinal: this.props.hideOrdinal,
      imageAlignment: this.props.imageAlignment,
      imageBlurredBackground: this.props.imageBlurredBackground,
      imageScale: this.props.imageScale,
      imageThumbnailShadow: this.props.imageThumbnailShadow,
      imageThumbnailSource: this.props.imageThumbnailSource,
      primaryAction: this.props.primaryAction,
      primaryText: this.props.primaryText,
      ratingGraphicType: this.props.ratingGraphicType,
      ratingNumber: this.props.ratingNumber,
      ratingSlotMode: this.props.ratingSlotMode,
      ratingText: this.props.ratingText,
      secondaryText: this.props.secondaryText,
      secondaryTextPosition: this.props.secondaryTextPosition,
      singleRatingGraphic: this.props.singleRatingGraphic,
      singleRatingGraphicWidth: this.props.singleRatingGraphicWidth,
      tertiaryText: this.props.tertiaryText,
      tertiaryTextPosition: this.props.tertiaryTextPosition,
      textAlignmentCenter: this.props.textAlignmentCenter,
      touchForward: this.props.touchForward
    };
  }

  componentSpecificRequestHandlers(): LabeledRequestHandler[] {
    return [...convertCommandListToRequestHandlers([this.props.primaryAction])];
  }
}
