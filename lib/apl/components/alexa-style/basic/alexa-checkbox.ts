import { LabeledRequestHandler } from '../../../../skill/models';
import { Calculable } from '../../../../types';
import { Command, CommandModel, CommandProps } from '../../../commands';
import { Color, Dimension } from '../../../interfaces';
import { APLBaseComponentModel, APLBaseComponentProps, APLComponent } from '../../component';

export interface AlexaCheckboxModel extends APLBaseComponentModel {
  checkboxHeight?: Calculable<Dimension>;
  checkboxWidth?: Calculable<Dimension>;
  primaryAction?: Command<CommandModel, CommandProps>;
  selectedColor?: Calculable<Color>;
}

export interface AlexaCheckboxProps extends APLBaseComponentProps {
  checkboxHeight?: Calculable<Dimension>;
  checkboxWidth?: Calculable<Dimension>;
  primaryAction?: Command<CommandModel, CommandProps>;
  selectedColor?: Calculable<Color>;
}

export class AlexaCheckbox extends APLComponent<AlexaCheckboxModel, AlexaCheckboxProps> {
  constructor(props: AlexaCheckboxProps) {
    super('AlexaCheckbox', props);
  }

  componentSpecificModel(): AlexaCheckboxModel {
    return {
      checkboxHeight: this.props.checkboxHeight,
      checkboxWidth: this.props.checkboxWidth,
      primaryAction: this.props.primaryAction,
      selectedColor: this.props.selectedColor
    };
  }

  componentSpecificRequestHandlers(): LabeledRequestHandler[] {
    return this.props.primaryAction ? this.props.primaryAction.getRequestHandlers() : [];
  }
}
