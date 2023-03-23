import { GestureModel, GestureProps, Gesture } from './gesture';
import { LabeledRequestHandler } from '../../skill';
import { Command, CommandModel, CommandProps } from '../commands';
import { APLComponent, APLBaseComponentModel, APLBaseComponentProps } from '../components';
import { SwipeAction, SwipeDirection } from '../interfaces';
import { convertCommandListToRequestHandlers } from '../interfaces/helpers';

/**
 * This interface was referenced by `AplSchema`'s JSON-Schema
 * via the `definition` "SwipeAway".
 */
export interface SwipeAwayGestureModel extends SwipeAwayGestureProps, GestureModel {}

/**
 * This interface was referenced by `AplSchema`'s JSON-Schema
 * via the `definition` "SwipeAway".
 */
export interface SwipeAwayGestureProps extends GestureProps {
  /**
   * How the original and child component will be displayed
   */
  action?: SwipeAction;
  /**
   * Swipe direction
   */
  direction: SwipeDirection;
  /**
   * Child item to display during the swipe gesture
   */
  item?: APLComponent<APLBaseComponentModel, APLBaseComponentProps>[];
  /**
   * Commands to execute as the swipe position changes
   */
  onSwipeMove?: Command<CommandModel, CommandProps>[];
  /**
   * Commands to execute when the swipe is complete
   */
  onSwipeDone?: Command<CommandModel, CommandProps>[];
}
export class SwipeAwayGesture extends Gesture<SwipeAwayGestureModel, SwipeAwayGestureProps> {
  constructor(props: SwipeAwayGestureProps) {
    super('SwipeAway', props);
  }

  componentSpecificModel(): SwipeAwayGestureModel {
    return {
      direction: this.props.direction,
      action: this.props.action,
      item: this.props.item,
      onSwipeDone: this.props.onSwipeDone,
      onSwipeMove: this.props.onSwipeMove
    };
  }

  componentSpecificRequestHandlers(): LabeledRequestHandler[] {
    return [...convertCommandListToRequestHandlers(this.props.onSwipeDone), ...convertCommandListToRequestHandlers(this.props.onSwipeMove)];
  }
}
