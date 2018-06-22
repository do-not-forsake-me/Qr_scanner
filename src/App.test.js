
import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';

import App from './App';

it('renders without crashing', () => {
    const appWrapper = shallow(<App />);
});

it('should have a allstate logo',() => {
    //setup
    const wrapper = shallow(<App />);

    //assert
    expect(wrapper.find('img')).toHaveLength(1);
    expect(wrapper.find('img').prop('src')).toEqual('allstatelogo.jpg');

})