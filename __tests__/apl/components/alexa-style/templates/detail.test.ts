import { AlexaDetail, SendEventCommand } from '../../../../../lib/apl';
import { matchSnapshot } from '../../../../helper';
matchSnapshot(
  new AlexaDetail({
    button1PrimaryAction: new SendEventCommand({
      uniqueId: 'unique',
      handler: (input) => {
        return input.responseBuilder.getResponse();
      }
    }),
    button2PrimaryAction: new SendEventCommand({
      uniqueId: 'unique',
      handler: (input) => {
        return input.responseBuilder.getResponse();
      }
    }),
    headerBackButtonCommand: new SendEventCommand({
      uniqueId: 'unique',
      handler: (input) => {
        return input.responseBuilder.getResponse();
      }
    }),
    externalLinkButtonPrimaryAction: new SendEventCommand({
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
  7
);
