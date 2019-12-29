import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import 'jest-styled-components';
import Text from './Text';

describe('Text', () => {
  test('If it matches the snapshot', () => {
    const wrapper = shallow(
      <Text size="small">Lorem non adipisicing amet exercitation ipsum id occaecat dolore occaecat.</Text>,
    );
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
