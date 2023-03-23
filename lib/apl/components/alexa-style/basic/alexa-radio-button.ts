import { LabeledRequestHandler } from '../../../../skill/models';
import { Calculable } from '../../../../types';
import { Command, CommandModel, CommandProps } from '../../../commands';
import { Color, Dimension } from '../../../interfaces';
import { APLBaseComponentModel, APLBaseComponentProps, APLComponent } from '../../component';

export interface AlexaRadioButtonModel extends APLBaseComponentModel {
  primaryAction: Command<CommandModel, CommandProps>;
  radioButtonColor?: Calculable<Color>;
  radioButtonHeight?: Calculable<Dimension>;
  radioButtonWidth?: Calculable<Dimension>;
}

export interface AlexaRadioButtonProps extends APLBaseComponentProps {
  primaryAction: Command<CommandModel, CommandProps>;
  radioButtonColor?: Calculable<Color>;
  radioButtonHeight?: Calculable<Dimension>;
  radioButtonWidth?: Calculable<Dimension>;
}

export class AlexaRadioButton extends APLComponent<AlexaRadioButtonModel, AlexaRadioButtonProps> {
  constructor(props: AlexaRadioButtonProps) {
    super('AlexaRadioButton', props);
  }

  componentSpecificModel(): AlexaRadioButtonModel {
    return {
      primaryAction: this.props.primaryAction,
      radioButtonColor: this.props.radioButtonColor,
      radioButtonHeight: this.props.radioButtonHeight,
      radioButtonWidth: this.props.radioButtonWidth
    };
  }

  componentSpecificRequestHandlers(): LabeledRequestHandler[] {
    return this.props.primaryAction.getRequestHandlers();
  }
}
