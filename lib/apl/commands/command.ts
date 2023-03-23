import { LabeledRequestHandler, RequestHandlerProvider } from '../../skill/models';
import { Calculable, ModelProvider } from '../../types';

export interface CommandModel {
  type?: string;
  description?: string;
  delay?: Calculable<number>;
  screenLock?: Calculable<boolean>;
  sequencer?: Calculable<string>;
  when?: Calculable<string>;
}

export interface CommandProps {
  description?: string;
  delay?: Calculable<number>;
  screenLock?: Calculable<boolean>;
  sequencer?: Calculable<string>;
  when?: Calculable<string>;
}

export abstract class Command<T extends CommandModel, P extends CommandProps> implements RequestHandlerProvider, ModelProvider<T> {
  readonly type: string;
  readonly props: P;
  constructor(type: string, props: P) {
    this.type = type;
    this.props = props;
  }
  toJSON(): T {
    return this.model();
  }

  abstract commandSpecificRequestHandlers(): LabeledRequestHandler[];
  abstract commandSpecificModel(): T;

  model(): T {
    return {
      ...this.convertCommandPropsToModel(),
      ...this.commandSpecificModel()
    };
  }

  getRequestHandlers(): LabeledRequestHandler[] {
    return [...this.commandSpecificRequestHandlers()];
  }

  convertCommandPropsToModel(): CommandModel {
    return {
      description: this.props.description,
      delay: this.props.delay,
      screenLock: this.props.screenLock,
      sequencer: this.props.sequencer,
      when: this.props.when,
      type: this.type
    };
  }
}
