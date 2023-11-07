import classnames from 'classnames';
import React, { forwardRef, useMemo } from 'react';
import './styles.less';

export type RowProps = {
  gutter?: number;
} & React.HTMLAttributes<HTMLDivElement>;

function InternalRow(props: RowProps) {
  const { gutter, ...restProps } = props;

  const _className = useMemo(() => {
    return classnames('layui-row', {
      [`layui-col-space${gutter}`]: gutter,
    });
  }, [gutter]);

  return <div {...restProps} className={_className} />;
}

export const Row = forwardRef<HTMLDivElement, RowProps>(InternalRow);

export default Row;
