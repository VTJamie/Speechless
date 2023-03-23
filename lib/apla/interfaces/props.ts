import { BindingType } from './types';
import { APLABaseComponentModel, APLABaseComponentProps, APLAComponent } from '../components';

export interface APLAResourcesProps {
  description?: string;
  when?: string;
  booleans?: APLAResourceProps;
  numbers?: APLAResourceProps;
  strings?: APLAResourceProps;
}

export interface APLAResourceProps {
  [key: string]: boolean | number | null | undefined | string;
}

export interface CompositionProps {}

export interface BindingProps {
  /**
   * The name to add to data-binding
   */
  name: string;
  /**
   * The value to add to data-binding. May be a data-bound expression
   */
  value: string;
  /**
   * The type of value to add to data-binding.
   */
  type?: BindingType;
}

export interface APLAMultiChildComponentProps {
  data?: string[];
  items?: APLAComponent<APLABaseComponentModel, APLABaseComponentProps>[];
}
