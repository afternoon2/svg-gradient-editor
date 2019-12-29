import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Heading from './Heading';

describe('Heading', () => {
  test('If it matches snapshot with invalid level prop', () => {
    const wrapper = shallow(<Heading level={7}>Duis reprehenderit amet</Heading>);

    expect(toJson(wrapper)).toMatchSnapshot();
  });

  test('If it matches snapshot with valid level prop', () => {
    const wrapper = shallow(<Heading level={3}>Duis reprehenderit amet</Heading>);

    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
