import { AVGPath, Color, LinearGradient } from '../../../../lib/apl';
import { matchSnapshot } from '../../../helper';

matchSnapshot(
  new AVGPath({
    pathData: 'pathdata',
    fill: new LinearGradient({
      colorRange: [Color.hex('FF', 'FF', 'FF', 'AA')]
    }),
    bind: [
      {
        name: 'avalue',
        value: 'thevalue'
      }
    ],
    description: 'description',
    fillOpacity: 4,
    fillTransform: 'placeholder',
    pathLength: 4,
    stroke: new LinearGradient({
      colorRange: [Color.rgba(1, 2, 3, 4), Color.hex('FF', 'EE', 'CC')]
    }),
    strokeDashArray: [4],
    strokeDashOffset: 6,
    strokeLineCap: 'butt',
    strokeLineJoin: 'bevel',
    strokeMiterLimit: 4,
    strokeOpacity: 5,
    strokeTransform: 'placeholder',
    strokeWidth: 6,
    style: 'style',
    when: 'when'
  })
);
