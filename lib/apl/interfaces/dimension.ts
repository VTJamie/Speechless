import { ModelProvider } from '../../types';

export class Dimension implements ModelProvider<string> {
  private readonly value: string;
  private constructor(value: string) {
    this.value = value;
  }
  model(): string {
    return this.value;
  }

  static expression(value: string): Dimension {
    return new Dimension(value);
  }

  static literal(value: string): Dimension {
    return new Dimension(value);
  }

  static number(value: number): Dimension {
    return new Dimension(`${value}`);
  }

  static dp(value: number): Dimension {
    return new Dimension(`${value}dp`);
  }

  static px(value: number) {
    return new Dimension(`${value}px`);
  }

  static vh(value: number): Dimension {
    const adjustedValue = Math.max(0, Math.min(100, value));
    return new Dimension(`${adjustedValue}vh`);
  }

  static vw(value: number): Dimension {
    return new Dimension(`${value}vw`);
  }

  static percent(value: number): Dimension {
    return new Dimension(`${value}%`);
  }

  static auto(): Dimension {
    return new Dimension('auto');
  }

  toJSON(): string {
    return this.value;
  }
}
