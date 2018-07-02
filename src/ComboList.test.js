import React from 'react';
import { shallow } from 'enzyme';
import ComboList from './ComboList';

describe('ComboList', () => {

    it('should have list of combos' , () => {

        //setup
        const expected = [
            {name: 'Combo1', type:'Veg',price:'Rs.100/-'},
            {name: 'Combo2', type:'Veg',price:'Rs.80/-'},
            {name: 'Combo3', type:'Veg',price:'Rs.60/-'},
        ];

        //exercise
        const wrapper = shallow(<ComboList menu= {expected}/>);

        //Assert
        expect(wrapper.find('li')).toHaveLength(3);
    });

});
