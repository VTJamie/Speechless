import { Dimension } from './dimension';
import {
  ActionProps,
  AnimateValueProps,
  APLActionableComponentProps,
  APLContainerChildComponentProps,
  APLMultiChildComponentProps,
  APLResourceProps,
  BindingProps,
  EntityProps,
  ExportProps,
  ExtensionsProps,
  ImportProps,
  PatternProps,
  TickHandlerProps,
  VideoSourceProps
} from './props';
import { LayoutDirection } from './types';
import { Calculable } from '../../types';
import { Command, CommandModel, CommandProps } from '../commands';

export interface TransformModel {
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

export interface TickHandlerModel extends TickHandlerProps {}

export interface BindingModel extends BindingProps {}

export interface EntityModel extends EntityProps {}

export interface ActionModel extends ActionProps {}

export interface APLActionableComponentModel extends APLActionableComponentProps {}

export interface APLMultiChildComponentModel extends APLMultiChildComponentProps {}

export interface APLContainerChildComponentModel extends APLContainerChildComponentProps {}

export type Source =
  | {
      url: Calculable<string>;
      headers?: Calculable<string[]>;
      description?: string;
    }
  | string;

export interface ResourceModel {}

export interface DynamicTokenListModel {
  type: 'dynamicTokenList';
  listId: string;
  pageToken: string;
  backwardPageToken?: string;
  forwardPageToken?: string;
  items: unknown[];
}

export interface DynamicIndexListModel {
  type: 'dynamicIndexList';
  listId: string;
  startIndex: number;
  minimumInclusiveIndex?: number;
  maximumExclusiveIndex?: number;
  items: unknown[];
}

export interface ImportModel extends ImportProps {}

export interface UserDefinedCommandModel {
  parameters?: string[];
  command: Command<CommandModel, CommandProps>;
}

export interface ExtensionsModel extends ExtensionsProps {}

export interface UserDefinedCommandsModel {
  [name: string]: UserDefinedCommandModel;
}

export interface NameAndDescription {
  name: string;
  description?: string;
}

export interface ExportModel extends ExportProps {}

export interface APLResourceModel extends APLResourceProps {}

export interface PatternModel extends PatternProps {}

export interface APLResourceMapModel<T> {
  [key: string]: T;
}

export interface VideoSourceModel extends VideoSourceProps {}

export interface AnimateValueModel extends AnimateValueProps {}

export interface Environment {
  /**
   * Document level language.
   */
  lang?: string;
  /**
   * Document level layout direction.
   */
  layoutDirection?: LayoutDirection;
}

export interface KeyboardHandler {
  description?: string;
  propagate?: Calculable<string>;
  when: Calculable<string>;
  commands: Command<CommandModel, CommandProps>[];
}

export interface ResourceBlock {
  /**
   * Description of this resource block
   */
  description?: string;
  /**
   * Conditional definition.  If true, this resource block will be inflated
   */
  when?: Calculable<boolean>;
}
