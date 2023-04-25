import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import BlogPosts from './BlogPosts';

describe('BlogPosts component', () => {
  it('renders create post button when user is logged in and showPosts is true', () => {
    const { getByText } = render(<BlogPosts />);
    expect(getByText('Create')).toBeInTheDocument();
  });

  it('renders write post component when user clicks create post button', () => {
    const { getByText } = render(<BlogPosts />);
    fireEvent.click(getByText('Create'));
    expect(getByText('Enter your text here')).toBeInTheDocument();
  });

  it('renders publish post button when user is logged in and showPosts is false', () => {
    const { getByText } = render(<BlogPosts />);
    fireEvent.click(getByText('Create'));
    fireEvent.click(getByText('Create post'));
    expect(getByText('Publish')).toBeInTheDocument();
  });

  it('renders post content when showPosts is true and there are posts', () => {
    const { getByText } = render(<BlogPosts />);
    expect(getByText('This is a test post')).toBeInTheDocument();
  });
});
