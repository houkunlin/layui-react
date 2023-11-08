import classnames from 'classnames';
import React, { forwardRef, useMemo } from 'react';
import './styles.less';

export type AnimTypeName =
  | 'down'
  | 'up'
  | 'downbit'
  | 'upbit'
  | 'scale'
  | 'scaleSpring'
  | 'scalesmall'
  | 'scalesmall-spring'
  | 'fadein'
  | 'fadeout'
  | 'rotate';

export type AnimProps = React.HTMLAttributes<HTMLDivElement> & {
  type?: AnimTypeName;
  loop?: boolean;
};

function InternalAnim(props: AnimProps) {
  const { type, loop, className, ...restProps } = props;

  const _className = useMemo(() => {
    return classnames(
      'layui-anim',
      {
        [`layui-anim-${type}`]: type,
        [`layui-anim-loop`]: loop,
      },
      className,
    );
  }, [type, loop, className]);

  return <div {...restProps} className={_className} />;
}

export const Anim = forwardRef<HTMLDivElement, AnimProps>(InternalAnim);

export default Anim;
