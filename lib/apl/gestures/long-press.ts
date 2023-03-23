import { Gesture, GestureModel, GestureProps } from './gesture';
import { LabeledRequestHandler } from '../../skill';
import { Command, CommandModel, CommandProps } from '../commands';
import { convertCommandListToRequestHandlers } from '../interfaces/helpers';

export interface LongPressGestureModel extends LongPressGestureProps, GestureModel {}
export interface LongPressGestureProps extends GestureProps {
  /**
   * Commands to execute when a long-press is first detected
   */
  onLongPressStart?: Command<CommandModel, CommandProps>[];
  /**
   * Commands to execute when a long-press is finished
   */
  onLongPressEnd?: Command<CommandModel, CommandProps>[];
}
export class LongPressGesture extends Gesture<LongPressGestureModel, LongPressGestureProps> {
  constructor(props: LongPressGestureProps) {
    super('LongPress', props);
  }

  componentSpecificModel(): LongPressGestureModel {
    return {
      onLongPressEnd: this.props.onLongPressEnd,
      onLongPressStart: this.props.onLongPressStart
    };
  }

  componentSpecificRequestHandlers(): LabeledRequestHandler[] {
    return [
      ...convertCommandListToRequestHandlers(this.props.onLongPressEnd),
      ...convertCommandListToRequestHandlers(this.props.onLongPressStart)
    ];
  }
}
