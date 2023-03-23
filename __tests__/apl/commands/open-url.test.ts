import { OpenURLCommand, SendEventCommand } from '../../../lib/apl';
import { matchSnapshot } from '../../helper';
matchSnapshot(
  new OpenURLCommand({
    source: 'url',
    onFail: [
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
