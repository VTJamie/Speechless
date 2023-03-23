import { APLGridSequence, APLText, SendEventCommand } from '../../../../lib/apl';
import { matchSnapshot } from '../../../helper';
matchSnapshot(
  new APLGridSequence({
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
    numbered: true,
    onBlur: [
      new SendEventCommand({
        uniqueId: '1',
        handler: (input) => input.responseBuilder.getResponse()
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
    onFocus: [
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
    ],
    onScroll: [
      new SendEventCommand({
        uniqueId: '1',
        handler: (input) => input.responseBuilder.getResponse()
      })
    ]
  }),
  9
);
