/*
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */

export default {
    clearMocks: true,

    collectCoverage: true,

    coverageDirectory: 'coverage',

    coveragePathIgnorePatterns: [
        '/node_modules/'
    ],

    // Indicates which provider should be used to instrument code for coverage
    coverageProvider: 'v8',

    // A list of reporter names that Jest uses when writing coverage reports
    coverageReporters: [
        'text',
        'lcov',
        'clover'
    ],

    // An array of file extensions your modules use
    moduleFileExtensions: [
        'js',
        'node'
    ],

    notify: true,

    // An enum that specifies notification mode. Requires { notify: true }
    notifyMode: 'failure-change',

    // The root directory that Jest should scan for tests and modules within
    // rootDir: undefined,

    testMatch: [
        '**/__tests__/**/*.[jt]s?(x)',
        '**/?(*.)+(spec|test).[tj]s?(x)'
    ],

    transform: {
        '^.+\\.js$': 'babel-jest',
        '^.+\\.mjs$': 'babel-jest'
    },

    testPathIgnorePatterns: [
        '/node_modules/'
    ],
}
