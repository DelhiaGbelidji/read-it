import {render, fireEvent} from '@testing-library/react';
import '@testing-library/jest-dom';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import * as nextNavigation from 'next/navigation';

import Page from '../page';

// Mock pour Axios
const mockAxios = new MockAdapter(axios);

// Configuration du mock pour useRouter
jest.mock('next/navigation', () => ({
  useRouter: jest.fn(),
}));

describe('Page', () => {
  let pushMock: jest.Mock;

  beforeEach(() => {
    // Réinitialisation du mock Axios pour chaque test
    mockAxios.reset();

    // Mock de réponse spécifique si nécessaire
    mockAxios
      .onGet('https://www.googleapis.com/books/v1/volumes')
      .reply(200, {});

    // Réinitialisation du mock pour useRouter pour chaque test
    pushMock = jest.fn();
    (nextNavigation.useRouter as jest.Mock).mockReturnValue({
      push: pushMock,
    });
  });

  it('renders without crashing', () => {
    render(<Page />);
  });

  it('redirects to /about-us when clicking the About us button', () => {
    const {getByText} = render(<Page />);
    fireEvent.click(getByText('About us'));
    expect(pushMock).toHaveBeenCalledWith('/about-us');
  });

  it('redirects to /auth when clicking the Join us button', () => {
    const {getByText} = render(<Page />);
    fireEvent.click(getByText('Join us'));
    expect(pushMock).toHaveBeenCalledWith('/auth');
  });

  // Réinitialisez les mocks après chaque test
  afterEach(() => {
    jest.clearAllMocks();
  });
});
