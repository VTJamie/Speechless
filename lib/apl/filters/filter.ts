import { ModelProvider } from '../../types';

export interface FilterModel {
  type?: string;
}
export interface FilterProps {}
export abstract class Filter<T extends FilterModel, P extends FilterProps> implements ModelProvider<T> {
  readonly type: string;
  readonly props: P;
  constructor(type: string, props: P) {
    this.type = type;
    this.props = props;
  }
  toJSON(): T {
    return this.model();
  }

  model(): T {
    return {
      type: this.type,
      ...this.componentSpecificModel()
    };
  }

  abstract componentSpecificModel(): T;
}
