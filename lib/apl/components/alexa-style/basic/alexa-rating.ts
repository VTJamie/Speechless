import { LabeledRequestHandler } from '../../../../skill/models';
import { Calculable } from '../../../../types';
import { Dimension } from '../../../interfaces';
import { APLBaseComponentModel, APLBaseComponentProps, APLComponent } from '../../component';

export interface AlexaRatingModel extends APLBaseComponentModel {
  emptyRatingGraphic?: Calculable<string>;
  fullRatingGraphic?: Calculable<string>;
  halfRatingGraphic?: Calculable<string>;
  ratingGraphicType?: Calculable<string>;
  ratingNumber: number;
  ratingSlotMode?: Calculable<string>;
  ratingSlotPadding?: Calculable<Dimension>;
  ratingText: Calculable<string>;
  ratingTextOpacity?: Calculable<number>;
  singleRatingGraphic: Calculable<string>;
  singleRatingGraphicWidth?: Calculable<Dimension>;
}

export interface AlexaRatingProps extends APLBaseComponentProps {
  emptyRatingGraphic?: Calculable<string>;
  fullRatingGraphic?: Calculable<string>;
  halfRatingGraphic?: Calculable<string>;
  ratingGraphicType?: Calculable<string>;
  ratingNumber: number;
  ratingSlotMode?: Calculable<string>;
  ratingSlotPadding?: Calculable<Dimension>;
  ratingText: Calculable<string>;
  ratingTextOpacity?: Calculable<number>;
  singleRatingGraphic: Calculable<string>;
  singleRatingGraphicWidth?: Calculable<Dimension>;
}

export class AlexaRating extends APLComponent<AlexaRatingModel, AlexaRatingProps> {
  constructor(props: AlexaRatingProps) {
    super('AlexaRating', props);
  }

  componentSpecificModel(): AlexaRatingModel {
    return {
      emptyRatingGraphic: this.props.emptyRatingGraphic,
      fullRatingGraphic: this.props.fullRatingGraphic,
      halfRatingGraphic: this.props.halfRatingGraphic,
      ratingGraphicType: this.props.ratingGraphicType,
      ratingNumber: this.props.ratingNumber,
      ratingSlotMode: this.props.ratingSlotMode,
      ratingSlotPadding: this.props.ratingSlotPadding,
      ratingText: this.props.ratingText,
      ratingTextOpacity: this.props.ratingTextOpacity,
      singleRatingGraphic: this.props.singleRatingGraphic,
      singleRatingGraphicWidth: this.props.singleRatingGraphicWidth
    };
  }

  componentSpecificRequestHandlers(): LabeledRequestHandler[] {
    return [];
  }
}
