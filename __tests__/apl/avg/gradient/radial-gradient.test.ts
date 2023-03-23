import { Color, RadialGradient } from '../../../../lib/apl';
import { matchSnapshot } from '../../../helper';
matchSnapshot(
  new RadialGradient({
    colorRange: [Color.expression('red'), Color.expression('${color}')],
    description: 'description',
    inputRange: [544, 344],
    centerX: 4,
    centerY: 5,
    radius: 4
  })
);
