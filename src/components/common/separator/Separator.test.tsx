import React from 'react';
import Separator from '.';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

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
