import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import toJson from 'enzyme-to-json';
import { faSquare } from '@fortawesome/free-regular-svg-icons';
import LinkIcon from './LinkIcon';

let wrapper: ShallowWrapper;

describe('RadioIcon', () => {
  beforeEach(() => {
    wrapper = shallow(<LinkIcon icon={faSquare} size="lg" href="#" />);
  });

  test('If it matches the snapshot', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
