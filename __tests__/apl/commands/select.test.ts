import { SelectCommand, SendEventCommand } from '../../../lib/apl';
import { matchSnapshot } from '../../helper';
matchSnapshot(
  new SelectCommand({
    commands: [
      new SendEventCommand({
        handler: (input) => {
          return input.responseBuilder.getResponse();
        },
        uniqueId: 'uniqueId'
      })
    ],
    otherwise: [
      new SendEventCommand({
        handler: (input) => {
          return input.responseBuilder.getResponse();
        },
        uniqueId: 'uniqueId'
      })
    ]
  }),
  2
);
