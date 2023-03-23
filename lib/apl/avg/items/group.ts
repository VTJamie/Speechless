import { AVGItem, AVGItemModel, AVGItemProps } from './item';
import { Calculable } from '../../../types';
import { TransformModel, TransformProps } from '../../interfaces';
export interface AVGGroupModel extends AVGItemModel {
  clipPath?: Calculable<string>;
  data?: unknown[];
  items?: AVGItem<AVGItemModel, AVGItemProps>[];
  /**
   * The opacity of the group.
   */
  opacity?: Calculable<number>;
  transform?: TransformModel;
  /**
   * Rotation angle of the group, in degrees.
   */
  rotation?: Calculable<number>;
  /**
   * X-coordinate of the rotation pivot point (viewport coordinates).
   */
  pivotX?: Calculable<number>;
  /**
   * Y-coordinate of the rotation pivot point (viewport coordinates).
   */
  pivotY?: Calculable<number>;
  /**
   * Scaling factor on the X-axis.
   */
  scaleX?: Calculable<number>;
  /**
   * Scaling factor on the Y-axis.
   */
  scaleY?: Calculable<number>;
  /**
   * X-coordinate translation (viewport coordinates)
   */
  translateX?: Calculable<number>;
  /**
   * Y-coordinate translation (viewport coordinates)
   */
  translateY?: Calculable<number>;
}

export interface AVGGroupProps extends AVGItemProps {
  clipPath?: Calculable<string>;
  data?: unknown[];
  items?: AVGItem<AVGItemModel, AVGItemProps>[];
  /**
   * The opacity of the group.
   */
  opacity?: Calculable<number>;
  transform?: TransformProps;
  /**
   * Rotation angle of the group, in degrees.
   */
  rotation?: Calculable<number>;
  /**
   * X-coordinate of the rotation pivot point (viewport coordinates).
   */
  pivotX?: Calculable<number>;
  /**
   * Y-coordinate of the rotation pivot point (viewport coordinates).
   */
  pivotY?: Calculable<number>;
  /**
   * Scaling factor on the X-axis.
   */
  scaleX?: Calculable<number>;
  /**
   * Scaling factor on the Y-axis.
   */
  scaleY?: Calculable<number>;
  /**
   * X-coordinate translation (viewport coordinates)
   */
  translateX?: Calculable<number>;
  /**
   * Y-coordinate translation (viewport coordinates)
   */
  translateY?: Calculable<number>;
}
export class AVGGroup extends AVGItem<AVGGroupModel, AVGGroupProps> {
  constructor(props: AVGGroupProps) {
    super('group', props);
  }

  commandSpecificModel(): AVGGroupModel {
    return {
      clipPath: this.props.clipPath,
      data: this.props.data,
      items: this.props.items,

      opacity: this.props.opacity,
      transform: this.props.transform,

      rotation: this.props.rotation,

      pivotX: this.props.pivotX,

      pivotY: this.props.pivotY,

      scaleX: this.props.scaleX,

      scaleY: this.props.scaleY,

      translateX: this.props.translateX,

      translateY: this.props.translateY
    };
  }
}
