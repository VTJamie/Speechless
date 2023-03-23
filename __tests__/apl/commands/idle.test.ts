import { IdleCommand } from '../../../lib/apl';
import { matchSnapshot } from '../../helper';
matchSnapshot(
  new IdleCommand({
    delay: 1000
  })
);
