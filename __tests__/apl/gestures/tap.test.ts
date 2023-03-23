import { SendEventCommand, TapGesture } from '../../../lib/apl';
import { matchSnapshot } from '../../helper';

matchSnapshot(
  new TapGesture({
    onTap: [
      new SendEventCommand({
        uniqueId: 'unique',
        handler: (input) => {
          return input.responseBuilder.getResponse();
        }
      })
    ]
  }),
  1
);
