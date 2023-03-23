import {
  ActionProps,
  APLActionableComponentProps,
  APLMultiChildComponentProps,
  KeyboardHandlerProps,
  TickHandlerProps,
  VideoSourceProps
} from './props';
import { Command, CommandModel, CommandProps } from '../commands';
import { APLBaseComponentModel, APLBaseComponentProps, APLComponent } from '../components';

export const convertActionListToRequestHandlers = (actions?: (ActionProps | undefined)[]) => {
  const handlers = actions
    ?.filter((action) => action !== undefined)
    .flatMap((action) => convertCommandListToRequestHandlers(action?.commands));
  return handlers ? handlers : [];
};

export const convertTickHandlerToRequestHandlers = (tickHandlers?: (TickHandlerProps | undefined)[]) => {
  const handlers = tickHandlers
    ?.filter((tickHandler) => tickHandler !== undefined)
    .flatMap((tickHandler) => convertCommandListToRequestHandlers(tickHandler!.commands));
  return handlers ? handlers : [];
};

export const convertKeyboardHandlerListToRequestHandlers = (handlers?: (KeyboardHandlerProps | undefined)[]) => {
  return handlers
    ? handlers.filter((handler) => handler !== undefined).flatMap((handler) => convertCommandListToRequestHandlers(handler!.commands))
    : [];
};

export const convertCommandListToRequestHandlers = (commands?: (Command<CommandModel, CommandProps> | undefined)[]) => {
  const handlers = commands?.flatMap((command?: Command<CommandModel, CommandProps>) => (command ? command.getRequestHandlers() : []));
  return handlers ? handlers : [];
};

export const convertComponentListToRequestHandlers = (components?: APLComponent<APLBaseComponentModel, APLBaseComponentProps>[]) => {
  const handlers = components?.flatMap((component: APLComponent<APLBaseComponentModel, APLBaseComponentProps>) => {
    return component.getRequestHandlers();
  });
  return handlers ? handlers : [];
};

export const convertMultiChildComponentPropsToRequestHandlers = (props: APLMultiChildComponentProps) => {
  const handlers = props.items.flatMap((component: APLComponent<APLBaseComponentModel, APLBaseComponentProps>) => {
    return component.getRequestHandlers();
  });
  return handlers ? handlers : [];
};

export const convertActionableComponentPropsToRequestHandlers = (props: APLActionableComponentProps) => {
  return [
    ...convertCommandListToRequestHandlers(props.onFocus),
    ...convertCommandListToRequestHandlers(props.onBlur),
    ...convertKeyboardHandlerListToRequestHandlers(props.handleKeyDown),
    ...convertKeyboardHandlerListToRequestHandlers(props.handleKeyUp)
  ];
};

export const convertVideoSourcePropsToRequestHandlers = (props?: VideoSourceProps) => {
  return [
    ...convertCommandListToRequestHandlers(props?.onEnd),
    ...convertCommandListToRequestHandlers(props?.onPause),
    ...convertCommandListToRequestHandlers(props?.onPlay),
    ...convertCommandListToRequestHandlers(props?.onTimeUpdate),
    ...convertCommandListToRequestHandlers(props?.onTrackUpdate),
    ...convertCommandListToRequestHandlers(props?.onTrackReady),
    ...convertCommandListToRequestHandlers(props?.onTrackFail)
  ];
};
