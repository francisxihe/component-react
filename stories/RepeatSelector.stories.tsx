import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import RepeatSelector from '../components/Repeat';
import {
  RepeatMode,
  RepeatEndMode,
  WeekDay,
  MonthlyType,
  YearlyType,
  TimeUnit,
  OrdinalDay,
  OrdinalDayType,
  Month,
} from 'francis-types-repeat';

import { RepeatModeForm, RepeatEndModeForm } from 'francis-types-repeat';
import dayjs from 'dayjs';

type StoryArgs = {
  lang: 'zh-CN' | 'en-US';
  value?: RepeatModeForm & RepeatEndModeForm;
  onChange?: (value: RepeatModeForm & RepeatEndModeForm) => void;
};

const meta: Meta<typeof RepeatSelector> = {
  title: 'Components/RepeatSelector',
  component: RepeatSelector,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    lang: {
      control: 'select',
      options: ['zh-CN', 'en-US'],
      description: '语言设置',
    },
    value: {
      control: 'object',
      description: '当前重复配置值',
    },
    onChange: {
      action: 'changed',
      description: '配置变更回调',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// 基本用法
const DefaultComponent = (args: StoryArgs) => {
  const [value, setValue] = useState<RepeatModeForm & RepeatEndModeForm>({
    repeatMode: RepeatMode.NONE,
    repeatEndMode: RepeatEndMode.FOREVER,
  });

  return (
    <div style={{ width: '400px' }}>
      <RepeatSelector
        {...args}
        value={value}
        onChange={(newValue) => {
          setValue(newValue);
          args.onChange?.(newValue);
        }}
      />
      <div
        style={{
          marginTop: '20px',
          padding: '10px',
          backgroundColor: '#f5f5f5',
          borderRadius: '4px',
        }}
      >
        <strong>当前配置:</strong>
        <pre style={{ fontSize: '12px', margin: '8px 0 0 0' }}>
          {JSON.stringify(value, null, 2)}
        </pre>
      </div>
    </div>
  );
};

export const Default: Story = {
  render: (args) => <DefaultComponent lang="zh-CN" {...args} />,
  args: {
    lang: 'zh-CN',
  },
};

// 每日重复
const DailyRepeatComponent = (args: StoryArgs) => {
  const [value, setValue] = useState<RepeatModeForm & RepeatEndModeForm>({
    repeatMode: RepeatMode.DAILY,
    repeatEndMode: RepeatEndMode.FOREVER,
  });

  return (
    <div style={{ width: '400px' }}>
      <RepeatSelector {...args} value={value} onChange={setValue} />
    </div>
  );
};

export const DailyRepeat: Story = {
  render: (args) => <DailyRepeatComponent lang="zh-CN" {...args} />,
  args: {
    lang: 'zh-CN',
  },
};

// 工作日重复
const WeekdaysRepeatComponent = (args: StoryArgs) => {
  const [value, setValue] = useState<RepeatModeForm & RepeatEndModeForm>({
    repeatMode: RepeatMode.WEEKDAYS,
    repeatEndMode: RepeatEndMode.FOREVER,
  });

  return (
    <div style={{ width: '400px' }}>
      <RepeatSelector {...args} value={value} onChange={setValue} />
    </div>
  );
};

export const WeekdaysRepeat: Story = {
  render: (args) => <WeekdaysRepeatComponent lang="zh-CN" {...args} {...args} />,
  args: {
    lang: 'zh-CN',
  },
};

// 自定义每周重复
const CustomWeeklyRepeatComponent = (args: StoryArgs) => {
  const [value, setValue] = useState<RepeatModeForm & RepeatEndModeForm>({
    repeatMode: RepeatMode.WEEKLY,
    repeatConfig: {
      weekdays: [WeekDay.MONDAY, WeekDay.WEDNESDAY, WeekDay.FRIDAY],
    },
    repeatEndMode: RepeatEndMode.FOREVER,
  });

  return (
    <div style={{ width: '400px' }}>
      <RepeatSelector {...args} value={value} onChange={setValue} />
    </div>
  );
};

export const CustomWeeklyRepeat: Story = {
  render: (args) => <CustomWeeklyRepeatComponent lang="zh-CN" {...args} {...args} />,
  args: {
    lang: 'zh-CN',
  },
};

// 每月重复 - 按日期
const MonthlyByDateComponent = (args: StoryArgs) => {
  const [value, setValue] = useState<RepeatModeForm & RepeatEndModeForm>({
    repeatMode: RepeatMode.MONTHLY,
    repeatConfig: {
      monthlyType: MonthlyType.DAY,
      [MonthlyType.DAY]: 15,
    },
    repeatEndMode: RepeatEndMode.FOREVER,
  });

  return (
    <div style={{ width: '400px' }}>
      <RepeatSelector {...args} value={value} onChange={setValue} />
    </div>
  );
};

export const MonthlyByDate: Story = {
  render: (args) => <MonthlyByDateComponent lang="zh-CN" {...args} {...args} />,
  args: {
    lang: 'zh-CN',
  },
};

// 每月重复 - 按序数日
const MonthlyByOrdinalComponent = (args: StoryArgs) => {
  const [value, setValue] = useState<RepeatModeForm & RepeatEndModeForm>({
    repeatMode: RepeatMode.MONTHLY,
    repeatConfig: {
      monthlyType: MonthlyType.ORDINAL_DAY,
      [MonthlyType.ORDINAL_DAY]: {
        ordinalDay: OrdinalDay.FIRST,
        ordinalDayType: OrdinalDayType.WORKDAY,
      },
    },
    repeatEndMode: RepeatEndMode.FOREVER,
  });

  return (
    <div style={{ width: '400px' }}>
      <RepeatSelector {...args} value={value} onChange={setValue} />
    </div>
  );
};

export const MonthlyByOrdinal: Story = {
  render: (args) => <MonthlyByOrdinalComponent lang="zh-CN" {...args} {...args} />,
  args: {
    lang: 'zh-CN',
  },
};

// 每年重复
const YearlyRepeatComponent = (args: StoryArgs) => {
  const [value, setValue] = useState<RepeatModeForm & RepeatEndModeForm>({
    repeatMode: RepeatMode.YEARLY,
    repeatConfig: {
      yearlyType: YearlyType.MONTH,
      month: {
        month: [Month.JANUARY, Month.JULY],
        monthlyType: MonthlyType.DAY,
        [MonthlyType.DAY]: 1,
      },
    },
    repeatEndMode: RepeatEndMode.FOREVER,
  });

  return (
    <div style={{ width: '400px' }}>
      <RepeatSelector {...args} value={value} onChange={setValue} />
    </div>
  );
};

export const YearlyRepeat: Story = {
  render: (args) => <YearlyRepeatComponent lang="zh-CN" {...args} />,
  args: {
    lang: 'zh-CN',
  },
};

// 自定义间隔重复
const CustomIntervalRepeatComponent = (args: StoryArgs) => {
  const [value, setValue] = useState<RepeatModeForm & RepeatEndModeForm>({
    repeatMode: RepeatMode.CUSTOM,
    repeatConfig: {
      interval: 3,
      intervalUnit: TimeUnit.WEEK,
      [TimeUnit.WEEK]: {
        weekdays: [WeekDay.MONDAY, WeekDay.WEDNESDAY],
      },
    },
    repeatEndMode: RepeatEndMode.FOREVER,
  });

  return (
    <div style={{ width: '400px' }}>
      <RepeatSelector {...args} value={value} onChange={setValue} />
    </div>
  );
};

export const CustomIntervalRepeat: Story = {
  render: (args) => <CustomIntervalRepeatComponent lang="zh-CN" {...args} />,
  args: {
    lang: 'zh-CN',
  },
};

// 带结束条件 - 次数限制
const WithCountLimitComponent = (args: StoryArgs) => {
  const [value, setValue] = useState<RepeatModeForm & RepeatEndModeForm>({
    repeatMode: RepeatMode.DAILY,
    repeatEndMode: RepeatEndMode.FOR_TIMES,
    repeatTimes: 10,
  });

  return (
    <div style={{ width: '400px' }}>
      <RepeatSelector {...args} value={value} onChange={setValue} />
    </div>
  );
};

export const WithCountLimit: Story = {
  render: (args) => <WithCountLimitComponent lang="zh-CN" {...args} />,
  args: {
    lang: 'zh-CN',
  },
};

// 带结束条件 - 日期限制
const WithDateLimitComponent = (args: StoryArgs) => {
  const [value, setValue] = useState<RepeatModeForm & RepeatEndModeForm>({
    repeatMode: RepeatMode.WEEKLY,
    repeatConfig: {
      weekdays: [WeekDay.MONDAY, WeekDay.FRIDAY],
    },
    repeatEndMode: RepeatEndMode.TO_DATE,
    repeatEndDate: dayjs('2024-12-31'),
  });

  return (
    <div style={{ width: '400px' }}>
      <RepeatSelector {...args} value={value} onChange={setValue} />
    </div>
  );
};

export const WithDateLimit: Story = {
  render: (args) => <WithDateLimitComponent lang="zh-CN" {...args} />,
  args: {
    lang: 'zh-CN',
  },
};

// 英文版本
const EnglishVersionComponent = (args: StoryArgs) => {
  const [value, setValue] = useState<RepeatModeForm & RepeatEndModeForm>({
    repeatMode: RepeatMode.WEEKLY,
    repeatConfig: {
      weekdays: [WeekDay.MONDAY, WeekDay.WEDNESDAY, WeekDay.FRIDAY],
    },
    repeatEndMode: RepeatEndMode.FOR_TIMES,
    repeatTimes: 5,
  });

  return (
    <div style={{ width: '400px' }}>
      <RepeatSelector {...args} value={value} onChange={setValue} />
    </div>
  );
};

export const EnglishVersion: Story = {
  render: (args) => <EnglishVersionComponent lang="zh-CN" {...args} />,
  args: {
    lang: 'en-US',
  },
};

// 单个重复模式组件
const RepeatModeItem = ({
  mode,
  label,
  args,
}: {
  mode: RepeatMode;
  label: string;
  args: StoryArgs;
}) => {
  const [value, setValue] = useState<RepeatModeForm & RepeatEndModeForm>({
    repeatMode: mode,
    repeatEndMode: RepeatEndMode.FOREVER,
  });

  return (
    <div style={{ border: '1px solid #e0e0e0', padding: '16px', borderRadius: '8px' }}>
      <h4 style={{ margin: '0 0 12px 0', color: '#333' }}>{label}</h4>
      <RepeatSelector {...args} value={value} onChange={setValue} />
    </div>
  );
};

// 所有重复模式展示
const AllRepeatModesComponent = (args: StoryArgs) => {
  const modes = [
    { mode: RepeatMode.NONE, label: '不重复' },
    { mode: RepeatMode.DAILY, label: '每日' },
    { mode: RepeatMode.WEEKDAYS, label: '工作日' },
    { mode: RepeatMode.WEEKEND, label: '周末' },
    { mode: RepeatMode.WORKDAYS, label: '工作日' },
    { mode: RepeatMode.REST_DAY, label: '休息日' },
  ];

  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        gap: '20px',
        width: '800px',
      }}
    >
      {modes.map(({ mode, label }) => (
        <RepeatModeItem key={mode} mode={mode} label={label} args={args} />
      ))}
    </div>
  );
};

