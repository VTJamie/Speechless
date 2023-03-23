import { APLASpeech } from '../../../lib/apla';
import { matchSnapshot } from '../../helper';

matchSnapshot(
  new APLASpeech({
    content: 'content of speech'
  })
);
