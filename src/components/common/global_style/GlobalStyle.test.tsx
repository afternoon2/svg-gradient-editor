import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import GlobalStyle from './index';

describe('<GlobalStyle />', () => {
  test('If it matches the snapshot', () => {
    const wrapper = shallow(<GlobalStyle />);

    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
