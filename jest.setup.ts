// jest.setup.ts
import '@testing-library/jest-dom';

beforeAll(() => {
  Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: jest.fn().mockImplementation(query => ({
      matches: false,
      media: query,
      onchange: null,
      addListener: jest.fn(),
      removeListener: jest.fn(),
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
      dispatchEvent: jest.fn(),
    })),
  });
});

jest.mock('next/font/google', () => ({
  Roboto: jest.fn().mockImplementation(() => ({
    style: { fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif' },
  })),
}));

// Define your global mocks here if needed

