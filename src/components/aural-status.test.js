import React from 'react';
import {shallow, mount} from 'enzyme';

import AuralStatus from './aural-status';

describe('<AuralStatus />', () => {
    it('Should render without crashing', () => {
        shallow(<AuralStatus />);
    });

    it('Should render an aural status update', () => {
        let TEST_STATUS = 'Hi, I\'m an aural status!';
        
        let wrapper = shallow(<AuralStatus auralStatus={TEST_STATUS} />);
        expect(wrapper.contains(TEST_STATUS)).toEqual(true);
      });
});