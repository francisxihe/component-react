import * as React from 'react';
import { mount } from 'enzyme';
import mountTest from '../../../tests/mountTest';
import TagEllipsis from '../index';

mountTest(TagEllipsis);

describe('TagEllipsis', () => {
  it('render button count correctly', () => {
    const component = mount(<TagEllipsis />);

    expect(component.find('h3').text()).toBe('This is TagEllipsis');
  });
});
