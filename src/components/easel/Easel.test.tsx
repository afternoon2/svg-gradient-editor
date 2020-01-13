import React from 'react';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import 'jest-styled-components';
import Theme from 'components/common/theme';
import Easel from './Easel';

describe('Easel', () => {
  test('if it matches the snapshot', () => {
    const wrapper = mount(
      <Theme>
        <Easel width="1200px" height="2000px" background="pink" />
      </Theme>,
    );

    expect(toJson(wrapper)).toMatchSnapshot();
  });

  test('if it matches the snapshot with default settings', () => {
    const wrapper = mount(
      <Theme>
        <Easel />
      </Theme>,
    );

    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
