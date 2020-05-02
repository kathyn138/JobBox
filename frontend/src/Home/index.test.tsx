import React from 'react';
import { BrowserRouter } from "react-router-dom";
import { mount } from 'enzyme';
import Home from './Home';

it('can render the correct homepage when not logged in', function () {
  let wrapper = mount(<BrowserRouter><Home /></BrowserRouter>);

  expect(wrapper.html()).toContain('All the jobs in one, convenient place.');
});

