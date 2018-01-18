import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import renderer from 'react-test-renderer';
import toJson from 'enzyme-to-json';
import { shallow } from 'enzyme';

describe('Component: App', () => {
  const messages = ['leboncoin', 'test', 'test technique'];

  it('should match its empty snapshot', () => {
    const tree = renderer.create(
      <App />
     ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('should add an messages based on the value in the state', () => {
      const component = shallow(<App />);
      const preventDefault = jest.fn();
      component.setState({
        messages
      });
      component.find('form').simulate('submit', { preventDefault });
      expect(toJson(component)).toMatchSnapshot();
      expect(preventDefault).toBeCalled();
    });

});
