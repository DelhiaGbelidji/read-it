import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Page from '../page'; // Correct the import path according to your project structure
import * as nextRouter from 'next/router';

// Setup a mock for useRouter
jest.mock('next/router', () => ({
useRouter: () => ({
    push: jest.fn(),
    }),
}));

describe('Page', () => {
    let push: jest.Mock<any, any>;

beforeEach(() => {
    // Create a new mock function for each test
    push = jest.fn();
    // Cast to jest.Mock to make TypeScript happy
    (nextRouter.useRouter as jest.Mock).mockReturnValue({
        push,
    });
});

it('renders without crashing', () => {
    render(<Page />);
});

it('redirects to /about-us when clicking the About us button', () => {
    const { getByText } = render(<Page />);
    fireEvent.click(getByText('About us'));
    expect(push).toHaveBeenCalledWith('/about-us');
});

it('redirects to /auth when clicking the Join us button', () => {
    const { getByText } = render(<Page />);
    fireEvent.click(getByText('Join us'));
    expect(push).toHaveBeenCalledWith('/auth');
});

  // Reset the mock after each test
afterEach(() => {
        jest.clearAllMocks();
    });
});
