import { ModelProvider } from '../..';
import { LabeledRequestHandler, RequestHandlerProvider } from '../../skill';

export interface GestureModel extends GestureProps {
  type?: string;
}

export interface GestureProps {}

export abstract class Gesture<T extends GestureModel, P extends GestureProps> implements RequestHandlerProvider, ModelProvider<T> {
  readonly type: string;
  readonly props: P;
  constructor(type: string, props: P) {
    this.props = props;
    this.type = type;
  }

  abstract componentSpecificRequestHandlers(): LabeledRequestHandler[];
  abstract componentSpecificModel(): T;

  model(): T {
    return {
      type: this.type,
      ...this.componentSpecificModel()
    };
  }

  toJSON(): T {
    return this.model();
  }

  getRequestHandlers(): LabeledRequestHandler[] {
    return [...this.componentSpecificRequestHandlers()];
  }
}
