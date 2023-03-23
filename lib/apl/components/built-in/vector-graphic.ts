import { LabeledRequestHandler } from '../../../skill/models';
import { Calculable } from '../../../types';
import { Command, CommandModel, CommandProps } from '../../commands';
import { Gesture, GestureModel, GestureProps } from '../../gestures';
import { ImageAlign, KeyboardHandlerProps, Scale, Source } from '../../interfaces';
import { convertCommandListToRequestHandlers, convertKeyboardHandlerListToRequestHandlers } from '../../interfaces/helpers';
import { APLBaseComponentModel, APLBaseComponentProps, APLComponent } from '../component';

export interface APLVectorGraphicModel extends APLBaseComponentModel, APLVectorGraphicProps {}

export interface APLVectorGraphicProps extends APLBaseComponentProps {
  /**
   * How the graphic should be aligned in the current box
   */
  align?: ImageAlign;
  /**
   * The URL or direct reference to a vector graphic.
   */
  source?: Source;
  /**
   * How the image should be scaled to fill the current box.
   */
  scale?: Scale;
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
  /**
   * Command(s) to execute when all sources have loaded
   */
  onLoad?: Command<CommandModel, CommandProps>[];
  /**
   * Command(s) to execute if any source fails to load
   */
  onFail?: Command<CommandModel, CommandProps>[];
}

export class APLVectorGraphic extends APLComponent<APLVectorGraphicModel, APLVectorGraphicProps> {
  constructor(props: APLVectorGraphicProps) {
    super('VectorGraphic', props);
  }
  componentSpecificModel(): APLVectorGraphicModel {
    return {
      /**
       * How the graphic should be aligned in the current box
       */
      align: this.props.align,
      /**
       * The URL or direct reference to a vector graphic.
       */
      source: this.props.source,
      /**
       * How the image should be scaled to fill the current box.
       */
      scale: this.props.scale,
      /**
       * Command to execute when the component receives focus.
       */
      onFocus: this.props.onFocus,
      /**
       * Command to execute when the component loses focus.
       */
      onBlur: this.props.onBlur,
      handleKeyDown: this.props.handleKeyDown,
      handleKeyUp: this.props.handleKeyUp,
      /**
       * The component to focus if the down key is pressed.
       */
      nextFocusDown: this.props.nextFocusDown,
      /**
       * The component to focus if the tab key is pressed.
       */
      nextFocusForward: this.props.nextFocusForward,
      /**
       * The component to focus if the left key is pressed.
       */
      nextFocusLeft: this.props.nextFocusLeft,
      /**
       * The component to focus if the right key is pressed.
       */
      nextFocusRight: this.props.nextFocusRight,
      /**
       * The component to focus if the up key is pressed.
       */
      nextFocusUp: this.props.nextFocusUp,
      gestures: this.props.gestures,
      /**
       * Commands to execute when a gesture takes over the pointer.
       */
      onCancel: this.props.onCancel,
      /**
       * Commands to execute when a pointer down event occurs.
       */
      onDown: this.props.onDown,
      /**
       * Commands to execute while moving the pointer.
       */
      onMove: this.props.onMove,
      /**
       * Commands to execute for a pointer down followed by an up.
       */
      onPress: this.props.onPress,
      /**
       * Commands to execute when releasing the pointer.
       */
      onUp: this.props.onUp,
      /**
       * Command(s) to execute when all sources have loaded
       */
      onLoad: this.props.onLoad,
      /**
       * Command(s) to execute if any source fails to load
       */
      onFail: this.props.onFail
    };
  }

  componentSpecificRequestHandlers(): LabeledRequestHandler[] {
    const gestures = this.props.gestures ? this.props.gestures?.flatMap((gesture) => gesture.getRequestHandlers()) : [];
    return [
      ...gestures,
      /**
       * Commands to execute when a gesture takes over the pointer.
       */
      ...convertCommandListToRequestHandlers(this.props.onCancel),
      /**
       * Commands to execute when a pointer down event occurs.
       */
      ...convertCommandListToRequestHandlers(this.props.onDown),
      /**
       * Commands to execute while moving the pointer.
       */
      ...convertCommandListToRequestHandlers(this.props.onMove),
      /**
       * Commands to execute for a pointer down followed by an up.
       */
      ...convertCommandListToRequestHandlers(this.props.onPress),
      /**
       * Commands to execute when releasing the pointer.
       */
      ...convertCommandListToRequestHandlers(this.props.onUp),
      /**
       * Command(s) to execute when all sources have loaded
       */
      ...convertCommandListToRequestHandlers(this.props.onLoad),
      /**
       * Command(s) to execute if any source fails to load
       */
      ...convertCommandListToRequestHandlers(this.props.onFail),
      ...convertCommandListToRequestHandlers(this.props.onFocus),
      /**
       * Command to execute when the component loses focus.
       */
      ...convertCommandListToRequestHandlers(this.props.onBlur),
      ...convertKeyboardHandlerListToRequestHandlers(this.props.handleKeyDown),
      ...convertKeyboardHandlerListToRequestHandlers(this.props.handleKeyUp)
    ];
  }
}
