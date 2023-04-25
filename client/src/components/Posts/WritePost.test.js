import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import WritePost from './WritePost';

describe('WritePost', () => {
  test('renders textarea element with placeholder text', () => {
    const writtenPost = React.createRef();
    render(<WritePost ref={writtenPost} />);
    const textareaElement = screen.getByPlaceholderText('Enter your text here');
    expect(textareaElement).toBeInTheDocument();
  });

  test('auto resizes textarea element when input is added', () => {
    const writtenPost = React.createRef();
    render(<WritePost ref={writtenPost} />);
    const textareaElement = screen.getByPlaceholderText('Enter your text here');
    const initialHeight = textareaElement.style.height;
    userEvent.type(textareaElement, 'Some text');
    expect(textareaElement.style.height).toBeGreaterThan(initialHeight);
  });
});
