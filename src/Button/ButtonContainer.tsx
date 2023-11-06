import classnames from 'classnames';
import React, { forwardRef, useMemo } from 'react';

export type ButtonContainerProps = React.HTMLAttributes<HTMLDivElement>;

function InternalButtonContainer(props: Readonly<ButtonContainerProps>) {
  const { children, className, ...restProps } = props;

  const _className = useMemo(() => {
    return classnames('layui-btn-container', className);
  }, [className]);

  return (
    <div {...restProps} className={_className}>
      {children}
    </div>
  );
}

export const ButtonContainer = forwardRef<HTMLDivElement, ButtonContainerProps>(
  InternalButtonContainer,
);

export default ButtonContainer;
