import React from 'react';
import {shallow, mount} from '../../enzyme';

import App from '../app/App';
import Hook from '../withHooks/Hook';
describe("App test", () =>{
    it('renders App component', () =>{
        const wrapper = mount(<App/>);
        expect(wrapper.find(<Hook/>));
    });

    it('simulates click events', () =>{
        const wrapper = shallow(<App/>);
        const buttonHook = wrapper.find('.buttonHook');
        buttonHook.simulate('click');
    })
})