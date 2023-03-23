import { LabeledRequestHandler } from '../../../../skill/models';
import { Calculable } from '../../../../types';
import { ProgressBarType, Color } from '../../../interfaces';
import { APLBaseComponentModel, APLBaseComponentProps, APLComponent } from '../../component';

export interface AlexaProgressBarRadialModel extends APLBaseComponentModel {
  bufferValue?: Calculable<number>;
  progressBarType?: ProgressBarType;
  progressFillColor?: Calculable<Color>;
  progressValue?: Calculable<number>;
  totalValue?: Calculable<number>;
}

export interface AlexaProgressBarRadialProps extends APLBaseComponentProps {
  bufferValue?: Calculable<number>;
  progressBarType?: ProgressBarType;
  progressFillColor?: Calculable<Color>;
  progressValue?: Calculable<number>;
  totalValue?: Calculable<number>;
}

export class AlexaProgressBarRadial extends APLComponent<AlexaProgressBarRadialModel, AlexaProgressBarRadialProps> {
  constructor(props: AlexaProgressBarRadialProps) {
    super('AlexaProgressBarRadial', props);
  }

  componentSpecificModel(): AlexaProgressBarRadialModel {
    return {
      bufferValue: this.props.bufferValue,
      progressBarType: this.props.progressBarType,
      progressFillColor: this.props.progressFillColor,
      progressValue: this.props.progressValue,
      totalValue: this.props.totalValue
    };
  }

  componentSpecificRequestHandlers(): LabeledRequestHandler[] {
    return [];
  }
}
