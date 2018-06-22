import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import ComboList from "./ComboList";

describe('App', () => {

    it('renders without crashing', () => {
        const appWrapper = shallow(<App />);
    });

    it('should have a allstate logo',() => {
        //setup
        const wrapper = shallow(<App />);

        //assert
        expect(wrapper.find('img')).toHaveLength(1);
        expect(wrapper.find('img').prop('src')).toEqual('allstatelogo.jpg');

    });

    it('should have list of combos' , () => {

        //setup
        const expected = [
            {name: 'Combo1', type:'Veg',price:100},
            {name: 'Combo2', type:'Veg',price:70},
            {name: 'Combo3', type:'Veg',price:50},
        ];

        //exercise
        const wrapper = shallow(<ComboList menu = {expected} />);

        //Assert
        expect(wrapper.find('li')).toHaveLength(3);

    });

});
