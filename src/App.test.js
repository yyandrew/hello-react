import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { shallow } from 'enzyme';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});

it('render a label', () => {
  const wrapper = shallow(
    <label>andrew</label>
  )
  expect(wrapper).toMatchSnapshot()
})
