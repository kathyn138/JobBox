import React from 'react';
import { mount } from 'enzyme';
import JobCard from './JobCard';

it('can render the correct apply button', function () {
  let jobDetails = {
    title: 'engineer',
    salary: '100k',
    equity: '20'
  };
  let mockFn = jest.fn();
  let wrapper = mount(<JobCard job={jobDetails} checkApplied={mockFn} />);

  expect(wrapper.html()).toContain('Apply');
});

it('can render the correct applied button', function () {
  let jobDetails = {
    title: 'engineer',
    salary: '100k',
    equity: '20'
  };
  let mockFn = jest.fn();
  mockFn.mockReturnValue(true);
  let wrapper = mount(<JobCard job={jobDetails} checkApplied={mockFn} />);

  expect(wrapper.html()).toContain('Applied');
});

it('can call mock function on clicking apply button', function () {
  let jobDetails = {
    title: 'engineer',
    salary: '100k',
    equity: '20'
  };
  let mockFn = jest.fn();
  let wrapper = mount(<JobCard job={jobDetails} applyToJob={mockFn}
    checkApplied={mockFn} />);
  wrapper.simulate('submit');
  expect(mockFn).toHaveBeenCalled();
})
