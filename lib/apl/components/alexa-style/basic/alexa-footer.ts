import { LabeledRequestHandler } from '../../../../skill/models';
import { Calculable } from '../../../../types';
import { APLBaseComponentModel, APLBaseComponentProps, APLComponent } from '../../component';

export interface AlexaFooterModel extends APLBaseComponentModel {
  hintText: Calculable<string>;
}

export interface AlexaFooterProps extends APLBaseComponentProps {
  hintText: Calculable<string>;
}

export class AlexaFooter extends APLComponent<AlexaFooterModel, AlexaFooterProps> {
  constructor(props: AlexaFooterProps) {
    super('AlexaFooter', props);
  }

  componentSpecificModel(): AlexaFooterModel {
    return {
      hintText: this.props.hintText
    };
  }
  componentSpecificRequestHandlers(): LabeledRequestHandler[] {
    return [];
  }
}
