import { AlexaHeadline, SendEventCommand } from '../../../../../lib/apl';
import { matchSnapshot } from '../../../../helper';
matchSnapshot(
  new AlexaHeadline({
    headerBackButtonCommand: new SendEventCommand({
      uniqueId: 'unique',
      handler: (input) => {
        return input.responseBuilder.getResponse();
      }
    }),
    onCursorEnter: [
      new SendEventCommand({
        uniqueId: 'unique',
        handler: (input) => {
          return input.responseBuilder.getResponse();
        }
      })
    ],
    onCursorExit: [
      new SendEventCommand({
        uniqueId: 'unique',
        handler: (input) => {
          return input.responseBuilder.getResponse();
        }
      })
    ],
    onMount: [
      new SendEventCommand({
        uniqueId: 'unique',
        handler: (input) => {
          return input.responseBuilder.getResponse();
        }
      })
    ]
  }),
  4
);
