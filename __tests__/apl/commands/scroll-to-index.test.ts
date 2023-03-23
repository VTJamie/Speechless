import { ScrollToIndexCommand } from '../../../lib/apl';
import { matchSnapshot } from '../../helper';
matchSnapshot(
  new ScrollToIndexCommand({
    index: 1
  })
);
