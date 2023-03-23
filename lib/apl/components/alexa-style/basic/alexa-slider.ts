import { LabeledRequestHandler } from '../../../../skill/models';
import { Calculable } from '../../../../types';
import { Command, CommandModel, CommandProps } from '../../../commands';
import { Color, Dimension, KeyboardHandler, KeyboardHandlerProps, Source } from '../../../interfaces';
import { convertCommandListToRequestHandlers } from '../../../interfaces/helpers';
import { APLBaseComponentModel, APLBaseComponentProps, APLComponent } from '../../component';

export interface AlexaSliderModel extends APLBaseComponentModel {
  bufferValue?: Calculable<number>;
  handleKeyDownCommand?: KeyboardHandler[];
  iconLeftGraphicSource?: Source;
  iconRightGraphicSource?: Source;
  isLoading?: Calculable<boolean>;
  metadataDisplayed?: Calculable<boolean>;
  metadataPosition?: Calculable<string>;
  onBlurCommand?: Command<CommandModel, CommandProps>[];
  onDownCommand?: Command<CommandModel, CommandProps>[];
  onFocusCommand?: Command<CommandModel, CommandProps>[];
  onMoveCommand?: Command<CommandModel, CommandProps>[];
  onUpCommand?: Command<CommandModel, CommandProps>[];
  positionPropertyName?: Calculable<string>;
  progressFillColor?: Calculable<Color>;
  progressValue?: Calculable<number>;
  sliderId?: Calculable<string>;
  sliderMoveMillisecond?: Calculable<number>;
  sliderSize?: Calculable<Dimension>;
  sliderType?: Calculable<string>;
  thumbColor?: Calculable<Color>;
  thumbDisplayedAllStates?: Calculable<boolean>;
  totalValue?: Calculable<number>;
}

export interface AlexaSliderProps extends APLBaseComponentProps {
  bufferValue?: Calculable<number>;
  handleKeyDownCommand?: KeyboardHandlerProps[];
  iconLeftGraphicSource?: Source;
  iconRightGraphicSource?: Source;
  isLoading?: Calculable<boolean>;
  metadataDisplayed?: Calculable<boolean>;
  metadataPosition?: Calculable<string>;
  onBlurCommand?: Command<CommandModel, CommandProps>[];
  onDownCommand?: Command<CommandModel, CommandProps>[];
  onFocusCommand?: Command<CommandModel, CommandProps>[];
  onMoveCommand?: Command<CommandModel, CommandProps>[];
  onUpCommand?: Command<CommandModel, CommandProps>[];
  positionPropertyName?: Calculable<string>;
  progressFillColor?: Calculable<Color>;
  progressValue?: Calculable<number>;
  sliderId?: Calculable<string>;
  sliderMoveMillisecond?: Calculable<number>;
  sliderSize?: Calculable<Dimension>;
  sliderType?: Calculable<string>;
  thumbColor?: Calculable<Color>;
  thumbDisplayedAllStates?: Calculable<boolean>;
  totalValue?: Calculable<number>;
}

export class AlexaSlider extends APLComponent<AlexaSliderModel, AlexaSliderProps> {
  constructor(props: AlexaSliderProps) {
    super('AlexaSlider', props);
  }

  componentSpecificModel(): AlexaSliderModel {
    return {
      bufferValue: this.props.bufferValue,
      handleKeyDownCommand: this.props.handleKeyDownCommand,
      iconLeftGraphicSource: this.props.iconLeftGraphicSource,
      iconRightGraphicSource: this.props.iconRightGraphicSource,
      isLoading: this.props.isLoading,
      metadataDisplayed: this.props.metadataDisplayed,
      metadataPosition: this.props.metadataPosition,
      onBlurCommand: this.props.onBlurCommand,
      onDownCommand: this.props.onDownCommand,
      onFocusCommand: this.props.onFocusCommand,
      onMoveCommand: this.props.onMoveCommand,
      onUpCommand: this.props.onUpCommand,
      positionPropertyName: this.props.positionPropertyName,
      progressFillColor: this.props.progressFillColor,
      progressValue: this.props.progressValue,
      sliderId: this.props.sliderId,
      sliderMoveMillisecond: this.props.sliderMoveMillisecond,
      sliderSize: this.props.sliderSize,
      sliderType: this.props.sliderType,
      thumbColor: this.props.thumbColor,
      thumbDisplayedAllStates: this.props.thumbDisplayedAllStates,
      totalValue: this.props.totalValue
    };
  }

  componentSpecificRequestHandlers(): LabeledRequestHandler[] {
    return [
      ...convertCommandListToRequestHandlers(this.props.onBlurCommand),
      ...convertCommandListToRequestHandlers(this.props.onDownCommand),
      ...convertCommandListToRequestHandlers(this.props.onFocusCommand),
      ...convertCommandListToRequestHandlers(this.props.onMoveCommand),
      ...convertCommandListToRequestHandlers(this.props.onUpCommand)
    ];
  }
}
