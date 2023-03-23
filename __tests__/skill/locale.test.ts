import { Intent, Locale } from '../../lib/skill';
import { matchSnapshot } from '../helper';
matchSnapshot(
  new Locale({
    invocationName: 'locale',
    locale: 'en-US'
  }).addCustomIntent(
    new Intent({
      intentName: 'test',
      intentHandler: (input) => input.responseBuilder.getResponse(),
      samples: ['']
    })
  ),
  6
);
