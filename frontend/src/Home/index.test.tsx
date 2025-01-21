import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { mount } from 'enzyme';
import Home from './';

it('can render the correct homepage when not logged in', function () {
  let testProp = { user: { firstName: 'test' } };
  let wrapper = mount(
    <BrowserRouter>
      <Home user={testProp} />
    </BrowserRouter>
  );

  expect(wrapper.html()).toContain('All the jobs in one, convenient place.');
});
