import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Separator from '.';

describe('Separator', () => {
  test('Separator with default direction', () => {
    const wrapper = shallow(<Separator />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  test('Separator with vertical direction', () => {
    const wrapper = shallow(<Separator direction="vertical" />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
