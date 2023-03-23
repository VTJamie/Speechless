import { ModelProvider } from '../../types';

export class Color implements ModelProvider<string> {
  private readonly value: string;
  private constructor(value: string) {
    this.value = value;
  }
  toJSON(): string {
    return this.model();
  }

  model(): string {
    return this.value;
  }

  static expression(value: string) {
    return new Color(value);
  }

  static literal(value: string) {
    return Color.expression(value);
  }

  static hex(r: string, g: string, b: string, a?: string) {
    return new Color(`#${r}${g}${b}${a ? a : ''}`);
  }

  static rgba(r: number, g: number, b: number, a: number) {
    return new Color(`rgba(${r},${g},${b},${a}%)`);
  }
}
