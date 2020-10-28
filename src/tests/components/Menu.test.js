/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAtrr } from '../helpers';
import Menu from '../../components/menu';

describe('Menu Component', () => {
  describe('Component Renders', () => {
    let wrapper;
    beforeEach(() => {
      const props = {
        menu: {
          idMeal: 1,
          strMeal: 'Bakewell tart',
        },
      };
      wrapper = shallow(<Menu {...props} />);
    });

    it('should render without error', () => {
      const component = findByTestAtrr(wrapper, '.meal');
      expect(component.length).toBe(1);
    });

    it('Should render an image', () => {
      const image = findByTestAtrr(wrapper, '.img-container');
      expect(image.length).toBe(1);
    });

    it('Should render menu name', () => {
      const name = findByTestAtrr(wrapper, '.meal-footer');
      expect(name.length).toBe(1);
    });
  });
});
