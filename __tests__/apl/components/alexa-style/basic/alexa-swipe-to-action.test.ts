import { AlexaSwipeToAction, SendEventCommand } from '../../../../../lib/apl';
import { matchSnapshot } from '../../../../helper';
matchSnapshot(
  new AlexaSwipeToAction({
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
    ],
    onButtonsHidden: new SendEventCommand({
      uniqueId: 'unique',
      handler: (input) => {
        return input.responseBuilder.getResponse();
      }
    }),
    onButtonsShown: new SendEventCommand({
      uniqueId: 'unique',
      handler: (input) => {
        return input.responseBuilder.getResponse();
      }
    }),
    primaryAction: new SendEventCommand({
      uniqueId: 'unique',
      handler: (input) => {
        return input.responseBuilder.getResponse();
      }
    }),
    onSwipeDone: new SendEventCommand({
      uniqueId: 'unique',
      handler: (input) => {
        return input.responseBuilder.getResponse();
      }
    }),
    onSwipeMove: new SendEventCommand({
      uniqueId: 'unique',
      handler: (input) => {
        return input.responseBuilder.getResponse();
      }
    })
  }),
  8
);
