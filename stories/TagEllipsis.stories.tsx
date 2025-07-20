import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { TagEllipsis } from '../components';

const meta: Meta<typeof TagEllipsis> = {
  title: 'Components/TagEllipsis',
  component: TagEllipsis,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    maxTag: {
      description: '最大显示标签数量，可以是数字或"responsive"',
      control: { type: 'text' },
    },
    children: {
      description: '标签元素数组',
      control: { type: 'object' },
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

// 示例标签组件
const Tag = ({ children, color = '#1890ff' }: { children: React.ReactNode; color?: string }) => (
  <span
    style={{
      display: 'inline-block',
      padding: '2px 8px',
      margin: '2px',
      backgroundColor: color,
      color: 'white',
      borderRadius: '4px',
      fontSize: '12px',
      whiteSpace: 'nowrap',
    }}
  >
    {children}
  </span>
);

// 创建示例标签数组
const createTags = (count: number) => {
  const colors = ['#1890ff', '#52c41a', '#faad14', '#f5222d', '#722ed1', '#13c2c2'];
  return Array.from({ length: count }, (_, index) => (
    <Tag key={index} color={colors[index % colors.length]}>
      标签{index + 1}
    </Tag>
  ));
};

export const BasicUsage: Story = {
  args: {
    maxTag: 3,
    children: createTags(6),
  },
};

export const ResponsiveMode: Story = {
  args: {
    maxTag: 'responsive',
    children: createTags(8),
  },
  render: (args) => (
    <div style={{ width: '200px', border: '1px solid #ccc', padding: '10px' }}>
      <p style={{ margin: '0 0 10px 0', fontSize: '14px' }}>容器宽度: 200px</p>
      <TagEllipsis maxTag="responsive" {...args} />
    </div>
  ),
};

export const MaxTagTwo: Story = {
  args: {
    maxTag: 2,
    children: createTags(5),
  },
};

export const MaxTagFive: Story = {
  args: {
    maxTag: 5,
    children: createTags(8),
  },
};

export const LongTagNames: Story = {
  args: {
    maxTag: 3,
    children: [
      <Tag key={1} color="#1890ff">
        很长的标签名称1
      </Tag>,
      <Tag key={2} color="#52c41a">
        超级长的标签名称2
      </Tag>,
      <Tag key={3} color="#faad14">
        非常非常长的标签名称3
      </Tag>,
      <Tag key={4} color="#f5222d">
        极其长的标签名称4
      </Tag>,
      <Tag key={5} color="#722ed1">
        标签5
      </Tag>,
    ],
  },
};

export const DifferentContainerSizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      <div>
        <h4 style={{ margin: '0 0 10px 0' }}>小容器 (150px)</h4>
        <div style={{ width: '150px', border: '1px solid #ccc', padding: '10px' }}>
          <TagEllipsis maxTag="responsive">{createTags(6)}</TagEllipsis>
        </div>
      </div>

      <div>
        <h4 style={{ margin: '0 0 10px 0' }}>中等容器 (250px)</h4>
        <div style={{ width: '250px', border: '1px solid #ccc', padding: '10px' }}>
          <TagEllipsis maxTag="responsive">{createTags(6)}</TagEllipsis>
        </div>
      </div>

      <div>
        <h4 style={{ margin: '0 0 10px 0' }}>大容器 (400px)</h4>
        <div style={{ width: '400px', border: '1px solid #ccc', padding: '10px' }}>
          <TagEllipsis maxTag="responsive">{createTags(6)}</TagEllipsis>
        </div>
      </div>
    </div>
  ),
};

export const CustomStyledTags: Story = {
  args: {
    maxTag: 4,
    children: [
      <span
        key={1}
        style={{
          display: 'inline-block',
          padding: '4px 12px',
          margin: '2px',
          backgroundColor: '#ff4d4f',
          color: 'white',
          borderRadius: '16px',
          fontSize: '12px',
          fontWeight: 'bold',
        }}
      >
        重要
      </span>,
      <span
        key={2}
        style={{
          display: 'inline-block',
          padding: '4px 12px',
          margin: '2px',
          backgroundColor: '#52c41a',
          color: 'white',
          borderRadius: '16px',
          fontSize: '12px',
          fontWeight: 'bold',
        }}
      >
        已完成
      </span>,
      <span
        key={3}
        style={{
          display: 'inline-block',
          padding: '4px 12px',
          margin: '2px',
          backgroundColor: '#faad14',
          color: 'white',
          borderRadius: '16px',
          fontSize: '12px',
          fontWeight: 'bold',
        }}
      >
        进行中
      </span>,
      <span
        key={4}
        style={{
          display: 'inline-block',
          padding: '4px 12px',
          margin: '2px',
          backgroundColor: '#722ed1',
          color: 'white',
          borderRadius: '16px',
          fontSize: '12px',
          fontWeight: 'bold',
        }}
      >
        待审核
      </span>,
      <span
        key={5}
        style={{
          display: 'inline-block',
          padding: '4px 12px',
          margin: '2px',
          backgroundColor: '#13c2c2',
          color: 'white',
          borderRadius: '16px',
          fontSize: '12px',
          fontWeight: 'bold',
        }}
      >
        已发布
      </span>,
      <span
        key={6}
        style={{
          display: 'inline-block',
          padding: '4px 12px',
          margin: '2px',
          backgroundColor: '#1890ff',
          color: 'white',
          borderRadius: '16px',
          fontSize: '12px',
          fontWeight: 'bold',
        }}
      >
        草稿
      </span>,
    ],
  },
};