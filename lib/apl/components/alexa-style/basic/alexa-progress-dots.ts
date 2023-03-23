import { LabeledRequestHandler } from '../../../../skill/models';
import { Calculable } from '../../../../types';
import { Dimension } from '../../../interfaces';
import { APLBaseComponentModel, APLBaseComponentProps, APLComponent } from '../../component';

export interface AlexaProgressDotsModel extends APLBaseComponentModel {
  componentId?: string;
  dotSize?: Calculable<Dimension>;
}

export interface AlexaProgressDotsProps extends APLBaseComponentProps {
  componentId?: string;
  dotSize?: Calculable<Dimension>;
}

export class AlexaProgressDots extends APLComponent<AlexaProgressDotsModel, AlexaProgressDotsProps> {
  constructor(props: AlexaProgressDotsProps) {
    super('AlexaProgressDots', props);
  }

  componentSpecificModel(): AlexaProgressDotsModel {
    return {
      componentId: this.props.componentId,
      dotSize: this.props.dotSize
    };
  }

  componentSpecificRequestHandlers(): LabeledRequestHandler[] {
    return [];
  }
}
