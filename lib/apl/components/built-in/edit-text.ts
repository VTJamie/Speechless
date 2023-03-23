import { LabeledRequestHandler } from '../../../skill/models';
import { Calculable } from '../../../types';
import { Command, CommandModel, CommandProps } from '../../commands';
import { APLActionableComponentModel, APLActionableComponentProps, Color, Dimension, FontStyle, FontWeight } from '../../interfaces';
import { convertActionableComponentPropsToRequestHandlers, convertCommandListToRequestHandlers } from '../../interfaces/helpers';
import { APLBaseComponentModel, APLBaseComponentProps, APLComponent } from '../component';

export interface APLEditTextModel extends APLBaseComponentModel, APLActionableComponentModel {
  borderColor?: Calculable<Color>;
  borderStrokeWidth?: Calculable<Dimension>;
  borderWidth?: Calculable<Dimension>;
  color?: Calculable<string>;
  fontFamily?: Calculable<string>;
  fontSize?: Calculable<Dimension>;
  fontStyle?: FontStyle;
  fontWeight?: FontWeight;
  highlightColor?: Calculable<Color>;
  hint?: Calculable<string>;
  hintColor?: Calculable<Color>;
  hintStyle?: FontStyle;
  hintWeight?: FontWeight;
  keyboardType?: Calculable<string>;
  lang?: Calculable<string>;
  maxLength?: Calculable<number>;
  onTextChange?: Command<CommandModel, CommandProps>[];
  onSubmit?: Command<CommandModel, CommandProps>[];
  secureInput?: Calculable<boolean>;
  selectOnFocus?: Calculable<boolean>;
  size?: Calculable<number>;
  submitKeyType?: Calculable<string>;
  text?: Calculable<string>;
  validCharacters?: Calculable<string>;
}

export interface APLEditTextProps extends APLBaseComponentProps, APLActionableComponentProps {
  borderColor?: Calculable<Color>;
  borderStrokeWidth?: Calculable<Dimension>;
  borderWidth?: Calculable<Dimension>;
  color?: Calculable<string>;
  fontFamily?: Calculable<string>;
  fontSize?: Calculable<Dimension>;
  fontStyle?: FontStyle;
  fontWeight?: FontWeight;
  highlightColor?: Calculable<Color>;
  hint?: Calculable<string>;
  hintColor?: Calculable<Color>;
  hintStyle?: FontStyle;
  hintWeight?: FontWeight;
  keyboardType?: Calculable<string>;
  lang?: Calculable<string>;
  maxLength?: Calculable<number>;
  onTextChange?: Command<CommandModel, CommandProps>[];
  onSubmit?: Command<CommandModel, CommandProps>[];
  secureInput?: Calculable<boolean>;
  selectOnFocus?: Calculable<boolean>;
  size?: Calculable<number>;
  submitKeyType?: Calculable<string>;
  text?: Calculable<string>;
  validCharacters?: Calculable<string>;
}

export class APLEditText extends APLComponent<APLEditTextModel, APLEditTextProps> {
  constructor(props: APLEditTextProps) {
    super('EditText', props);
  }
  componentSpecificModel(): APLEditTextModel {
    return {
      ...this.convertActionableComponentPropsToModel(this.props),
      borderColor: this.props.borderColor,
      borderStrokeWidth: this.props.borderStrokeWidth,
      borderWidth: this.props.borderWidth,
      color: this.props.color,
      fontFamily: this.props.fontFamily,
      fontSize: this.props.fontSize,
      fontStyle: this.props.fontStyle,
      fontWeight: this.props.fontWeight,
      highlightColor: this.props.highlightColor,
      hint: this.props.hint,
      hintColor: this.props.hintColor,
      hintStyle: this.props.hintStyle,
      hintWeight: this.props.hintWeight,
      keyboardType: this.props.keyboardType,
      lang: this.props.lang,
      maxLength: this.props.maxLength,
      onTextChange: this.props.onTextChange,
      onSubmit: this.props.onSubmit,
      secureInput: this.props.secureInput,
      selectOnFocus: this.props.selectOnFocus,
      size: this.props.size,
      submitKeyType: this.props.submitKeyType,
      text: this.props.text,
      validCharacters: this.props.validCharacters
    };
  }

  componentSpecificRequestHandlers(): LabeledRequestHandler[] {
    return [
      ...convertActionableComponentPropsToRequestHandlers(this.props),
      ...convertCommandListToRequestHandlers(this.props.onTextChange),
      ...convertCommandListToRequestHandlers(this.props.onSubmit)
    ];
  }
}
