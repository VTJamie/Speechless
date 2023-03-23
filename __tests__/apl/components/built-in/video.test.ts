import { APLVideo, SendEventCommand } from '../../../../lib/apl';
import { matchSnapshot } from '../../../helper';
matchSnapshot(
  new APLVideo({
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
    onEnd: [
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
    onPause: [
      new SendEventCommand({
        uniqueId: '1',
        handler: (input) => input.responseBuilder.getResponse()
      })
    ],
    onPlay: [
      new SendEventCommand({
        uniqueId: '1',
        handler: (input) => input.responseBuilder.getResponse()
      })
    ],
    onTimeUpdate: [
      new SendEventCommand({
        uniqueId: '1',
        handler: (input) => input.responseBuilder.getResponse()
      })
    ],
    onTrackFail: [
      new SendEventCommand({
        uniqueId: '1',
        handler: (input) => input.responseBuilder.getResponse()
      })
    ],
    onTrackReady: [
      new SendEventCommand({
        uniqueId: '1',
        handler: (input) => input.responseBuilder.getResponse()
      })
    ],
    onTrackUpdate: [
      new SendEventCommand({
        uniqueId: '1',
        handler: (input) => input.responseBuilder.getResponse()
      })
    ]
  }),
  10
);
