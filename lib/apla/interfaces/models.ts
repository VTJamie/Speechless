import { APLAMultiChildComponentProps } from './props';
import { BindingType } from './types';

export interface APLAResourcesModel {
  description?: string;
  when?: string;
  booleans?: ResourceModel;
  numbers?: ResourceModel;
  strings?: ResourceModel;
}

export interface ResourceModel {
  [key: string]: boolean | number | null | undefined | string;
}

export interface BindingModel {
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

export interface APLAMultiChildComponentModel extends APLAMultiChildComponentProps {}
