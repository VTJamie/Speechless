import { ModelProvider } from '../../../types';
import { BindingModel, BindingProps } from '../../interfaces';

export interface AVGItemModel {
  type?: string;
  bind?: BindingModel[];
  description?: string;
  style?: string;
  when?: string;
}

export interface AVGItemProps {
  bind?: BindingProps[];
  description?: string;
  style?: string;
  when?: string;
}

export abstract class AVGItem<T extends AVGItemModel, P extends AVGItemProps> implements ModelProvider<T> {
  readonly props: P;
  readonly type: string;
  constructor(type: string, props: P) {
    this.props = props;
    this.type = type;
  }
  toJSON(): T {
    return this.model();
  }
  model(): T {
    return {
      ...this.commandSpecificModel(),
      type: this.type,
      bind: this.props.bind,
      description: this.props.description,
      style: this.props.style,
      when: this.props.when
    };
  }

  abstract commandSpecificModel(): T;
}
