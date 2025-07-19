import * as React from 'react';
import { mount } from 'enzyme';
import mountTest from '../../../tests/mountTest';
import ContextMenu from '../index';

mountTest(ContextMenu);

describe('ContextMenu', () => {
  it('render button count correctly', () => {
    const component = mount(<ContextMenu />);

    expect(component.find('h3').text()).toBe('This is ContextMenu');
  });
});
