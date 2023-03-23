import { SendEventCommand, SwipeAwayGesture } from '../../../lib/apl';
import { matchSnapshot } from '../../helper';

matchSnapshot(
  new SwipeAwayGesture({
    direction: 'left',
    onSwipeDone: [
      new SendEventCommand({
        uniqueId: 'unique',
        handler: (input) => {
          return input.responseBuilder.getResponse();
        }
      })
    ],
    onSwipeMove: [
      new SendEventCommand({
        uniqueId: 'unique',
        handler: (input) => {
          return input.responseBuilder.getResponse();
        }
      })
    ]
  }),
  2
);
