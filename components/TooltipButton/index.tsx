import React from 'react';
import { Button, Tooltip } from '@arco-design/web-react';
import type { ButtonProps } from '@arco-design/web-react/es/Button';
import type { TooltipProps } from '@arco-design/web-react/es/Tooltip';
import styles from './style.module.less';

export interface TooltipButtonProps extends Omit<ButtonProps, 'children'> {
  /** 提示内容 */
  tooltip?: string;
  /** 提示位置 */
  placement?: TooltipProps['position'];
  /** 按钮内容 */
  children: React.ReactNode;
}

const TooltipButton: React.FC<TooltipButtonProps> = ({
  tooltip,
  placement = 'top',
  children,
  className,
  ...buttonProps
}) => {
  const buttonElement = (
    <Button className={`${styles['tooltip-button']} ${className || ''}`} {...buttonProps}>
      {children}
    </Button>
  );

  if (!tooltip) {
    return buttonElement;
  }

  return (
    <Tooltip content={tooltip} position={placement}>
      {buttonElement}
    </Tooltip>
  );
};

export default TooltipButton;