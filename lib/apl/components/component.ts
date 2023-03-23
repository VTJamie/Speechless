import { Calculable, ModelProvider } from '../..';
import { LabeledRequestHandler, RequestHandlerProvider } from '../../skill';
import { Command, CommandModel, CommandProps } from '../commands';
import {
  ActionModel,
  ActionProps,
  APLActionableComponentModel,
  APLActionableComponentProps,
  APLContainerChildComponentModel,
  APLContainerChildComponentProps,
  APLMultiChildComponentModel,
  APLMultiChildComponentProps,
  BindingModel,
  BindingProps,
  Color,
  Dimension,
  DisplayMode,
  EntityModel,
  EntityProps,
  TickHandlerModel,
  TickHandlerProps,
  TransformModel,
  TransformProps
} from '../interfaces';
import {
  convertActionListToRequestHandlers,
  convertCommandListToRequestHandlers,
  convertTickHandlerToRequestHandlers
} from '../interfaces/helpers';

export interface APLBaseComponentModel extends APLContainerChildComponentModel {
  type?: string;
  id?: string;
  accessibilityLabel?: string;
  actions?: ActionModel[];
  bind?: BindingModel[];
  description?: string;
  checked?: Calculable<boolean>;
  disabled?: Calculable<boolean>;
  display?: Calculable<DisplayMode>;
  entities?: EntityModel[];
  handleTick?: TickHandlerModel[];
  height?: Calculable<Dimension>;
  width?: Calculable<Dimension>;
  inheritParentState?: Calculable<boolean>;
  layoutDirection?: Calculable<string>;
  maxHeight?: Calculable<Dimension>;
  maxWidth?: Calculable<Dimension>;
  minHeight?: Calculable<Dimension>;
  minWidth?: Calculable<Dimension>;
  onMount?: Command<CommandModel, CommandProps>[];
  onCursorEnter?: Command<CommandModel, CommandProps>[];
  onCursorExit?: Command<CommandModel, CommandProps>[];
  opacity?: Calculable<number | string>;
  padding?: Dimension[];
  paddingBottom?: Calculable<Dimension>;
  paddingEnd?: Calculable<Dimension>;
  paddingLeft?: Calculable<Dimension>;
  paddingRight?: Calculable<Dimension>;
  paddingStart?: Calculable<Dimension>;
  paddingTop?: Calculable<Dimension>;
  preserve?: string[];
  role?: Calculable<string>;
  shadowColor?: Calculable<Color>;
  shadowHorizontalOffset?: Calculable<Dimension>;
  shadowRadius?: Calculable<Dimension>;
  shadowVerticalOffset?: Calculable<Dimension>;
  style?: Calculable<string>;
  transform?: TransformModel[];
  when?: Calculable<string>;
}

export interface APLBaseComponentProps extends APLContainerChildComponentProps {
  id?: string;
  accessibilityLabel?: string;
  actions?: ActionProps[];
  bind?: BindingProps[];
  description?: string;
  checked?: Calculable<boolean>;
  disabled?: Calculable<boolean>;
  display?: Calculable<DisplayMode>;
  entities?: EntityProps[];
  handleTick?: TickHandlerProps[];
  height?: Calculable<Dimension>;
  width?: Calculable<Dimension>;
  inheritParentState?: Calculable<boolean>;
  layoutDirection?: Calculable<string>;
  maxHeight?: Calculable<Dimension>;
  maxWidth?: Calculable<Dimension>;
  minHeight?: Calculable<Dimension>;
  minWidth?: Calculable<Dimension>;
  onMount?: Command<CommandModel, CommandProps>[];
  onCursorEnter?: Command<CommandModel, CommandProps>[];
  onCursorExit?: Command<CommandModel, CommandProps>[];
  opacity?: number | Calculable<string>;
  padding?: Dimension[];
  paddingBottom?: Calculable<Dimension>;
  paddingEnd?: Calculable<Dimension>;
  paddingLeft?: Calculable<Dimension>;
  paddingRight?: Calculable<Dimension>;
  paddingStart?: Calculable<Dimension>;
  paddingTop?: Calculable<Dimension>;
  preserve?: string[];
  role?: Calculable<string>;
  shadowColor?: Calculable<Color>;
  shadowHorizontalOffset?: Calculable<Dimension>;
  shadowRadius?: Calculable<Dimension>;
  shadowVerticalOffset?: Calculable<Dimension>;
  style?: Calculable<string>;
  transform?: TransformProps[];
  when?: Calculable<string>;
  propertiesForContainerChildren?: APLContainerChildComponentProps;
}

