import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { TooltipButton } from '../components';

const meta: Meta<typeof TooltipButton> = {
  title: 'Components/TooltipButton',
  component: TooltipButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: { type: 'select' },
      options: ['default', 'primary', 'secondary', 'dashed', 'text', 'outline'],
    },
    size: {
      control: { type: 'select' },
      options: ['mini', 'small', 'default', 'large'],
    },
    placement: {
      control: { type: 'select' },
      options: ['top', 'bottom', 'left', 'right', 'tl', 'tr', 'bl', 'br'],
    },
    status: {
      control: { type: 'select' },
      options: ['warning', 'danger', 'success', 'default'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: '悬停显示提示',
    tooltip: '这是一个提示信息',
  },
};

export const TopPlacement: Story = {
  args: {
    children: '顶部提示',
    tooltip: '提示显示在顶部',
    placement: 'top',
    type: 'primary',
  },
};

export const BottomPlacement: Story = {
  args: {
    children: '底部提示',
    tooltip: '提示显示在底部',
    placement: 'bottom',
    type: 'secondary',
  },
};

export const LeftPlacement: Story = {
  args: {
    children: '左侧提示',
    tooltip: '提示显示在左侧',
    placement: 'left',
    type: 'outline',
  },
};

export const RightPlacement: Story = {
  args: {
    children: '右侧提示',
    tooltip: '提示显示在右侧',
    placement: 'right',
    type: 'dashed',
  },
};

export const LongTooltip: Story = {
  args: {
    children: '长文本提示',
    tooltip: '这是一个比较长的提示信息，用来测试tooltip的显示效果',
    placement: 'top',
  },
};

export const DifferentSizes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
      <TooltipButton size="mini" tooltip="Mini size button">
        Mini
      </TooltipButton>
      <TooltipButton size="small" tooltip="Small size button">
        Small
      </TooltipButton>
      <TooltipButton tooltip="Default size button">Default</TooltipButton>
      <TooltipButton size="large" tooltip="Large size button">
        Large
      </TooltipButton>
    </div>
  ),
};

export const NoTooltip: Story = {
  args: {
    children: '无提示按钮',
    type: 'text',
  },
};

export const DisabledButton: Story = {
  args: {
    children: '禁用按钮',
    tooltip: '这是禁用状态的按钮',
    disabled: true,
  },
};
