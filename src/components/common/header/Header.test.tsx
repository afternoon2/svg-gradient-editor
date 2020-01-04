import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Header from './index';

describe('<Header />', () => {
  test('If it matches the snapshot', () => {
    const wrapper = shallow(<Header>Officia in non ut mollit</Header>);

    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