export const AllRepeatModes: Story = {
  render: (args) => <AllRepeatModesComponent lang="zh-CN" {...args} />,
  args: {
    lang: 'zh-CN',
  },
};

// 交互式演示
const InteractiveComponent = (args: StoryArgs) => {
  const [value, setValue] = useState<RepeatModeForm & RepeatEndModeForm>({
    repeatMode: RepeatMode.NONE,
    repeatEndMode: RepeatEndMode.FOREVER,
  });

  return (
    <div style={{ width: '500px' }}>
      <div style={{ marginBottom: '20px' }}>
        <h3 style={{ margin: '0 0 16px 0' }}>重复模式选择器</h3>
        <p style={{ margin: '0 0 16px 0', color: '#666' }}>
          选择不同的重复模式，查看配置选项的变化
        </p>
      </div>

      <RepeatSelector
        {...args}
        value={value}
        onChange={(newValue) => {
          setValue(newValue);
          console.log('重复配置已更新:', newValue);
        }}
      />

      <div
        style={{
          marginTop: '24px',
          padding: '16px',
          backgroundColor: '#f8f9fa',
          borderRadius: '8px',
          border: '1px solid #e9ecef',
        }}
      >
        <h4 style={{ margin: '0 0 12px 0', fontSize: '14px', fontWeight: '600' }}>当前配置</h4>
        <pre
          style={{
            fontSize: '12px',
            margin: '0',
            lineHeight: '1.4',
            color: '#495057',
            overflow: 'auto',
          }}
        >
          {JSON.stringify(value, null, 2)}
        </pre>
      </div>
    </div>
  );
};

export const Interactive: Story = {
  render: (args) => <InteractiveComponent lang="zh-CN" {...args} />,
  args: {
    lang: 'zh-CN',
  },
};
