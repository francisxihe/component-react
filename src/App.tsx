import React from 'react';
import { ContextMenu } from '../components';
import type { ContextMenuItem } from '../components/ContextMenu';
import './App.css';

const menuItems: ContextMenuItem[] = [
  {
    key: 'copy',
    label: '复制',
    onClick: () => alert('复制被点击'),
  },
  {
    key: 'paste',
    label: '粘贴',
    onClick: () => alert('粘贴被点击'),
  },
  {
    key: 'divider1',
    label: '',
    divider: true,
  },
  {
    key: 'delete',
    label: '删除',
    onClick: () => alert('删除被点击'),
    style: { color: 'red' },
  },
];

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>React Component Library with Vite</h1>
        <div className="demo-container">
          <h2>ContextMenu 组件演示</h2>
          <ContextMenu
            items={menuItems}
            onItemClick={(item) => alert(`Item clicked: ${item.key}`)}
            onVisibleChange={(visible) => alert(`Visible changed: ${visible}`)}
          >
            <div className="trigger-area">右键点击这里打开上下文菜单</div>
          </ContextMenu>
        </div>
      </header>
    </div>
  );
}

export default App;