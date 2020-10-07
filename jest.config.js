module.exports = {
  collectCoverage: true,
  coveragePathIgnorePatterns: [
    '/configs/',
    '/node_modules/',
    '/scripts/',
    '/tests/',
  ],
  coverageThreshold: {
    global: {
      functions: 80,
      lines: 80,
    },
  },
  testEnvironment: 'node',
  testTimeout: 30000,
  timers: 'fake',
  verbose: true,
};
