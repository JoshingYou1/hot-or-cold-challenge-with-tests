import React from 'react';
import {shallow, mount} from 'enzyme';

import Feedback from './feedback';

describe('<Feedback />', () => {
    it('Should render without crashing', () => {
        shallow(<Feedback />);
    });

    it(' =Should render feedback', () => {
        let TEST_FEEDBACK = 'Hi, I\'m feedback!';
    
        let wrapper = shallow(<Feedback feedback={TEST_FEEDBACK} />);
        expect(wrapper.contains(TEST_FEEDBACK)).toEqual(true);
    });
});