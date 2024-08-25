export default {
  preset: 'ts-jest',
  testEnvironment: 'node',
  setupFilesAfterEnv: ['<rootDir>/__tests__/setup.ts'],
  transform: {
    // Use ts-jest to compile TypeScript files
    '^.+\\.tsx?$': [
      'ts-jest',
      {
        tsconfig: './tsconfig.json',
      },
    ],
  },
};
