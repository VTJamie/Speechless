import { LabeledRequestHandler } from '../../../skill/models';
import { Calculable } from '../../../types';
import { FontStyle, FontWeight, Dimension, Color, TextAlignHorizontal, TextAlignVertical } from '../../interfaces';
import { APLBaseComponentModel, APLBaseComponentProps, APLComponent } from '../component';

export interface APLTextModel extends APLBaseComponentModel {
  text: Calculable<string>;
  textAlign?: TextAlignHorizontal;
  textAlignVertical?: TextAlignVertical;
  color?: Calculable<Color>;
  fontStyle?: FontStyle;
  fontFamily?: Calculable<string>;
  maxLines?: Calculable<number>;
  fontSize?: Calculable<Dimension>;

  fontWeight?: Calculable<FontWeight>;
  lang?: Calculable<string>;
  letterSpacing?: Calculable<Dimension>;
  lineHeight?: Calculable<Dimension>;
}

export interface APLTextProps extends APLBaseComponentProps {
  text: Calculable<string>;
  textAlign?: TextAlignHorizontal;
  textAlignVertical?: TextAlignVertical;
  color?: Calculable<Color>;
  fontStyle?: FontStyle;
  fontFamily?: Calculable<string>;
  maxLines?: Calculable<number>;
  fontSize?: Calculable<Dimension>;

  fontWeight?: Calculable<FontWeight>;
  lang?: Calculable<string>;
  letterSpacing?: Calculable<Dimension>;
  lineHeight?: Calculable<Dimension>;
}

export class APLText extends APLComponent<APLTextModel, APLTextProps> {
  constructor(props: APLTextProps) {
    super('Text', props);
  }
  componentSpecificModel(): APLTextModel {
    return {
      text: this.props.text,

      textAlign: this.props.textAlign,
      textAlignVertical: this.props.textAlignVertical,
      color: this.props.color,
      fontStyle: this.props.fontStyle,
      fontFamily: this.props.fontFamily,
      maxLines: this.props.maxLines,
      fontSize: this.props.fontSize,

      fontWeight: this.props.fontWeight,
      lang: this.props.lang,
      letterSpacing: this.props.letterSpacing,
      lineHeight: this.props.lineHeight
    };
  }

  componentSpecificRequestHandlers(): LabeledRequestHandler[] {
    return [];
  }
}
