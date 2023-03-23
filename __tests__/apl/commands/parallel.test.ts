import { ParallelCommand, SendEventCommand } from '../../../lib/apl';
import { matchSnapshot } from '../../helper';
matchSnapshot(
  new ParallelCommand({
    commands: [
      new SendEventCommand({
        handler: (input) => {
          return input.responseBuilder.getResponse();
        },
        uniqueId: 'uniqueId'
      })
    ]
  }),
  1
);
