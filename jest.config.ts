import type { Config } from 'jest';
import nextJest from 'next/jest';

const createJestConfig = nextJest({
  // Indiquez le chemin vers votre application Next.js pour charger next.config.js et les fichiers .env dans votre environnement de test
  dir: './',
});

// Ajoutez toute configuration personnalisée pour Jest
const config: Config = {
  coverageProvider: 'v8',
  testEnvironment: 'jest-environment-jsdom',
  // Ajoutez plus d'options de configuration avant que chaque test soit exécuté
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  // Vous pouvez ajouter d'autres configurations ici
};

// createJestConfig est exporté de cette manière pour s'assurer que next/jest peut charger la configuration de Next.js qui est asynchrone
export default createJestConfig(config);