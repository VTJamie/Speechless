import { AlexaTransportControls, SendEventCommand } from '../../../../../lib/apl';
import { matchSnapshot } from '../../../../helper';
matchSnapshot(
  new AlexaTransportControls({
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
    primaryControlPauseAction: new SendEventCommand({
      uniqueId: 'unique',
      handler: (input) => {
        return input.responseBuilder.getResponse();
      }
    }),
    primaryControlPlayAction: new SendEventCommand({
      uniqueId: 'unique',
      handler: (input) => {
        return input.responseBuilder.getResponse();
      }
    }),
    secondaryControlsLeftAction: new SendEventCommand({
      uniqueId: 'unique',
      handler: (input) => {
        return input.responseBuilder.getResponse();
      }
    }),
    secondaryControlsRightAction: new SendEventCommand({
      uniqueId: 'unique',
      handler: (input) => {
        return input.responseBuilder.getResponse();
      }
    })
  }),
  7
);
