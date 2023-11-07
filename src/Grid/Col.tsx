import classnames from 'classnames';
import React, { forwardRef, useMemo } from 'react';
import './styles.less';

export type ColProps = {
  span?: number;
  xs?: number;
  sm?: number;
  md?: number;
  lg?: number;
  xl?: number;
} & React.HTMLAttributes<HTMLDivElement>;

function InternalCol(props: ColProps) {
  const { span, xs, sm, md, lg, xl, ...restProps } = props;

  const _className = useMemo(() => {
    return classnames('layui-col', {
      [`layui-col-xs${span}`]: span,
      [`layui-col-xs${xs}`]: xs,
      [`layui-col-sm${sm}`]: sm,
      [`layui-col-md${md}`]: md,
      [`layui-col-lg${lg}`]: lg,
      [`layui-col-xl${xl}`]: xl,
    });
  }, [span, xs, sm, md, lg, xl]);

  return <div {...restProps} className={_className} />;
}

export const Col = forwardRef<HTMLDivElement, ColProps>(InternalCol);

export default Col;
