import { LongPressGesture, SendEventCommand } from '../../../lib/apl';
import { matchSnapshot } from '../../helper';

matchSnapshot(
  new LongPressGesture({
    onLongPressEnd: [
      new SendEventCommand({
        uniqueId: 'unique',
        handler: (input) => {
          return input.responseBuilder.getResponse();
        }
      })
    ],
    onLongPressStart: [
      new SendEventCommand({
        uniqueId: 'unique',
        handler: (input) => {
          return input.responseBuilder.getResponse();
        }
      })
    ]
  }),
  2
);
