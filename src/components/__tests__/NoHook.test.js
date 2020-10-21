import React from 'react';
import {shallow, mount} from '../../enzyme';
import NoHook from '../withoutHooks/NoHook';

describe("NoHook Test ", () => {
    it('Input test', ()=>{
        const wrapper = mount(<NoHook/>);
        const button = wrapper.find('.button');
        const input = wrapper.find('.inputText');
        input.simulate('change', { target: { value: 'Todo 1' } })
        button.simulate('click');
        expect(wrapper.find(todos)).to.have.lengthOf(1);
    })
})