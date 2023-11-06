import classnames from 'classnames';
import React, { forwardRef, useMemo } from 'react';

export type ButtonGroupProps = React.HTMLAttributes<HTMLDivElement>;

export function InternalButtonGroup(props: Readonly<ButtonGroupProps>) {
  const { children, className, ...restProps } = props;

  const _className = useMemo(() => {
    return classnames('layui-btn-group', className);
  }, [className]);

  return (
    <div {...restProps} className={_className}>
      {children}
    </div>
  );
}

export const ButtonGroup = forwardRef<HTMLDivElement, ButtonGroupProps>(
  InternalButtonGroup,
);
export default ButtonGroup;
