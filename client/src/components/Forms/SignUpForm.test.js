import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import SignUpForm from './SignUpForm';

describe('SignUpForm component', () => {
  test('renders username and password inputs', () => {
    render(<SignUpForm />);
    const usernameInput = screen.getByLabelText('Username:');
    const passwordInput = screen.getByLabelText('Password:');
    expect(usernameInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
  });

  test('shows error message if user already exists', async () => {
    jest.spyOn(window, 'fetch').mockImplementationOnce(() => {
      return Promise.resolve({
        ok: false,
        json: () => Promise.resolve({ error: 'User already exists' }),
      });
    });
    render(<SignUpForm />);
    const submitButton = screen.getByRole('button', { name: 'Submit' });
    const usernameInput = screen.getByLabelText('Username:');
    const passwordInput = screen.getByLabelText('Password:');
    const confirmPasswordInput = screen.getByLabelText('Confirm Password:');

    fireEvent.change(usernameInput, { target: { value: 'testuser' } });
    fireEvent.change(passwordInput, { target: { value: 'testpassword' } });
    fireEvent.change(confirmPasswordInput, { target: { value: 'testpassword' } });
    fireEvent.click(submitButton);

    const errorMessage = await screen.findByText(/User already exists/i);
    expect(errorMessage).toBeInTheDocument();
  });

  test('shows error message if username contains illegal characters', async () => {
    render(<SignUpForm />);
    const submitButton = screen.getByRole('button', { name: 'Submit' });
    const usernameInput = screen.getByLabelText('Username:');
    const passwordInput = screen.getByLabelText('Password:');
    const confirmPasswordInput = screen.getByLabelText('Confirm Password:');

    fireEvent.change(usernameInput, { target: { value: 'test123' } });
    fireEvent.change(passwordInput, { target: { value: 'testpassword' } });
    fireEvent.change(confirmPasswordInput, { target: { value: 'testpassword' } });
    fireEvent.click(submitButton);

    const errorMessage = await screen.findByText(/Please only use alphabet characters for the username/i);
    expect(errorMessage).toBeInTheDocument();
  });
});
