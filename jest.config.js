module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jest-environment-jsdom',
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': 'ts-jest',
  },
  moduleNameMapper: {
    '^@/components/(.*)$': '<rootDir>/components/$1',
    '^.+\\.(css|scss)$': 'identity-obj-proxy', // For handling CSS modules
  },
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
};
