import { APLAMultiChildComponentModel } from './models';
import { APLAMultiChildComponentProps } from './props';

export const convertAPLAMultiChildComponentPropsToModel = (
  props?: APLAMultiChildComponentProps
): APLAMultiChildComponentModel | undefined => {
  return props
    ? {
        data: props.data,
        items: props.items
      }
    : undefined;
};
