import { SendEventCommand } from '../../../lib/apl';
import { matchSnapshot } from '../../helper';
matchSnapshot(
  new SendEventCommand({
    handler: (input) => {
      return input.responseBuilder.getResponse();
    },
    uniqueId: 'uniqueId'
  }),
  1
);
