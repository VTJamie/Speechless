import { LabeledRequestHandler } from '../../../../skill/models';
import { Calculable } from '../../../../types';
import { APLBaseComponentModel, APLBaseComponentProps, APLComponent } from '../../component';

export interface AlexaPageCounterModel extends APLBaseComponentModel {
  currentPage?: Calculable<string>;
  currentPageComponentId?: Calculable<string>;
  totalPages?: Calculable<string>;
}

export interface AlexaPageCounterProps extends APLBaseComponentProps {
  currentPage?: Calculable<string>;
  currentPageComponentId?: Calculable<string>;
  totalPages?: Calculable<string>;
}

export class AlexaPageCounter extends APLComponent<AlexaPageCounterModel, AlexaPageCounterProps> {
  constructor(props: AlexaPageCounterProps) {
    super('AlexaPageCounter', props);
  }

  componentSpecificModel(): AlexaPageCounterModel {
    return {
      currentPage: this.props.currentPage,
      currentPageComponentId: this.props.currentPage,
      totalPages: this.props.currentPage
    };
  }

  componentSpecificRequestHandlers(): LabeledRequestHandler[] {
    return [];
  }
}
