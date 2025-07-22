import React, { useRef, useState, useEffect } from 'react';
import { Tooltip } from '@arco-design/web-react';
import styles from './style.module.less';

interface TextEllipsisProps {
  text?: string;
  lineStamp?: number;
  tooltip?: boolean;
  width?: string;
}

const TextEllipsis: React.FC<TextEllipsisProps> = ({
  text = '',
  lineStamp = 1,
  tooltip = true,
  width = '',
}) => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLSpanElement>(null);
  const [needTooltip, setNeedTooltip] = useState(false);

  useEffect(() => {
    const checkOverflow = () => {
      if (!wrapperRef.current || !textRef.current) return;

      if (lineStamp === 1) {
        setNeedTooltip(textRef.current.offsetWidth >= wrapperRef.current.offsetWidth);
      } else {
        setNeedTooltip(textRef.current.offsetHeight >= wrapperRef.current.offsetHeight);
      }
    };

    // 使用 setTimeout 确保 DOM 更新完成
    const timer = setTimeout(checkOverflow, 0);

    return () => clearTimeout(timer);
  }, [text, lineStamp]);

  const renderText = () => {
    return (
      <div
        ref={wrapperRef}
        className={`${styles.text} ${
          lineStamp === 1 ? styles['text-single'] : styles['text-multi']
        }`}
        style={{
          WebkitLineClamp: lineStamp,
          width,
        }}
        title={text}
      >
        <span ref={textRef}>{text}</span>
      </div>
    );
  };

  return tooltip && needTooltip ? <Tooltip content={text}>{renderText()}</Tooltip> : renderText();
};

export default TextEllipsis;
