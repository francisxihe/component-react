import React from 'react';
import TextEllipsis from '..';

const BasicDemo: React.FC = () => {
  return (
    <div style={{ padding: '20px' }}>
      <h3>基础用法</h3>

      <div style={{ marginBottom: '20px' }}>
        <h4>单行省略</h4>
        <div style={{ width: '200px', border: '1px solid #ccc', padding: '8px' }}>
          <TextEllipsis text="这是一段很长的文本，超出容器宽度时会显示省略号" />
        </div>
      </div>

      <div style={{ marginBottom: '20px' }}>
        <h4>多行省略（2行）</h4>
        <div style={{ width: '200px', border: '1px solid #ccc', padding: '8px' }}>
          <TextEllipsis
            text="这是一段很长的文本，当内容超过指定行数时会显示省略号。这个示例展示了多行文本的省略效果。"
            lineStamp={2}
          />
        </div>
      </div>

      <div style={{ marginBottom: '20px' }}>
        <h4>禁用 Tooltip</h4>
        <div style={{ width: '200px', border: '1px solid #ccc', padding: '8px' }}>
          <TextEllipsis text="这段文本禁用了tooltip，鼠标悬停不会显示完整内容" tooltip={false} />
        </div>
      </div>

      <div style={{ marginBottom: '20px' }}>
        <h4>自定义宽度</h4>
        <TextEllipsis text="这段文本使用了自定义宽度300px" width="300px" />
      </div>
    </div>
  );
};

export default BasicDemo;
