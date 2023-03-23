import { Command, CommandModel, CommandProps } from './command';
import { LabeledRequestHandler } from '../../skill/models';

export interface ClearFocusCommandModel extends CommandModel {}
export interface ClearFocusCommandProps extends CommandProps {}
export class ClearFocusCommand extends Command<ClearFocusCommandModel, ClearFocusCommandProps> {
  constructor(props: ClearFocusCommandProps) {
    super('ClearFocus', props);
  }
  commandSpecificModel(): ClearFocusCommandModel {
    return {};
  }
  commandSpecificRequestHandlers(): LabeledRequestHandler[] {
    return [];
  }
}
