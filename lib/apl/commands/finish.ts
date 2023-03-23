import { Command, CommandModel, CommandProps } from './command';
import { LabeledRequestHandler } from '../../skill/models';

export interface FinishCommandModel extends CommandModel {}
export interface FinishCommandProps extends CommandProps {}
export class FinishCommand extends Command<FinishCommandModel, FinishCommandProps> {
  constructor(props?: FinishCommandProps) {
    super('Finish', props ? props : {});
  }
  commandSpecificModel(): FinishCommandModel {
    return {};
  }

  commandSpecificRequestHandlers(): LabeledRequestHandler[] {
    return [];
  }
}
