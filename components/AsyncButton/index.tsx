import React, { useState, useCallback } from 'react';
import { Button } from '@arco-design/web-react';
import type { ButtonProps } from '@arco-design/web-react';
import clsx from 'clsx';
import styles from './style.module.less';

export interface AsyncButtonProps extends Omit<ButtonProps, 'onClick' | 'loading'> {
  /** 异步点击事件处理函数 */
  onClick?: () => Promise<void> | void;
  /** 自定义加载状态 */
  loading?: boolean;
  /** 加载状态下的文本 */
  loadingText?: string;
}

/**
 * @title AsyncButton 异步按钮
 * @description 支持异步操作的按钮组件，在异步操作执行期间自动显示loading状态
 */
const AsyncButton: React.FC<AsyncButtonProps> = (props) => {
  const {
    onClick,
    loading: externalLoading,
    loadingText,
    children,
    disabled,
    className,
    ...restProps
  } = props;

  const [internalLoading, setInternalLoading] = useState(false);

  const handleClick = useCallback(async () => {
    if (!onClick || internalLoading || externalLoading) {
      return;
    }

    try {
      setInternalLoading(true);
      const result = onClick();

      // 检查是否返回Promise
      if (result && typeof result.then === 'function') {
        await result;
      }
    } catch (error) {
      console.error('AsyncButton onClick error:', error);
      throw error;
    } finally {
      setInternalLoading(false);
    }
  }, [onClick, internalLoading, externalLoading]);

  const isLoading = externalLoading || internalLoading;
  const buttonText = isLoading && loadingText ? loadingText : children;

  return (
    <Button
      {...restProps}
      className={clsx(styles['async-button'], className)}
      loading={isLoading}
      disabled={disabled || isLoading}
      onClick={handleClick}
    >
      {buttonText}
    </Button>
  );
};

export default AsyncButton;
