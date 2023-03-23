import { LabeledRequestHandler } from '../../../../skill/models';
import { Calculable } from '../../../../types';
import { APLBaseComponentModel, APLBaseComponentProps, APLComponent } from '../../component';

export interface AlexaOrdinalModel extends APLBaseComponentModel {
  ordinalText: Calculable<string>;
}

export interface AlexaOrdinalProps extends APLBaseComponentProps {
  ordinalText: Calculable<string>;
}

export class AlexaOrdinal extends APLComponent<AlexaOrdinalModel, AlexaOrdinalProps> {
  constructor(props: AlexaOrdinalProps) {
    super('AlexaOrdinal', props);
  }

  componentSpecificModel(): AlexaOrdinalModel {
    return {
      ordinalText: this.props.ordinalText
    };
  }

  componentSpecificRequestHandlers(): LabeledRequestHandler[] {
    return [];
  }
}
