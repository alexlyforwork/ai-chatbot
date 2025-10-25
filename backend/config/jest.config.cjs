module.exports = {
  testEnvironment: 'node',
  roots: ['../tests'], // <-- this should point to the actual folder containing your test files
  testMatch: ['**/?(*.)+(spec|test).[jt]s?(x)'],
  transform: {
    '^.+\\.js$': 'babel-jest',
  },
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/../src/$1"
  }
};