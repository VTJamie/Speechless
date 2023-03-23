import { Command, CommandModel, CommandProps } from './command';
import { LabeledRequestHandler } from '../../skill/models';
import { Calculable } from '../../types';
import { AudioTrack, Source } from '../interfaces';
export interface PlayMediaCommandModel extends CommandModel {
  audioTrack?: Calculable<AudioTrack>;
  componentId?: string;
  source: Calculable<Source>;
}
export interface PlayMediaCommandProps extends CommandProps {
  audioTrack?: Calculable<AudioTrack>;
  componentId?: string;
  source: Calculable<Source>;
}
export class PlayMediaCommand extends Command<PlayMediaCommandModel, PlayMediaCommandProps> {
  constructor(props: PlayMediaCommandProps) {
    super('PlayMedia', props);
  }
  commandSpecificModel(): PlayMediaCommandModel {
    return {
      audioTrack: this.props.audioTrack,
      componentId: this.props.componentId,
      source: this.props.source
    };
  }

  commandSpecificRequestHandlers(): LabeledRequestHandler[] {
    return [];
  }
}
