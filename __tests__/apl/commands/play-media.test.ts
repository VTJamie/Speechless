import { PlayMediaCommand } from '../../../lib/apl';
import { matchSnapshot } from '../../helper';
matchSnapshot(
  new PlayMediaCommand({
    source: {
      url: ''
    }
  })
);
