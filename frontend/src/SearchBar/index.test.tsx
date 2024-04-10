import React from 'react';
import { mount } from 'enzyme';
import SearchBar from './';

let mockFn = jest.fn();

it('can render the correct component', function () {
  let wrapper = mount(<SearchBar search={mockFn} />);

  expect(wrapper.html()).toContain('name="search"');
});

it('can correctly get new state from input', function () {
  let wrapper = mount(<SearchBar search={mockFn} />);
  let input = wrapper.find('input');

  input.simulate('change', { target: { name: 'search', value: 'enzyme' } });
  expect(wrapper.state('search')).toEqual('enzyme');
});

it('can call mock function on form submission', function () {
  let wrapper = mount(<SearchBar search={mockFn} />);
  wrapper.simulate('submit');
  expect(mockFn).toHaveBeenCalled();
});
