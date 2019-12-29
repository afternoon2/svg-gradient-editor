import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import toJson from 'enzyme-to-json';
import { faSquare } from '@fortawesome/free-regular-svg-icons';
import IconRadio from './IconRadio';

let wrapper: ShallowWrapper;
let listener: jest.Mock;

describe('IconRadio', () => {
  beforeEach(() => {
    listener = jest.fn();
    wrapper = shallow(
      <IconRadio id="id" name="name" icon={faSquare} onChange={listener} checked={false} value="icon-radio" />,
    );
  });
  test('If it matches the snapshot', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  test('If it fires event listener on change', () => {
    const radio = wrapper.find('[type="radio"]');
    radio.simulate('change');
    expect(listener).toHaveBeenCalledTimes(1);
  });
});
