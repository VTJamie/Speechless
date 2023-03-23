import { LabeledRequestHandler } from '../../../../skill/models';
import { Calculable } from '../../../../types';
import { Command, CommandModel, CommandProps } from '../../../commands';
import { Dimension } from '../../../interfaces';
import { APLBaseComponentModel, APLBaseComponentProps, APLComponent } from '../../component';

export interface AlexaIconButtonModel extends APLBaseComponentModel {
  buttonId: Calculable<string>;
  buttonSize?: Calculable<Dimension>;
  buttonStyle?: Calculable<string>;
  primaryAction: Command<CommandModel, CommandProps>;
  vectorSource: Calculable<string>;
}

export interface AlexaIconButtonProps extends APLBaseComponentProps {
  buttonId: Calculable<string>;
  buttonSize?: Calculable<Dimension>;
  buttonStyle?: Calculable<string>;
  primaryAction: Command<CommandModel, CommandProps>;
  vectorSource: Calculable<string>;
}

export class AlexaIconButton extends APLComponent<AlexaIconButtonModel, AlexaIconButtonProps> {
  constructor(props: AlexaIconButtonProps) {
    super('AlexaIconButton', props);
  }

  componentSpecificModel(): AlexaIconButtonModel {
    return {
      buttonId: this.props.buttonId,
      buttonSize: this.props.buttonSize,
      buttonStyle: this.props.buttonStyle,
      primaryAction: this.props.primaryAction,
      vectorSource: this.props.vectorSource
    };
  }

  componentSpecificRequestHandlers(): LabeledRequestHandler[] {
    return this.props.primaryAction.getRequestHandlers();
  }
}
