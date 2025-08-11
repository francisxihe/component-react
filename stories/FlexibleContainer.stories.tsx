import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { FlexibleContainer } from '../components';

const { Fixed, Shrink } = FlexibleContainer;

const meta: Meta<typeof FlexibleContainer> = {
  title: 'Components/FlexibleContainer',
  component: FlexibleContainer,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    direction: {
      description: '容器方向',
      control: { type: 'select' },
      options: ['horizontal', 'vertical'],
    },
    className: {
      description: '自定义类名',
      control: { type: 'text' },
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

// 示例内容组件
const ExampleBox = ({
  children,
  color = '#e6f7ff',
}: {
  children: React.ReactNode;
  color?: string;
}) => (
  <div
    style={{
      padding: '20px',
      backgroundColor: color,
      border: '1px solid #91d5ff',
      borderRadius: '6px',
      textAlign: 'center',
      minHeight: '60px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }}
  >
    {children}
  </div>
);

export const HorizontalContainer: Story = {
  args: {
    direction: 'horizontal',
    style: { width: '600px', height: '200px', border: '2px dashed #ccc' },
    children: (
      <>
        <ExampleBox color="#fff2e8">左侧内容</ExampleBox>
        <ExampleBox color="#f6ffed">右侧内容</ExampleBox>
      </>
    ),
  },
};

export const VerticalContainer: Story = {
  args: {
    direction: 'vertical',
    style: { width: '300px', height: '400px', border: '2px dashed #ccc' },
    children: (
      <>
        <ExampleBox color="#fff2e8">顶部内容</ExampleBox>
        <ExampleBox color="#f6ffed">底部内容</ExampleBox>
      </>
    ),
  },
};

export const ContainerFixedExample: Story = {
  render: () => (
    <div style={{ width: '600px', height: '300px', border: '2px dashed #ccc' }}>
      <FlexibleContainer direction="horizontal">
        <Fixed style={{ width: '200px' }}>
          <ExampleBox color="#fff1f0">固定宽度 200px</ExampleBox>
        </Fixed>
        <Shrink>
          <ExampleBox color="#f6ffed">自适应剩余空间</ExampleBox>
        </Shrink>
      </FlexibleContainer>
    </div>
  ),
};

export const ContainerShrinkExample: Story = {
  render: () => (
    <div style={{ width: '600px', height: '300px', border: '2px dashed #ccc' }}>
      <FlexibleContainer direction="vertical">
        <Shrink style={{ height: '100px' }}>
          <ExampleBox color="#f6ffed">可收缩容器</ExampleBox>
        </Shrink>
        <Fixed>
          <ExampleBox color="#fff1f0">固定高度容器</ExampleBox>
        </Fixed>
      </FlexibleContainer>
    </div>
  ),
};

export const ContainerShrinkWithOverflow: Story = {
  render: () => (
    <div style={{ width: '400px', height: '200px', border: '2px dashed #ccc' }}>
      <Shrink absolute overflowY="auto">
        <div style={{ padding: '20px' }}>
          <ExampleBox color="#f6ffed">内容1</ExampleBox>
          <br />
          <ExampleBox color="#fff2e8">内容2</ExampleBox>
          <br />
          <ExampleBox color="#f0f5ff">内容3</ExampleBox>
          <br />
          <ExampleBox color="#fff7e6">内容4</ExampleBox>
          <br />
          <ExampleBox color="#f9f0ff">内容5</ExampleBox>
        </div>
      </Shrink>
    </div>
  ),
};

export const ComplexLayout: Story = {
  render: () => (
    <div style={{ width: '800px', height: '500px', border: '2px dashed #ccc' }}>
      <FlexibleContainer direction="vertical">
        <Fixed style={{ height: '60px' }}>
          <ExampleBox color="#fff1f0">顶部导航栏</ExampleBox>
        </Fixed>
        <Shrink>
          <FlexibleContainer direction="horizontal">
            <Fixed style={{ width: '200px' }}>
              <ExampleBox color="#f6ffed">侧边栏</ExampleBox>
            </Fixed>
            <Shrink>
              <ExampleBox color="#f0f5ff">主要内容区域</ExampleBox>
            </Shrink>
          </FlexibleContainer>
        </Shrink>
        <Fixed style={{ height: '40px' }}>
          <ExampleBox color="#fff7e6">底部状态栏</ExampleBox>
        </Fixed>
      </FlexibleContainer>
    </div>
  ),
};
