import { Command, CommandModel, CommandProps } from './command';
import { LabeledRequestHandler } from '../../skill/models';
import { Calculable } from '../../types';
import { MediaControl } from '../interfaces';
export interface ControlMediaCommandModel extends CommandModel {
  command: Calculable<MediaControl>;
  componentId?: string;
  value?: Calculable<number>;
}
export interface ControlMediaCommandProps extends CommandProps {
  command: Calculable<MediaControl>;
  componentId?: string;
  value?: Calculable<number>;
}
export class ControlMediaCommand extends Command<ControlMediaCommandModel, ControlMediaCommandProps> {
  constructor(props: ControlMediaCommandProps) {
    super('ControlMedia', props);
  }
  commandSpecificModel(): ControlMediaCommandModel {
    return {
      command: this.props.command,
      componentId: this.props.componentId,
      value: this.props.value
    };
  }

  commandSpecificRequestHandlers(): LabeledRequestHandler[] {
    return [];
  }
}
