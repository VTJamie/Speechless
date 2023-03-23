import { SetStateCommand } from '../../../lib/apl';
import { matchSnapshot } from '../../helper';
matchSnapshot(
  new SetStateCommand({
    state: 'checked',
    value: true
  })
);
