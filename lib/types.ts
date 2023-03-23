export abstract class ModelProvider<T> {
  abstract model(): T;
  abstract toJSON(): T;
}

export type Calculable<A> = A | Expression;

export class Expression {
  private readonly expression: string;
  private constructor(expression: string) {
    this.expression = expression;
  }
  static val(expression: string) {
    return new Expression(expression);
  }

  toJSON(): string {
    return this.expression;
  }
}

export const e = (val: string): Expression => {
  return Expression.val(val);
};

export type LocaleString = 'en-US' | 'en-CA' | 'en-GB';

export type SpeechType = 'PlainText' | 'SSML';
