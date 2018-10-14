import React from 'react';
import { shallow } from 'enzyme';
import App from '../App';
import CommentBox from '../CommentBox';
import CommentList from '../CommentList';

let wrapped;

beforeEach(() => {
  wrapped = shallow(<App />)
})

it('show a comment box', () => {
  expect(wrapped.find(CommentBox).length).toBe(1)
});

it('show a comment list', () => {
  expect(wrapped.find(CommentList).length).toBe(1)
});