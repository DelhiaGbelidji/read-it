import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

global.window.matchMedia =
  global.window.matchMedia ||
  function (query: string) {
    return {
      matches: false,
      addListener: (listener: () => void) => {},
      removeListener: (listener: () => void) => {},
    };
  };

const mock = new MockAdapter(axios);

// Mock toutes les requêtes GET par défaut
mock.onGet().reply(200, {
  // Votre faux objet de réponse ici
});
