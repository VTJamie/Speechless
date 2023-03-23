import { SendEventCommand, SequentialCommand } from '../../../lib/apl';
import { matchSnapshot } from '../../helper';
matchSnapshot(
  new SequentialCommand({
    commands: [
      new SendEventCommand({
        handler: (input) => {
          return input.responseBuilder.getResponse();
        },
        uniqueId: 'uniqueId'
      })
    ],
    catch: [
      new SendEventCommand({
        handler: (input) => {
          return input.responseBuilder.getResponse();
        },
        uniqueId: 'uniqueId'
      })
    ],
    finally: [
      new SendEventCommand({
        handler: (input) => {
          return input.responseBuilder.getResponse();
        },
        uniqueId: 'uniqueId'
      })
    ]
  }),
  3
);
