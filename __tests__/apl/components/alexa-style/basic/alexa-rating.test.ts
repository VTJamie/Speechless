import { AlexaRating, SendEventCommand } from '../../../../../lib/apl';
import { matchSnapshot } from '../../../../helper';
matchSnapshot(
  new AlexaRating({
    ratingNumber: 2,
    ratingText: 'rating',
    singleRatingGraphic: 'jj',
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
  3
);
