import { LabeledRequestHandler } from '../../../../skill/models';
import { Calculable } from '../../../../types';
import { Command, CommandModel, CommandProps } from '../../../commands';
import { Dimension, SecondaryControls } from '../../../interfaces';
import { convertCommandListToRequestHandlers } from '../../../interfaces/helpers';
import { APLBaseComponentModel, APLBaseComponentProps, APLComponent } from '../../component';

export interface AlexaTransportControlsModel extends APLBaseComponentModel {
  autoplay?: Calculable<boolean>;
  mediaComponentId?: Calculable<string>;
  playPauseToggleButtonId?: Calculable<string>;
  primaryControlPauseAction?: Command<CommandModel, CommandProps>;
  primaryControlPlayAction?: Command<CommandModel, CommandProps>;
  primaryControlSize?: Calculable<Dimension>;
  secondaryControlSize?: Calculable<Dimension>;
  secondaryControls?: Calculable<SecondaryControls>;
  secondaryControlsAVGLeft?: Calculable<string>;
  secondaryControlsAVGRight?: Calculable<string>;
  secondaryControlsLeftAccessibilityLabel?: Calculable<string>;
  secondaryControlsLeftAction?: Command<CommandModel, CommandProps>;
  secondaryControlsRightAccessibilityLabel?: Calculable<string>;
  secondaryControlsRightAction?: Command<CommandModel, CommandProps>;
}

export interface AlexaTransportControlsProps extends APLBaseComponentProps {
  autoplay?: Calculable<boolean>;
  mediaComponentId?: Calculable<string>;
  playPauseToggleButtonId?: Calculable<string>;
  primaryControlPauseAction?: Command<CommandModel, CommandProps>;
  primaryControlPlayAction?: Command<CommandModel, CommandProps>;
  primaryControlSize?: Calculable<Dimension>;
  secondaryControlSize?: Calculable<Dimension>;
  secondaryControls?: Calculable<SecondaryControls>;
  secondaryControlsAVGLeft?: Calculable<string>;
  secondaryControlsAVGRight?: Calculable<string>;
  secondaryControlsLeftAccessibilityLabel?: Calculable<string>;
  secondaryControlsLeftAction?: Command<CommandModel, CommandProps>;
  secondaryControlsRightAccessibilityLabel?: Calculable<string>;
  secondaryControlsRightAction?: Command<CommandModel, CommandProps>;
}

export class AlexaTransportControls extends APLComponent<AlexaTransportControlsModel, AlexaTransportControlsProps> {
  constructor(props: AlexaTransportControlsProps) {
    super('AlexaTransportControls', props);
  }

  componentSpecificModel(): AlexaTransportControlsModel {
    return {
      autoplay: this.props.autoplay,
      mediaComponentId: this.props.mediaComponentId,
      playPauseToggleButtonId: this.props.playPauseToggleButtonId,
      primaryControlPauseAction: this.props.primaryControlPauseAction,
      primaryControlPlayAction: this.props.primaryControlPlayAction,
      primaryControlSize: this.props.primaryControlSize,
      secondaryControlSize: this.props.secondaryControlSize,
      secondaryControls: this.props.secondaryControls,
      secondaryControlsAVGLeft: this.props.secondaryControlsAVGLeft,
      secondaryControlsAVGRight: this.props.secondaryControlsAVGRight,
      secondaryControlsLeftAccessibilityLabel: this.props.secondaryControlsLeftAccessibilityLabel,
      secondaryControlsLeftAction: this.props.secondaryControlsLeftAction,
      secondaryControlsRightAccessibilityLabel: this.props.secondaryControlsRightAccessibilityLabel,
      secondaryControlsRightAction: this.props.secondaryControlsRightAction
    };
  }

  componentSpecificRequestHandlers(): LabeledRequestHandler[] {
    return [
      ...convertCommandListToRequestHandlers([
        this.props.primaryControlPauseAction,
        this.props.primaryControlPlayAction,
        this.props.secondaryControlsLeftAction,
        this.props.secondaryControlsRightAction
      ])
    ];
  }
}
