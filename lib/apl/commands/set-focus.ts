import { Command, CommandModel, CommandProps } from './command';
import { LabeledRequestHandler } from '../../skill/models';

export interface SetFocusCommandModel extends CommandModel {
  componentId?: string;
}
export interface SetFocusCommandProps extends CommandProps {
  componentId?: string;
}
export class SetFocusCommand extends Command<SetFocusCommandModel, SetFocusCommandProps> {
  constructor(props: SetFocusCommandProps) {
    super('SetFocus', props);
  }
  commandSpecificModel(): SetFocusCommandModel {
    return {
      componentId: this.props.componentId
    };
  }

  commandSpecificRequestHandlers(): LabeledRequestHandler[] {
    return [];
  }
}
