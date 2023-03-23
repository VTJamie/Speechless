import { SpeakListCommand } from '../../../lib/apl';
import { matchSnapshot } from '../../helper';
matchSnapshot(
  new SpeakListCommand({
    count: 3,
    start: 1
  })
);
