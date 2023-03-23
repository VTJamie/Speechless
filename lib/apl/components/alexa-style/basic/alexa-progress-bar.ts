import { LabeledRequestHandler } from '../../../../skill/models';
import { Calculable } from '../../../../types';
import { ProgressBarType, Color } from '../../../interfaces';
import { APLBaseComponentModel, APLBaseComponentProps, APLComponent } from '../../component';

export interface AlexaProgressBarModel extends APLBaseComponentModel {
  bufferValue?: Calculable<number>;
  isLoading?: Calculable<boolean>;
  progressBarType?: ProgressBarType;
  progressFillColor?: Calculable<Color>;
  progressValue?: Calculable<number>;
  totalValue?: Calculable<number>;
}

export interface AlexaProgressBarProps extends APLBaseComponentProps {
  bufferValue: number;
  isLoading: Calculable<boolean>;
  progressBarType: ProgressBarType;
  progressFillColor: Calculable<Color>;
  progressValue: number;
  totalValue: number;
}

export class AlexaProgressBar extends APLComponent<AlexaProgressBarModel, AlexaProgressBarProps> {
  constructor(props: AlexaProgressBarProps) {
    super('AlexaProgressBar', props);
  }

  componentSpecificModel(): AlexaProgressBarModel {
    return {
      bufferValue: this.props.bufferValue,
      isLoading: this.props.isLoading,
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
