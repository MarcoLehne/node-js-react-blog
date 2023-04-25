import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import PublishPost from './PublishPost';

describe('PublishPost', () => {
  it('calls the onPublishPost function when the button is clicked', () => {
    const mockOnPublishPost = jest.fn();
    render(<PublishPost onPublishPost={mockOnPublishPost} />);
    const publishButton = screen.getByRole('button', { name: 'Publish' });
    userEvent.click(publishButton);
    expect(mockOnPublishPost).toHaveBeenCalledTimes(1);
  });
});
