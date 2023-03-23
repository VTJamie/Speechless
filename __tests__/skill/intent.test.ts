import { Intent } from '../../lib/skill';
import { matchSnapshot } from '../helper';

matchSnapshot(
  new Intent({
    intentHandler: (input) => input.responseBuilder.getResponse(),
    intentName: 'testIntent',
    samples: ['read me a story']
  }),
  1
);
