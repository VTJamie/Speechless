import { LabeledRequestHandler } from '../../../../skill/models';
import { Calculable } from '../../../../types';
import { Command, CommandModel, CommandProps } from '../../../commands';
import { Color, Dimension } from '../../../interfaces';
import { convertCommandListToRequestHandlers } from '../../../interfaces/helpers';
import { APLBaseComponentModel, APLBaseComponentProps, APLComponent } from '../../component';

export interface AlexaSwitchModel extends APLBaseComponentModel {
  activeColor?: Calculable<Color>;
  primaryAction?: Command<CommandModel, CommandProps>;
  switchHeight?: Calculable<Dimension>;
  switchWidth?: Calculable<Dimension>;
}

export interface AlexaSwitchProps extends APLBaseComponentProps {
  activeColor?: Calculable<Color>;
  primaryAction?: Command<CommandModel, CommandProps>;
  switchHeight?: Calculable<Dimension>;
  switchWidth?: Calculable<Dimension>;
}

export class AlexaSwitch extends APLComponent<AlexaSwitchModel, AlexaSwitchProps> {
  constructor(props: AlexaSwitchProps) {
    super('AlexaSwitch', props);
  }

  componentSpecificModel(): AlexaSwitchModel {
    return {
      activeColor: this.props.activeColor,
      primaryAction: this.props.primaryAction,
      switchHeight: this.props.switchHeight,
      switchWidth: this.props.switchWidth
    };
  }

  componentSpecificRequestHandlers(): LabeledRequestHandler[] {
    return [...convertCommandListToRequestHandlers([this.props.primaryAction])];
  }
}
