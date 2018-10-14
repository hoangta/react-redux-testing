import React from 'react';
import { mount } from 'enzyme';
import CommentBox from '../CommentBox';

let wrapped;

beforeEach(() => {
  wrapped = mount(<CommentBox />);
})

afterEach(() => {
  wrapped.unmount();
})

it('has a text area and a button', () => {
  expect(wrapped.find('textarea').length).toBe(1);
  expect(wrapped.find('button').length).toBe(1);
});

describe('the text area', () => {
  beforeEach(() => {
    wrapped.find('textarea').simulate('change', {
      target: { value: 'new comment' }
    });
    wrapped.update();
  })

  it('has a text area that user can type in', () => {
    expect(wrapped.find('textarea').prop('value')).toBe('new comment');
  });

  it('should empty text area when submit', () => {
    wrapped.find('form').simulate('submit')
    wrapped.update();
    expect(wrapped.find('textarea').prop('value')).toBe('');
  });
})