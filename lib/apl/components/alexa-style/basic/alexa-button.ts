import { LabeledRequestHandler } from '../../../../skill/models';
import { Calculable } from '../../../../types';
import { Command, CommandModel, CommandProps } from '../../../commands';
import { Source, ButtonStyle } from '../../../interfaces';
import { APLBaseComponentModel, APLBaseComponentProps, APLComponent } from '../../component';

export interface AlexaButtonModel extends APLBaseComponentModel {
  buttonText?: Calculable<string>;
  buttonIconName?: Calculable<string>;
  buttonIconSource?: Calculable<Source>;
  buttonIconStyle?: Calculable<string>;
  buttonStyle?: Calculable<ButtonStyle>;

  primaryAction?: Command<CommandModel, CommandProps>;
  touchForward?: Calculable<boolean>;
}

export interface AlexaButtonProps extends APLBaseComponentProps {
  buttonText?: Calculable<string>;
  buttonIconName?: Calculable<string>;
  buttonIconSource?: Calculable<Source>;
  buttonIconStyle?: Calculable<string>;
  buttonStyle?: Calculable<ButtonStyle>;

  primaryAction?: Command<CommandModel, CommandProps>;
  touchForward?: Calculable<boolean>;
}

export class AlexaButton extends APLComponent<AlexaButtonModel, AlexaButtonProps> {
  constructor(props: AlexaButtonProps) {
    super('AlexaButton', props);
  }

  componentSpecificModel(): AlexaButtonModel {
    return {
      buttonText: this.props.buttonText,
      buttonIconName: this.props.buttonIconName,
      buttonIconSource: this.props.buttonIconSource,
      buttonIconStyle: this.props.buttonIconStyle,
      buttonStyle: this.props.buttonStyle,
      primaryAction: this.props.primaryAction,
      touchForward: this.props.touchForward
    };
  }

  componentSpecificRequestHandlers(): LabeledRequestHandler[] {
    return this.props.primaryAction ? this.props.primaryAction.getRequestHandlers() : [];
  }
}
