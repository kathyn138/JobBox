import React from 'react';
import { mount } from 'enzyme';
import SearchBar from './SearchBar';

it('can render the correct component', function () {
  let wrapper = mount(<SearchBar />);

  expect(wrapper.html()).toContain('name="search"');
});

it('can correctly get new state from input', function () {
    let wrapper = mount(<SearchBar />);
    let input = wrapper.find('input');

    input.simulate('change', { target: {name: 'search', value: 'enzyme'}});
    expect(wrapper.state('search')).toEqual('enzyme');
});

it('can call mock function on form submission', function() {
    let mockFn = jest.fn();
    let wrapper = mount(<SearchBar search={mockFn} />);
    wrapper.simulate('submit');
    expect(mockFn).toHaveBeenCalled();
})
