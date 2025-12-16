import { RepeatProvider } from './context';
import { LocaleProvider } from './useLocale';
import { RepeatSelectorMain } from './RepeatMain';
import { RepeatModeForm, RepeatEndModeForm } from 'francis-types-repeat';
import './style.css';

export * from 'francis-types-repeat';

export default function RepeatSelector(props: {
  lang: 'en-US' | 'zh-CN';
  value: RepeatModeForm & RepeatEndModeForm;
  onChange: (value: RepeatModeForm & RepeatEndModeForm) => void;
}) {
  const { lang } = props;

  const value = props.value ? props.value : undefined;

  return (
    <LocaleProvider lang={lang}>
      <RepeatProvider
        value={value}
        onChange={(_value) => {
          props.onChange(_value);
        }}
      >
        <RepeatSelectorMain />
      </RepeatProvider>
    </LocaleProvider>
  );
}
