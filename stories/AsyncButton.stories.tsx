import type { Meta, StoryObj } from '@storybook/react';
import { Message } from '@arco-design/web-react';
import { AsyncButton } from '../components';

const meta: Meta<typeof AsyncButton> = {
  title: 'Components/AsyncButton',
  component: AsyncButton,
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
    status: {
      control: { type: 'select' },
      options: ['warning', 'danger', 'success', 'default'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// 模拟异步操作
const mockAsyncOperation = (delay = 2000) => {
  return new Promise<void>((resolve) => {
    setTimeout(() => {
      Message.success('操作成功！');
      resolve();
    }, delay);
  });
};

const mockAsyncError = () => {
  return new Promise<void>((_, reject) => {
    setTimeout(() => {
      Message.error('操作失败！');
      reject(new Error('模拟错误'));
    }, 1500);
  });
};

export const Default: Story = {
  args: {
    children: '异步按钮',
    onClick: () => mockAsyncOperation(),
  },
};

export const WithLoadingText: Story = {
  args: {
    children: '提交',
    loadingText: '提交中...',
    type: 'primary',
    onClick: () => mockAsyncOperation(3000),
  },
};

export const ErrorHandling: Story = {
  args: {
    children: '会出错的按钮',
    type: 'danger',
    onClick: () => mockAsyncError(),
  },
};

export const SyncOperation: Story = {
  args: {
    children: '同步操作',
    type: 'secondary',
    onClick: () => {
      Message.info('这是同步操作');
    },
  },
};

export const ExternalLoading: Story = {
  args: {
    children: '外部控制loading',
    loading: true,
    type: 'primary',
    onClick: () => mockAsyncOperation(),
  },
};

export const Disabled: Story = {
  args: {
    children: '禁用状态',
    disabled: true,
    onClick: () => mockAsyncOperation(),
  },
};
