import { SetPageCommand } from '../../../lib/apl';
import { matchSnapshot } from '../../helper';
matchSnapshot(
  new SetPageCommand({
    value: 3
  })
);
