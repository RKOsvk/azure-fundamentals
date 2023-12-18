module.exports = {
    preset: 'ts-jest',
    collectCoverage: true,
    testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.[jt]sx?$',
    collectCoverageFrom: ['components/*.tsx', 'hooks/*.tsx','src/**/*.tsx','pages/**/*.tsx', 'utils/*.ts'],
    coveragePathIgnorePatterns: ['/node_modules/', '/test/'],
    testEnvironment: 'jsdom',
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
    setupFilesAfterEnv: ['@testing-library/jest-dom'],

};
