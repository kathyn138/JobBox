import React from 'react';
import { mount } from 'enzyme';
import CompanyList from './CompanyList';

it('can render the correct component', function () {
  let wrapper = mount(<CompanyList />);

  expect(wrapper.html()).toContain("Companies");
});
