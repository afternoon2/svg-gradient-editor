import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Theme from './Theme';

describe('Theme', () => {
  test('if it matches the snapshot', () => {
    const wrapper = shallow(<Theme />);

    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
