import { GestureModel, GestureProps, Gesture } from './gesture';
import { LabeledRequestHandler } from '../../skill';
import { Command, CommandModel, CommandProps } from '../commands';
import { convertCommandListToRequestHandlers } from '../interfaces/helpers';

/**
 * This interface was referenced by `AplSchema`'s JSON-Schema
 * via the `definition` "Tap".
 */
export interface TapGestureModel extends TapGestureProps, GestureModel {}

/**
 * This interface was referenced by `AplSchema`'s JSON-Schema
 * via the `definition` "Tap".
 */
export interface TapGestureProps extends GestureProps {
  /**
   * Commands to execute when a tap occurs
   */
  onTap?: Command<CommandModel, CommandProps>[];
}
export class TapGesture extends Gesture<TapGestureModel, TapGestureProps> {
  constructor(props: TapGestureProps) {
    super('Tap', props);
  }

  componentSpecificModel(): TapGestureModel {
    return {
      onTap: this.props.onTap
    };
  }

  componentSpecificRequestHandlers(): LabeledRequestHandler[] {
    return [...convertCommandListToRequestHandlers(this.props.onTap)];
  }
}
