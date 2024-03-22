import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import SignUpForm from './SignUpForm'; // Adjust the import path based on your file structure

import { useRouter } from 'next/router';

jest.mock('next/router', () => ({
  useRouter: jest.fn(),
}));

describe('SignUpForm Component', () => {
  // Directly mock the push function and export it for assertions
  const mockPush = jest.fn();

  beforeEach(() => {
    (useRouter as jest.Mock).mockReturnValue({
      route: '/',
      pathname: '/',
      query: {},
      asPath: '/',
      push: mockPush,
    });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test('submits the form with all required fields', async () => {
    render(<SignUpForm />);

    // Simulate user input
    userEvent.type(screen.getByLabelText(/first name/i), 'John');
    userEvent.type(screen.getByLabelText(/last name/i), 'Doe');
    userEvent.type(screen.getByLabelText(/email/i), 'john@example.com');
    userEvent.type(screen.getByLabelText(/password/i), 'Password123!');
    userEvent.type(screen.getByLabelText(/confirm password/i), 'Password123!');

    // Submit the form
    userEvent.click(screen.getByRole('button', { name: /sign up/i }));

    // Assertions for mocked functions
    await waitFor(() => {
        expect(mockPush).toHaveBeenCalledWith('/auth');
    });
  });
});
