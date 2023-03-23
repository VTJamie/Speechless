import { e } from '../../../../lib';
import { Color, LinearGradient } from '../../../../lib/apl';
import { matchSnapshot } from '../../../helper';

matchSnapshot(
  new LinearGradient({
    colorRange: [Color.rgba(235, 255, 133, 1), Color.expression('${color}')],
    description: 'description',
    inputRange: [544, 344],
    spreadMethod: e('${hmmm}'),
    units: 'boundingBox',
    x1: e('2'),
    x2: 3,
    y1: 4,
    y2: 5
  })
);
