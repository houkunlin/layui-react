import classnames from 'classnames';
import React, { forwardRef, useMemo } from 'react';
import ButtonContainer from './ButtonContainer';
import ButtonGroup from './ButtonGroup';
import './styles.less';

export type ButtonSizeType = 'lg' | 'sm' | 'xs';

export type ButtonProps = {
  /**
   * @description 按钮类型
   */
  type?:
    | 'primary'
    | 'warm'
    | 'danger'
    | 'checked'
    | 'disabled'
    | 'normal'
    | 'link';
  /**
   * @description 按钮颜色
   */
  color?: 'blue' | 'orange' | 'red' | 'purple';
  /**
   * @description 按钮边框
   */
  border?: 'red' | 'orange' | 'green' | 'cyan' | 'blue' | 'purple' | 'black';
  /**
   * @description 按钮尺寸（大小）
   */
  size?: ButtonSizeType;
  /**
   * @description 将按钮宽度调整为其父宽度的选项
   */
  block?: boolean;
  /**
   * @description 圆角
   */
  radius?: boolean;
  /**
   * @description 跳转地址，仅 type === 'link'
   */
  href?: string;
  /**
   * @description 设置 button 原生的 type 值，可选值请参考 HTML 标准
   * @see https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/button HTML 标准
   */
  htmlType?: 'submit' | 'reset' | 'button';
  /**
   * @description 相当于 a 链接的 target 属性，href 存在时生效
   */
  target?: React.HTMLAttributeAnchorTarget;
} & Omit<
  React.ButtonHTMLAttributes<HTMLButtonElement | HTMLAnchorElement>,
  'type'
>;

/**
 * 按钮组件
 * @param props 组件参数
 * @constructor
 */
function InternalButton(props: ButtonProps) {
  const {
    className,
    type,
    color,
    border,
    size,
    block,
    radius,
    htmlType,
    children,
    ...restProps
  } = props;
  const _className = useMemo(() => {
    return classnames(
      'layui-btn',
      {
        [`layui-btn-${type}`]: type,
        [`layui-btn-${size}`]: size,
        [`layui-bg-${color}`]: color,
        [`layui-border-${border}`]: border,
        [`layui-btn-fluid`]: block,
        [`layui-btn-radius`]: radius,
      },
      className,
    );
  }, [className, type, color, border, size, block, radius]);

  if (type === 'link') {
    return (
      <a {...restProps} className={_className}>
        {children}
      </a>
    );
  }

  return (
    <button {...restProps} className={_className} type={htmlType ?? 'button'}>
      {children}
    </button>
  );
}

type CompoundedComponent = React.ForwardRefExoticComponent<
  ButtonProps & React.RefAttributes<HTMLElement>
> & {
  Group: typeof ButtonGroup;
  Container: typeof ButtonContainer;
  /** @internal */
  __LAYUI_BUTTON: boolean;
};

/**
 * 按钮组件
 */
export const Button = forwardRef<
  HTMLButtonElement | HTMLAnchorElement,
  ButtonProps
>(InternalButton) as CompoundedComponent;

Button.Group = ButtonGroup;
Button.Container = ButtonContainer;

export default Button;
