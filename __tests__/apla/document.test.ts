import { APLADocument } from '../../lib/apla';
import { matchSnapshot } from '../helper';

matchSnapshot(
  new APLADocument({
    documentName: 'test-apla',
    items: []
  })
);
