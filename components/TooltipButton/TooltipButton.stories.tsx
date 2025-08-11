import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import TooltipButton from './index';

const meta: Meta<typeof TooltipButton> = {
  title: 'Components/TooltipButton',
  component: TooltipButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    tooltip: {
      control: 'text',
      description: '提示内容',
    },
    placement: {
      control: 'select',
      options: [
        'top',
        'bottom',
        'left',
        'right',
        'topLeft',
        'topRight',
        'bottomLeft',
        'bottomRight',
        'leftTop',
        'leftBottom',
        'rightTop',
        'rightBottom',
      ],
      description: '提示位置',
    },
    type: {
      control: 'select',
      options: ['default', 'primary', 'secondary', 'dashed', 'text', 'outline'],
      description: '按钮类型',
    },
    size: {
      control: 'select',
      options: ['mini', 'small', 'default', 'large'],
      description: '按钮尺寸',
    },
    disabled: {
      control: 'boolean',
      description: '是否禁用',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    tooltip: '这是一个提示信息',
    children: '默认按钮',
  },
};

export const Positions: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
      <TooltipButton tooltip="顶部提示" placement="top">
        顶部
      </TooltipButton>
      <TooltipButton tooltip="底部提示" placement="bottom">
        底部
      </TooltipButton>
      <TooltipButton tooltip="左侧提示" placement="left">
        左侧
      </TooltipButton>
      <TooltipButton tooltip="右侧提示" placement="right">
        右侧
      </TooltipButton>
    </div>
  ),
};


export const LongText: Story = {
  args: {
    tooltip: '这是一个很长的提示信息，用来测试提示框在长文本情况下的显示效果',
    children: '长文本提示',
  },
};

export const NoTooltip: Story = {
  args: {
    children: '无提示按钮',
  },
};

export const Disabled: Story = {
  args: {
    tooltip: '这是一个禁用的按钮',
    disabled: true,
    children: '禁用按钮',
  },
};

export const DifferentSizes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
      <TooltipButton tooltip="迷你按钮" size="mini">
        迷你
      </TooltipButton>
      <TooltipButton tooltip="小按钮" size="small">
        小号
      </TooltipButton>
      <TooltipButton tooltip="默认按钮" size="default">
        默认
      </TooltipButton>
      <TooltipButton tooltip="大按钮" size="large">
        大号
      </TooltipButton>
    </div>
  ),
};

export const DifferentTypes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
      <TooltipButton tooltip="默认类型" type="default">
        默认
      </TooltipButton>
      <TooltipButton tooltip="主要类型" type="primary">
        主要
      </TooltipButton>
      <TooltipButton tooltip="次要类型" type="secondary">
        次要
      </TooltipButton>
      <TooltipButton tooltip="虚线类型" type="dashed">
        虚线
      </TooltipButton>
      <TooltipButton tooltip="文本类型" type="text">
        文本
      </TooltipButton>
      <TooltipButton tooltip="轮廓类型" type="outline">
        轮廓
      </TooltipButton>
    </div>
  ),
};