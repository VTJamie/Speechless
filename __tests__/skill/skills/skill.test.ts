import { Locale, Skill } from '../../../lib/skill';
import { matchSnapshot } from '../../helper';
matchSnapshot(
  new Skill({
    name: 'TheBestSkill',
    custom: {
      endpoint: {
        uri: 'customendpoint'
      }
    }
  }).addLocale(
    new Locale({
      locale: 'en-US',
      invocationName: 'test'
    })
  ),
  5
);
