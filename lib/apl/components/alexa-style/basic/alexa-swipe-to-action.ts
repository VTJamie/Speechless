import { LabeledRequestHandler } from '../../../../skill/models';
import { Calculable } from '../../../../types';
import { Command, CommandModel, CommandProps } from '../../../commands';
import { Source, Color, Dimension } from '../../../interfaces';
import { convertCommandListToRequestHandlers } from '../../../interfaces/helpers';
import { APLBaseComponentModel, APLBaseComponentProps, APLComponent } from '../../component';

export interface AlexaSwipeToActionModel extends APLBaseComponentModel {
  actionIcon?: Calculable<string>;
  actionIconBackground?: Calculable<Color>;
  actionIconForeground?: Calculable<Color>;
  actionIconType?: Calculable<string>;
  button1Command?: Command<CommandModel, CommandProps>;
  button1Text?: Calculable<string>;
  button2Command?: Command<CommandModel, CommandProps>;
  button2Text?: Calculable<string>;
  buttonsSpacingRight?: Calculable<Dimension>;
  buttonsSpacingTop?: Calculable<Dimension>;
  customLayoutName?: Calculable<string>;
  direction?: Calculable<string>;
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
  onButtonsHidden?: Command<CommandModel, CommandProps>;
  onButtonsShown?: Command<CommandModel, CommandProps>;
  onSwipeDone?: Command<CommandModel, CommandProps>;
  onSwipeMove?: Command<CommandModel, CommandProps>;
  primaryAction?: Command<CommandModel, CommandProps>;
  primaryText?: Calculable<string>;
  ratingGraphicType?: Calculable<string>;
  ratingSlotMode?: Calculable<string>;
  ratingText?: Calculable<string>;
  secondaryText?: Calculable<string>;
  secondaryTextPosition?: Calculable<string>;
  singleRatingGraphic?: Calculable<string>;
  singleRatingGraphicWidth?: Calculable<Dimension>;
  tertiaryText?: Calculable<string>;
  tertiaryTextPosition?: Calculable<string>;
  touchForward?: Calculable<boolean>;
}

export interface AlexaSwipeToActionProps extends APLBaseComponentProps {
  actionIcon?: Calculable<string>;
  actionIconBackground?: Calculable<Color>;
  actionIconForeground?: Calculable<Color>;
  actionIconType?: Calculable<string>;
  button1Command?: Command<CommandModel, CommandProps>;
  button1Text?: Calculable<string>;
  button2Command?: Command<CommandModel, CommandProps>;
  button2Text?: Calculable<string>;
  buttonsSpacingRight?: Calculable<Dimension>;
  buttonsSpacingTop?: Calculable<Dimension>;
  customLayoutName?: Calculable<string>;
  direction?: Calculable<string>;
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
  onButtonsHidden?: Command<CommandModel, CommandProps>;
  onButtonsShown?: Command<CommandModel, CommandProps>;
  onSwipeDone?: Command<CommandModel, CommandProps>;
  onSwipeMove?: Command<CommandModel, CommandProps>;
  primaryAction?: Command<CommandModel, CommandProps>;
  primaryText?: Calculable<string>;
  ratingGraphicType?: Calculable<string>;
  ratingSlotMode?: Calculable<string>;
  ratingText?: Calculable<string>;
  secondaryText?: Calculable<string>;
  secondaryTextPosition?: Calculable<string>;
  singleRatingGraphic?: Calculable<string>;
  singleRatingGraphicWidth?: Calculable<Dimension>;
  tertiaryText?: Calculable<string>;
  tertiaryTextPosition?: Calculable<string>;
  touchForward?: Calculable<boolean>;
}

export class AlexaSwipeToAction extends APLComponent<AlexaSwipeToActionModel, AlexaSwipeToActionProps> {
  constructor(props: AlexaSwipeToActionProps) {
    super('AlexaSwipeToAction', props);
  }

  componentSpecificModel(): AlexaSwipeToActionModel {
    return {
      actionIcon: this.props.actionIcon,
      actionIconBackground: this.props.actionIconBackground,
      actionIconForeground: this.props.actionIconForeground,
      actionIconType: this.props.actionIconType,
      button1Command: this.props.button1Command,
      button1Text: this.props.button1Text,
      button2Command: this.props.button2Command,
      button2Text: this.props.button2Text,
      buttonsSpacingRight: this.props.buttonsSpacingRight,
      buttonsSpacingTop: this.props.buttonsSpacingTop,
      customLayoutName: this.props.customLayoutName,
      direction: this.props.direction,
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
      onButtonsHidden: this.props.onButtonsHidden,
      onButtonsShown: this.props.onButtonsShown,
      onSwipeDone: this.props.onSwipeDone,
      onSwipeMove: this.props.onSwipeMove,
      primaryAction: this.props.primaryAction,
      primaryText: this.props.primaryText,
      ratingGraphicType: this.props.ratingGraphicType,
      ratingSlotMode: this.props.ratingSlotMode,
      ratingText: this.props.ratingText,
      secondaryText: this.props.secondaryText,
      secondaryTextPosition: this.props.secondaryTextPosition,
      singleRatingGraphic: this.props.singleRatingGraphic,
      singleRatingGraphicWidth: this.props.singleRatingGraphicWidth,
      tertiaryText: this.props.tertiaryText,
      tertiaryTextPosition: this.props.tertiaryTextPosition,
      touchForward: this.props.touchForward
    };
  }

  componentSpecificRequestHandlers(): LabeledRequestHandler[] {
    return [
      ...convertCommandListToRequestHandlers([
        this.props.onButtonsHidden,
        this.props.onButtonsShown,
        this.props.onSwipeDone,
        this.props.onSwipeMove,
        this.props.primaryAction,
        this.props.button1Command,
        this.props.button2Command
      ])
    ];
  }
}
