import { LabeledRequestHandler } from '../../../../skill/models';
import { Calculable } from '../../../../types';
import { APLBaseComponentModel, APLBaseComponentProps, APLComponent } from '../../component';

export interface AlexaDividerModel extends APLBaseComponentModel {
  dividerDirection?: Calculable<string>;
}

export interface AlexaDividerProps extends APLBaseComponentProps {
  dividerDirection?: Calculable<string>;
}

export class AlexaDivider extends APLComponent<AlexaDividerModel, AlexaDividerProps> {
  constructor(props: AlexaDividerProps) {
    super('AlexaDivider', props);
  }

  componentSpecificModel(): AlexaDividerModel {
    return {
      dividerDirection: this.props.dividerDirection
    };
  }

  componentSpecificRequestHandlers(): LabeledRequestHandler[] {
    return [];
  }
}
