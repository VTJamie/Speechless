import { interfaces } from 'ask-sdk-model';

import { Color } from './color';
import { Dimension } from './dimension';
import { NameAndDescription, Source } from './models';
import { Alignment, AudioTrack, BindingType, Easing, Numbering, Position } from './types';
import { IntentHandler } from '../../skill';
import { Calculable } from '../../types';
import { AVGGraphic, Gradient, GradientModel, GradientProps } from '../avg';
import { Command, CommandModel, CommandProps } from '../commands';
import { APLBaseComponentModel, APLBaseComponentProps, APLComponent } from '../components';

export interface APLContainerChildComponentProps {
  alignSelf?: Calculable<Alignment>;
  bottom?: Calculable<Dimension>;
  end?: Calculable<Dimension>;
  grow?: Calculable<number>;
  left?: Calculable<Dimension>;
  numbering?: Calculable<Numbering>;
  position?: Calculable<Position>;
  right?: Calculable<Dimension>;
  shrink?: Calculable<number>;
  spacing?: Calculable<Dimension>;
  start?: Calculable<Dimension>;
  top?: Calculable<Dimension>;
}

export interface ImportProps {
  name: string;
  source?: Source;
  version: string;
}
export interface ExportProps {
  name: string;
  description?: string;
  graphics?: NameAndDescription[];
  layouts?: NameAndDescription[];
  resources?: NameAndDescription[];
  styles?: NameAndDescription[];
}

export interface ExtensionsProps {
  name: string;
  uri: string;
}

export interface APLActionableComponentProps {
  onFocus?: Command<CommandModel, CommandProps>[];
  onBlur?: Command<CommandModel, CommandProps>[];
  handleKeyDown?: KeyboardHandlerProps[];
  handleKeyUp?: KeyboardHandlerProps[];
}

export interface APLMultiChildComponentProps {
  data?: unknown[] | string;
  firstItem?: APLComponent<APLBaseComponentModel, APLBaseComponentProps>[];
  lastItem?: APLComponent<APLBaseComponentModel, APLBaseComponentProps>[];
  items: APLComponent<APLBaseComponentModel, APLBaseComponentProps>[];
}

export interface APLResourceProps {
  description?: string;
  when?: string;
  booleans?: APLResourceMapProps<Calculable<boolean>>;
  numbers?: APLResourceMapProps<Calculable<number>>;
  strings?: APLResourceMapProps<Calculable<string>>;
  gradients?: APLResourceMapProps<Gradient<GradientModel, GradientProps>>;
  easings?: APLResourceMapProps<Calculable<Easing>>;
  patterns?: APLResourceMapProps<Calculable<PatternProps>>;
  colors?: APLResourceMapProps<Calculable<Color>>;
}

export interface PatternProps {
  items?: AVGGraphic[];
  description?: string;
  height: Calculable<number>;
  width: Calculable<number>;
}

export interface APLResourceMapProps<T> {
  [key: string]: T;
}

export interface AnimateValueProps {
  from?: Calculable<number>;
  property: string;
  to: Calculable<number>;
}

export interface VideoSourceProps {
  audioTrack?: Calculable<AudioTrack>;
  autoplay?: Calculable<boolean>;
  muted?: Calculable<boolean>;
  onEnd?: Command<CommandModel, CommandProps>[];
  onPause?: Command<CommandModel, CommandProps>[];
  onPlay?: Command<CommandModel, CommandProps>[];
  onTimeUpdate?: Command<CommandModel, CommandProps>[];
  onTrackUpdate?: Command<CommandModel, CommandProps>[];
  onTrackReady?: Command<CommandModel, CommandProps>[];
  onTrackFail?: Command<CommandModel, CommandProps>[];
  scale?: Calculable<string>;
  source?: Calculable<Source>;
}

export interface TransformProps {
  /**
   * Rotation angle, in degrees. Positive angles rotate in the clockwise direction.
   */
  rotate?: Calculable<number>;
  /**
   * Uniform scaling in both X and Y.
   */
  scale?: Calculable<number>;
  /**
   * Scaling in the X direction (overrides “scale” if in same group).
   */
  scaleX?: Calculable<number>;
  /**
   * Scaling in the Y direction (overrides “scale” if in same group).
   */
  scaleY?: Calculable<number>;
  /**
   * Skew angle for the X-axis, in degrees. X-axis lines remain horizontal.
   */
  skewX?: Calculable<number>;
  /**
   * Skew angle for the Y-axis, in degrees. Y-axis lines remain vertical.
   */
  skewY?: Calculable<number>;
  /**
   * Distance to translate the object to the right.
   */
  translateX?: Calculable<Dimension>;
  /**
   * Distance to translate the object down.
   */
  translateY?: Calculable<Dimension>;
}

export interface TickHandlerProps {
  /**
   * Handlers to check on tick events.
   */
  commands: Command<CommandModel, CommandProps>[];
  /**
   * Optional description of this tick handler.
   */
  description?: string;
  /**
   * Minimum duration in milliseconds that must pass before this handler is invoked again.
   */
  minimumDelay?: Calculable<number>;
  /**
   * If true, invoke this handler.
   */
  when?: Calculable<string>;
}

export interface BindingProps {
  /**
   * The name to add to data-binding
   */
  name: Calculable<string>;
  /**
   * The value to add to data-binding. May be a data-bound expression
   */
  value: Calculable<unknown>;
  /**
   * The type of value to add to data-binding.
   */
  type?: BindingType;
}

export interface EntityProps {
  /**
   * The id of this entity
   */
  id: Calculable<string>;
  /**
   * The type of this entity
   */
  type: Calculable<string>;
  /**
   * The name of this entity
   */
  name: Calculable<string>;
  nameSynonyms?: string[];
  /**
   * The target slot name of this entity
   */
  targetSlotName?: Calculable<string>;
}

export interface ActionProps {
  /**
   * An array of commands to execute when this action is triggered
   */
  commands?: Command<CommandModel, CommandProps>[];
  /**
   * If true this action can be executed by the user
   */
  enabled?: Calculable<boolean>;
  /**
   * A localized description of this action for presentation to the user
   */
  label: Calculable<string>;
  /**
   * The name of the action to perform
   */
  name: Calculable<string>;
}

export interface KeyboardHandlerProps {
  when: Calculable<string>;
  commands: Command<CommandModel, CommandProps>[];
  description?: string;
  propagate?: Calculable<string>;
}

export interface AVGProps {
  data?: unknown;
  description?: string;
  height?: Calculable<Dimension>;
  items?: AVGProps[];
  parameters?: string[];
}

export interface AVGParameter {
  name?: string;
  description?: string;
  type?: string;
}

export interface DynamicTokenListProps {
  // "type": "dynamicTokenList",
  // listId: string;
  pageToken: string;
  backwardPageToken?: string;
  forwardPageToken?: string;
  items: unknown[];
  handler: IntentHandler<interfaces.alexa.presentation.apl.LoadTokenListDataEvent>;
}

export interface DynamicIndexListProps {
  // "type": "dynamicIndexList",
  // listId: string;
  startIndex: number;
  minimumInclusiveIndex?: number;
  maximumExclusiveIndex?: number;
  items: unknown[];
  handler: IntentHandler<interfaces.alexa.presentation.apl.LoadIndexListDataEvent>;
}

export interface Style {
  /**
   * A description of this style
   */
  description?: string;
  extends?: string[];
  values?: StyleBlock[] | Calculable<string>;
}
/**
 * This interface was referenced by `AplSchema`'s JSON-Schema
 * via the `definition` "StyleBlock".
 */
export interface StyleBlock {
  [k: string]: unknown;
}
