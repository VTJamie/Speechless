import { LabeledRequestHandler } from '../../../skill/models';
import { Calculable } from '../../../types';
import { Command, CommandModel, CommandProps } from '../../commands';
import { Gesture, GestureModel, GestureProps } from '../../gestures';
import { KeyboardHandlerProps } from '../../interfaces';
import {
  convertCommandListToRequestHandlers,
  convertComponentListToRequestHandlers,
  convertKeyboardHandlerListToRequestHandlers
} from '../../interfaces/helpers';
import { APLBaseComponentModel, APLBaseComponentProps, APLComponent } from '../component';

export interface APLTouchWrapperModel extends APLBaseComponentModel, APLTouchWrapperProps {}

export interface APLTouchWrapperProps extends APLBaseComponentProps {
  /**
   * Command to execute when the component receives focus.
   */
  onFocus?: Command<CommandModel, CommandProps>[];
  /**
   * Command to execute when the component loses focus.
   */
  onBlur?: Command<CommandModel, CommandProps>[];
  handleKeyDown?: KeyboardHandlerProps[];
  handleKeyUp?: KeyboardHandlerProps[];
  /**
   * The component to focus if the down key is pressed.
   */
  nextFocusDown?: Calculable<string>;
  /**
   * The component to focus if the tab key is pressed.
   */
  nextFocusForward?: Calculable<string>;
  /**
   * The component to focus if the left key is pressed.
   */
  nextFocusLeft?: Calculable<string>;
  /**
   * The component to focus if the right key is pressed.
   */
  nextFocusRight?: Calculable<string>;
  /**
   * The component to focus if the up key is pressed.
   */
  nextFocusUp?: Calculable<string>;
  gestures?: Gesture<GestureModel, GestureProps>[];
  /**
   * Commands to execute when a gesture takes over the pointer.
   */
  onCancel?: Command<CommandModel, CommandProps>[];
  /**
   * Commands to execute when a pointer down event occurs.
   */
  onDown?: Command<CommandModel, CommandProps>[];
  /**
   * Commands to execute while moving the pointer.
   */
  onMove?: Command<CommandModel, CommandProps>[];
  /**
   * Commands to execute for a pointer down followed by an up.
   */
  onPress?: Command<CommandModel, CommandProps>[];
  /**
   * Commands to execute when releasing the pointer.
   */
  onUp?: Command<CommandModel, CommandProps>[];
  items?: APLComponent<APLBaseComponentModel, APLBaseComponentProps>[];
}

export class APLTouchWrapper extends APLComponent<APLTouchWrapperModel, APLTouchWrapperProps> {
  readonly props: APLTouchWrapperProps;
  constructor(props: APLTouchWrapperProps) {
    super('TouchWrapper', props);
    this.props = props;
  }
  componentSpecificModel(): APLTouchWrapperModel {
    return {
      onFocus: this.props.onFocus,

      onBlur: this.props.onBlur,
      handleKeyDown: this.props.handleKeyDown,
      handleKeyUp: this.props.handleKeyUp,

      nextFocusDown: this.props.nextFocusDown,

      nextFocusForward: this.props.nextFocusForward,

      nextFocusLeft: this.props.nextFocusLeft,

      nextFocusRight: this.props.nextFocusRight,

      nextFocusUp: this.props.nextFocusUp,
      gestures: this.props.gestures,

      onCancel: this.props.onCancel,

      onDown: this.props.onDown,

      onMove: this.props.onMove,

      onPress: this.props.onPress,
      onUp: this.props.onUp,
      items: this.props.items
    };
  }

  componentSpecificRequestHandlers(): LabeledRequestHandler[] {
    const gestureList = this.props.gestures ? this.props.gestures?.flatMap((gesture) => gesture.getRequestHandlers()) : [];
    return [
      ...convertComponentListToRequestHandlers(this.props.items),
      ...convertCommandListToRequestHandlers(this.props.onFocus),
      ...convertCommandListToRequestHandlers(this.props.onBlur),
      ...convertKeyboardHandlerListToRequestHandlers(this.props.handleKeyDown),
      ...convertKeyboardHandlerListToRequestHandlers(this.props.handleKeyUp),
      ...convertCommandListToRequestHandlers(this.props.onCancel),
      ...convertCommandListToRequestHandlers(this.props.onDown),
      ...convertCommandListToRequestHandlers(this.props.onMove),
      ...convertCommandListToRequestHandlers(this.props.onPress),
      ...convertCommandListToRequestHandlers(this.props.onUp),
      ...gestureList
    ];
  }
}
