import { ModelProvider } from '../../../types';

export interface GradientModel {
  type?: string;
}
export interface GradientProps {}
export abstract class Gradient<T extends GradientModel, P extends GradientProps> implements ModelProvider<T> {
  readonly props: P;
  readonly type: string;
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
