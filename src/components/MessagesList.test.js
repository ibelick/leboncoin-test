import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import renderer from 'react-test-renderer';
import MessagesList from './MessagesList';

it('should render a todo item ', () => {
  const tree = toJson(shallow(<MessagesList messages={[]} />));
  expect(tree).toMatchSnapshot();
});

it('should match its snapshot with messages', () => {
  const messages = ['leboncoin', 'test', 'test technique'];
  const tree = renderer.create(
    <MessagesList messages={messages} />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
