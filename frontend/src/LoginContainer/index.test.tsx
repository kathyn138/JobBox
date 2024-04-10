import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { mount } from 'enzyme';
import LoginContainer from './';

const routeComponentPropsMock = {
  history: {} as any,
  location: {} as any,
  match: {} as any,
};

let mockFn = jest.fn();

it('can render the correct component', function () {
  let wrapper = mount(
    <BrowserRouter>
      <LoginContainer {...routeComponentPropsMock} getCurrentUser={mockFn} />
    </BrowserRouter>
  );

  expect(wrapper.html()).toContain('Username');
});

it('can call mock function on form submission', function () {
  let wrapper = mount(
    <BrowserRouter>
      <LoginContainer {...routeComponentPropsMock} getCurrentUser={mockFn} />
    </BrowserRouter>
  );
  wrapper.simulate('submit');
  expect(mockFn).toHaveBeenCalled();
});
