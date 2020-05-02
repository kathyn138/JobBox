import React from 'react';
import { BrowserRouter } from "react-router-dom";
import { mount } from 'enzyme';
import LoginContainer from './LoginContainer';

it('can render the correct component', function () {
  let wrapper = mount(<BrowserRouter><LoginContainer /></BrowserRouter>);

  expect(wrapper.html()).toContain('Username');
});

it('can call mock function on form submission', function() {
    let mockFn = jest.fn();
    let wrapper = mount(<BrowserRouter><LoginContainer getCurrentUser={mockFn}/></BrowserRouter>);
    wrapper.simulate('submit');
    expect(mockFn).toHaveBeenCalled();
})