export abstract class APLComponent<T extends APLBaseComponentModel, P extends APLBaseComponentProps>
  implements RequestHandlerProvider, ModelProvider<T>
{
  readonly type: string;
  readonly props: P;
  containerChildProperties?: APLContainerChildComponentProps;
  protected constructor(type: string, props: P) {
    this.type = type;
    this.props = props;
  }

  abstract componentSpecificRequestHandlers(): LabeledRequestHandler[];
  abstract componentSpecificModel(): T;

  model(): T & APLContainerChildComponentModel {
    return {
      ...this.convertBaseComponentPropsToModel(),
      type: this.type,
      ...this.componentSpecificModel()
    };
  }

  toJSON(): T {
    return this.model();
  }

  getRequestHandlers(): LabeledRequestHandler[] {
    return [...this.convertBaseComponentPropsToRequestHandlers(), ...this.componentSpecificRequestHandlers()];
  }

  private convertBaseComponentPropsToRequestHandlers() {
    return [
      ...convertCommandListToRequestHandlers(this.props.onMount),
      ...convertCommandListToRequestHandlers(this.props.onCursorEnter),
      ...convertCommandListToRequestHandlers(this.props.onCursorExit),
      ...convertActionListToRequestHandlers(this.props.actions),
      ...convertTickHandlerToRequestHandlers(this.props.handleTick)
    ];
  }

  private convertContainerChildComponentPropsToModel(props: APLContainerChildComponentProps): APLContainerChildComponentModel | undefined {
    return {
      alignSelf: props.alignSelf,
      bottom: props.bottom,
      end: props.end,
      grow: props.grow,
      left: props.left,
      numbering: props.numbering,
      position: props.position,
      right: props.right,
      shrink: props.shrink,
      spacing: props.spacing,
      start: props.start,
      top: props.top
    };
  }

  private convertBaseComponentPropsToModel = (): APLBaseComponentModel => {
    return {
      id: this.props.id,
      accessibilityLabel: this.props.accessibilityLabel,
      description: this.props.description,
      checked: this.props.checked,
      disabled: this.props.disabled,
      display: this.props.display,
      height: this.props.height,
      width: this.props.width,
      inheritParentState: this.props.inheritParentState,
      layoutDirection: this.props.layoutDirection,
      maxHeight: this.props.maxHeight,
      maxWidth: this.props.maxWidth,
      minHeight: this.props.minHeight,
      minWidth: this.props.minWidth,
      opacity: this.props.opacity,
      padding: this.props.padding,
      paddingBottom: this.props.paddingBottom,
      paddingEnd: this.props.paddingEnd,
      paddingLeft: this.props.paddingLeft,
      paddingRight: this.props.paddingRight,
      paddingStart: this.props.paddingStart,
      paddingTop: this.props.paddingTop,
      preserve: this.props.preserve,
      role: this.props.role,
      shadowColor: this.props.shadowColor,
      shadowHorizontalOffset: this.props.shadowHorizontalOffset,
      shadowRadius: this.props.shadowRadius,
      shadowVerticalOffset: this.props.shadowVerticalOffset,
      style: this.props.style,
      when: this.props.when,
      onMount: this.props.onMount,
      onCursorEnter: this.props.onCursorEnter,
      onCursorExit: this.props.onCursorExit,

      actions: this.props.actions,
      bind: this.props.bind,

      entities: this.props.entities,
      handleTick: this.props.handleTick,

      transform: this.props.transform,

      ...this.convertContainerChildComponentPropsToModel(this.props)
    };
  };

  protected convertActionableComponentPropsToModel(props: APLActionableComponentProps): APLActionableComponentModel {
    return {
      handleKeyDown: props.handleKeyDown,
      handleKeyUp: props.handleKeyUp,
      onFocus: props.onFocus,
      onBlur: props.onBlur
    };
  }

  protected convertMultiChildComponentPropsToModel(props: APLMultiChildComponentProps): APLMultiChildComponentModel {
    return {
      data: props.data,
      firstItem: props.firstItem,
      lastItem: props.lastItem,
      items: props.items
    };
  }
}
