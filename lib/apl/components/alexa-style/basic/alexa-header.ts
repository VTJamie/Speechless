import { LabeledRequestHandler } from '../../../../skill/models';
import { Calculable } from '../../../../types';
import { Command, CommandModel, CommandProps } from '../../../commands';
import { Color } from '../../../interfaces';
import { APLBaseComponentModel, APLBaseComponentProps, APLComponent } from '../../component';

export interface AlexaHeaderModel extends APLBaseComponentModel {
  headerAttributionImage?: Calculable<string>;
  headerAttributionOpacity?: Calculable<string>;
  headerAttributionPrimacy?: Calculable<string>;
  headerAttributionText?: Calculable<string>;
  headerBackButton?: Calculable<boolean>;
  headerBackButtonAccessibilityLabel?: Calculable<string>;
  headerBackButtonCommand?: Command<CommandModel, CommandProps>;
  headerBackgroundColor?: Calculable<Color>;
  headerDivider?: Calculable<string>;
  headerHorizontalAlignmentCentered?: Calculable<string>;
  headerSubtitle?: Calculable<string>;
  headerTitle?: Calculable<string>;
  layoutDirection?: Calculable<string>;
}

export interface AlexaHeaderProps extends APLBaseComponentProps {
  headerAttributionImage?: Calculable<string>;
  headerAttributionOpacity?: Calculable<string>;
  headerAttributionPrimacy?: Calculable<string>;
  headerAttributionText?: Calculable<string>;
  headerBackButton?: Calculable<boolean>;
  headerBackButtonAccessibilityLabel?: Calculable<string>;
  headerBackButtonCommand?: Command<CommandModel, CommandProps>;
  headerBackgroundColor?: Calculable<Color>;
  headerDivider?: Calculable<string>;
  headerHorizontalAlignmentCentered?: Calculable<string>;
  headerSubtitle?: Calculable<string>;
  headerTitle?: Calculable<string>;
  layoutDirection?: Calculable<string>;
}

export class AlexaHeader extends APLComponent<AlexaHeaderModel, AlexaHeaderProps> {
  constructor(props: AlexaHeaderProps) {
    super('AlexaHeader', props);
  }

  componentSpecificModel(): AlexaHeaderModel {
    return {
      headerAttributionImage: this.props.headerAttributionImage,
      headerAttributionOpacity: this.props.headerAttributionOpacity,
      headerAttributionPrimacy: this.props.headerAttributionPrimacy,
      headerAttributionText: this.props.headerAttributionText,
      headerBackButton: this.props.headerBackButton,
      headerBackButtonAccessibilityLabel: this.props.headerBackButtonAccessibilityLabel,
      headerBackButtonCommand: this.props.headerBackButtonCommand,
      headerBackgroundColor: this.props.headerBackgroundColor,
      headerDivider: this.props.headerDivider,
      headerHorizontalAlignmentCentered: this.props.headerHorizontalAlignmentCentered,
      headerSubtitle: this.props.headerSubtitle,
      headerTitle: this.props.headerTitle,
      layoutDirection: this.props.layoutDirection
    };
  }

  componentSpecificRequestHandlers(): LabeledRequestHandler[] {
    return this.props.headerBackButtonCommand ? this.props.headerBackButtonCommand.getRequestHandlers() : [];
  }
}
