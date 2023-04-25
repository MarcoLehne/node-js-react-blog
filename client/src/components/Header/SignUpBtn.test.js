import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import SignUpBtn from './SignUpBtn';

describe('SignUpBtn', () => {
  it('displays the correct text content', () => {
    render(<SignUpBtn />);
    const buttonText = screen.getByRole('heading', { name: /sign up/i });
    expect(buttonText).toBeInTheDocument();
  });

  it('has the correct id attribute', () => {
    render(<SignUpBtn />);
    const button = screen.getByRole('link', { name: /sign up/i });
    expect(button).toHaveAttribute('id', 'sign-up-btn');
  });

  it('navigates to the correct location when clicked', () => {
    render(<SignUpBtn />);
    const button = screen.getByRole('link', { name: /sign up/i });
    fireEvent.click(button);
    expect(window.location.href).toBe('http://localhost/SignUp');
  });
});
