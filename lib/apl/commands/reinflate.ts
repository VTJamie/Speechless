import { Command, CommandModel, CommandProps } from './command';
import { LabeledRequestHandler } from '../../skill/models';

export interface ReinflateCommandModel extends CommandModel {
  preservedSequencers?: string[];
}
export interface ReinflateCommandProps extends CommandProps {
  preservedSequencers?: string[];
}
export class ReinflateCommand extends Command<ReinflateCommandModel, ReinflateCommandProps> {
  constructor(props: ReinflateCommandProps) {
    super('Reinflate', props);
  }
  commandSpecificModel(): ReinflateCommandModel {
    return {
      preservedSequencers: this.props.preservedSequencers
    };
  }

  commandSpecificRequestHandlers(): LabeledRequestHandler[] {
    return [];
  }
}
