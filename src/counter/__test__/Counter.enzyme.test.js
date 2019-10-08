import { mount } from 'enzyme';
import React from 'react';
import Counter from '../Counter';

describe('Counter', () => {
    test('show "0" as default', () => {
        const wrapper = mount(<Counter />)
        expect(wrapper.find('p').text()).toBe('0')
    })
    test('count up when user clicks "+"', () => {
        const wrapper = mount(<Counter />)

        wrapper.find('button').at(0).simulate('click')

        expect(wrapper.find('p').text()).toBe('1')
    })
    test('count down when user click "-"', () => {
        const wrapper = mount(<Counter />)

        wrapper.find('button').at(1).simulate('click')

        expect(wrapper.find('p').text()).toBe('-1')
    })
});