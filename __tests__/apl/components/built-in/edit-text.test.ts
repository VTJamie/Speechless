import { APLEditText, SendEventCommand } from '../../../../lib/apl';
import { matchSnapshot } from '../../../helper';
matchSnapshot(
  new APLEditText({
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
    onSubmit: [
      new SendEventCommand({
        uniqueId: '1',
        handler: (input) => input.responseBuilder.getResponse()
      })
    ],
    onTextChange: [
      new SendEventCommand({
        uniqueId: '1',
        handler: (input) => input.responseBuilder.getResponse()
      })
    ]
  }),
  7
);
