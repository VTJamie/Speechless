import { e } from '../../../lib';
import { SetValueCommand } from '../../../lib/apl';
import { matchSnapshot } from '../../helper';
matchSnapshot(
  new SetValueCommand({
    property: 'thisproperty',
    value: e('new value')
  })
);
