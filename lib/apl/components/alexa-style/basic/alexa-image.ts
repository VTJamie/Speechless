import { LabeledRequestHandler } from '../../../../skill/models';
import { Calculable } from '../../../../types';
import { Dimension } from '../../../interfaces';
import { APLBaseComponentModel, APLBaseComponentProps, APLComponent } from '../../component';

export interface AlexaImageModel extends APLBaseComponentModel {
  imageAlignment?: Calculable<string>;
  imageAspectRatio?: Calculable<string>;
  imageBlurredBackground?: Calculable<boolean>;
  imageHeight: Calculable<Dimension>;
  imageScale?: Calculable<string>;
  imageWidth: Calculable<Dimension>;
  gradientLowerInputRange?: Calculable<string>;
  imageRoundedCorner?: Calculable<boolean>;
  imageShadow?: Calculable<boolean>;
  imageSource: Calculable<string>;
  overlayGradient?: Calculable<boolean>;
}

export interface AlexaImageProps extends APLBaseComponentProps {
  imageAlignment?: Calculable<string>;
  imageAspectRatio?: Calculable<string>;
  imageBlurredBackground?: Calculable<boolean>;
  imageHeight: Dimension;
  imageScale?: Calculable<string>;
  imageWidth: Dimension;
  gradientLowerInputRange?: Calculable<string>;
  imageRoundedCorner?: Calculable<boolean>;
  imageShadow?: Calculable<boolean>;
  imageSource: Calculable<string>;
  overlayGradient?: Calculable<boolean>;
}

export class AlexaImage extends APLComponent<AlexaImageModel, AlexaImageProps> {
  constructor(props: AlexaImageProps) {
    super('AlexaImage', props);
  }

  componentSpecificModel(): AlexaImageModel {
    return {
      imageAlignment: this.props.imageAlignment,
      imageAspectRatio: this.props.imageAspectRatio,
      imageBlurredBackground: this.props.imageBlurredBackground,
      imageHeight: this.props.imageHeight,
      imageScale: this.props.imageScale,
      imageWidth: this.props.imageWidth,
      gradientLowerInputRange: this.props.gradientLowerInputRange,
      imageRoundedCorner: this.props.imageRoundedCorner,
      imageShadow: this.props.imageShadow,
      imageSource: this.props.imageSource,
      overlayGradient: this.props.overlayGradient
    };
  }

  componentSpecificRequestHandlers(): LabeledRequestHandler[] {
    return [];
  }
}
