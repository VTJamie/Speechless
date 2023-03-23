import { ControlMediaCommand } from '../../../lib/apl';
import { matchSnapshot } from '../../helper';
matchSnapshot(
  new ControlMediaCommand({
    command: 'next'
  })
);
