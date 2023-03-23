import { APLContainer, APLText, SendEventCommand } from '../../../../lib/apl';
import { matchSnapshot } from '../../../helper';
matchSnapshot(
  new APLContainer({
    items: [
      new APLText({
        text: 'placeholder',
        onCursorEnter: [
          new SendEventCommand({
            uniqueId: '1',
            handler: (input) => input.responseBuilder.getResponse()
          })
        ],
        onCursorExit: [
          new SendEventCommand({
            uniqueId: '1',
            handler: (input) => input.responseBuilder.getResponse()
          })
        ],
        onMount: [
          new SendEventCommand({
            uniqueId: '1',
            handler: (input) => input.responseBuilder.getResponse()
          })
        ]
      })
    ],
    onCursorEnter: [
      new SendEventCommand({
        uniqueId: '1',
        handler: (input) => input.responseBuilder.getResponse()
      })
    ],
    onCursorExit: [
      new SendEventCommand({
        uniqueId: '1',
        handler: (input) => input.responseBuilder.getResponse()
      })
    ],
    onMount: [
      new SendEventCommand({
        uniqueId: '1',
        handler: (input) => input.responseBuilder.getResponse()
      })
    ]
  }),
  6
);
