import { DoublePressGesture, SendEventCommand } from '../../../lib/apl';
import { matchSnapshot } from '../../helper';

matchSnapshot(
  new DoublePressGesture({
    onDoublePress: [
      new SendEventCommand({
        uniqueId: 'unique',
        handler: (input) => {
          return input.responseBuilder.getResponse();
        }
      })
    ],
    onSinglePress: [
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
