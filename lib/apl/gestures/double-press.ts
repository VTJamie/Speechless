import { Gesture, GestureModel, GestureProps } from './gesture';
import { LabeledRequestHandler } from '../../skill';
import { Command, CommandModel, CommandProps } from '../commands';
import { convertCommandListToRequestHandlers } from '../interfaces/helpers';

export interface DoublePressGestureModel extends DoublePressGestureProps, GestureModel {}

export interface DoublePressGestureProps extends GestureProps {
  /**
   * Commands to execute on double press
   */
  onDoublePress?: Command<CommandModel, CommandProps>[];
  /**
   * Commands to execute on single press
   */
  onSinglePress?: Command<CommandModel, CommandProps>[];
}

export class DoublePressGesture extends Gesture<DoublePressGestureModel, DoublePressGestureProps> {
  constructor(props: DoublePressGestureProps) {
    super('DoublePress', props);
  }

  componentSpecificModel(): DoublePressGestureModel {
    return {
      onDoublePress: this.props.onDoublePress,
      onSinglePress: this.props.onSinglePress
    };
  }

  componentSpecificRequestHandlers(): LabeledRequestHandler[] {
    return [
      ...convertCommandListToRequestHandlers(this.props.onDoublePress),
      ...convertCommandListToRequestHandlers(this.props.onSinglePress)
    ];
  }
}
