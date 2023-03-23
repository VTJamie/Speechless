import { Calculable, ModelProvider } from '../..';
import { BindingModel, BindingProps } from '../interfaces';

export interface APLABaseComponentModel {
  bind?: BindingModel[];
  description?: string;
  // duration?: string;
  id?: string;
  type?: string;
  when?: Calculable<string>;
}

export interface APLABaseComponentProps {
  bind?: BindingProps[];
  description?: string;
  // duration?: string;
  id?: string;
  when?: Calculable<string>;
}

export abstract class APLAComponent<T extends APLABaseComponentModel, P extends APLABaseComponentProps> implements ModelProvider<T> {
  readonly type: string;
  readonly props: P;
  protected constructor(type: string, props: P) {
    this.type = type;
    this.props = props;
  }
  toJSON(): T {
    return this.model();
  }

  // abstract componentSpecificRequestHandlers(): LabeledRequestHandler[];
  abstract componentSpecificModel(): T;

  model(): T {
    return {
      ...this.convertBaseComponentPropsToModel(),
      ...this.componentSpecificModel()
    };
  }

  private convertBaseComponentPropsToModel = (): APLABaseComponentModel => {
    return {
      type: this.type
    };
  };
}
