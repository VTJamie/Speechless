import { APLPager, APLText, SendEventCommand } from '../../../../lib/apl';
import { matchSnapshot } from '../../../helper';
matchSnapshot(
  new APLPager({
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
            uniqueId: '2',
            handler: (input) => input.responseBuilder.getResponse()
          })
        ],
        onMount: [
          new SendEventCommand({
            uniqueId: '3',
            handler: (input) => input.responseBuilder.getResponse()
          })
        ]
      })
    ],
    onBlur: [
      new SendEventCommand({
        uniqueId: '4',
        handler: (input) => input.responseBuilder.getResponse()
      })
    ],
    onCursorEnter: [
      new SendEventCommand({
        uniqueId: '5',
        handler: (input) => input.responseBuilder.getResponse()
      })
    ],
    onCursorExit: [
      new SendEventCommand({
        uniqueId: '6',
        handler: (input) => input.responseBuilder.getResponse()
      })
    ],
    onFocus: [
      new SendEventCommand({
        uniqueId: '7',
        handler: (input) => input.responseBuilder.getResponse()
      })
    ],
    onMount: [
      new SendEventCommand({
        uniqueId: '8',
        handler: (input) => input.responseBuilder.getResponse()
      })
    ],
    onPageChanged: [
      new SendEventCommand({
        uniqueId: '9',
        handler: (input) => input.responseBuilder.getResponse()
      })
    ]
  }),
  9
);
