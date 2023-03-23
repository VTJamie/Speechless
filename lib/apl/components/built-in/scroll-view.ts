import { LabeledRequestHandler } from '../../../skill/models';
import { Calculable } from '../../../types';
import { Command, CommandModel, CommandProps } from '../../commands';
import { KeyboardHandler, KeyboardHandlerProps } from '../../interfaces';
import { convertCommandListToRequestHandlers, convertComponentListToRequestHandlers } from '../../interfaces/helpers';
import { APLBaseComponentModel, APLBaseComponentProps, APLComponent } from '../component';

export interface APLScrollViewModel extends APLBaseComponentModel {
  onScroll?: Command<CommandModel, CommandProps>[];
  onFocus?: Command<CommandModel, CommandProps>[];
  onBlur?: Command<CommandModel, CommandProps>[];
  handleKeyDown?: KeyboardHandler[];
  handleKeyUp?: KeyboardHandler[];
  nextFocusDown?: Calculable<string>;
  nextFocusForward?: Calculable<string>;
  nextFocusLeft?: Calculable<string>;
  nextFocusRight?: Calculable<string>;
  nextFocusUp?: Calculable<string>;
  items: APLBaseComponentModel[];
}

export interface APLScrollViewProps extends APLBaseComponentProps {
  onScroll?: Command<CommandModel, CommandProps>[];
  onFocus?: Command<CommandModel, CommandProps>[];
  onBlur?: Command<CommandModel, CommandProps>[];
  handleKeyDown?: KeyboardHandlerProps[];
  handleKeyUp?: KeyboardHandlerProps[];
  nextFocusDown?: Calculable<string>;
  nextFocusForward?: Calculable<string>;
  nextFocusLeft?: Calculable<string>;
  nextFocusRight?: Calculable<string>;
  nextFocusUp?: Calculable<string>;
  items: APLComponent<APLBaseComponentModel, APLBaseComponentProps>[];
}

export class APLScrollView extends APLComponent<APLScrollViewModel, APLScrollViewProps> {
  constructor(props: APLScrollViewProps) {
    super('ScrollView', props);
  }
  componentSpecificModel(): APLScrollViewModel {
    return {
      onScroll: this.props.onScroll,
      onFocus: this.props.onFocus,
      onBlur: this.props.onBlur,
      handleKeyDown: this.props.handleKeyDown,
      handleKeyUp: this.props.handleKeyUp,
      nextFocusDown: this.props.nextFocusDown,
      nextFocusForward: this.props.nextFocusForward,
      nextFocusLeft: this.props.nextFocusLeft,
      nextFocusRight: this.props.nextFocusRight,
      nextFocusUp: this.props.nextFocusUp,
      items: this.props.items
    };
  }

  componentSpecificRequestHandlers(): LabeledRequestHandler[] {
    return [
      ...convertCommandListToRequestHandlers(this.props.onScroll),
      ...convertCommandListToRequestHandlers(this.props.onFocus),
      ...convertCommandListToRequestHandlers(this.props.onBlur),
      ...convertComponentListToRequestHandlers(this.props.items)
    ];
  }
}
