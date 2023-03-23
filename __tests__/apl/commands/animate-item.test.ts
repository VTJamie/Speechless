import { AnimateItemCommand } from '../../../lib/apl';
import { matchSnapshot } from '../../helper';
matchSnapshot(
  new AnimateItemCommand({
    duration: 3,
    value: [
      {
        property: '',
        to: 3,
        from: 4
      }
    ],
    componentId: 'componentId'
  })
);
