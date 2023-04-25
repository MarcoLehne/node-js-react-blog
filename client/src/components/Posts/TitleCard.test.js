import React from 'react';
import { render, screen } from '@testing-library/react';
import TitleCard from './TitleCard';

describe('TitleCard', () => {
  it('renders blog name correctly', () => {
    const blogName = 'My Blog';
    const pathName = '/myblog';
    Object.defineProperty(window.location, 'pathname', {
      writable: true,
      value: pathName,
    });
    render(<TitleCard />);
    const blogNameElement = screen.getByTestId('blog-name');
    expect(blogNameElement.textContent).toBe(`${blogName}'s blog`);
  });
});
