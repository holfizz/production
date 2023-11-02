import type {Config} from 'jest'

const config: Config = {
    clearMocks: true,
    testEnvironment: "jsdom",
    coveragePathIgnorePatterns: [
        "/node_modules/"
    ],

    moduleDirectories: [
        "node_modules"
    ],
    moduleFileExtensions: [
        "js",
        "mjs",
        "cjs",
        "jsx",
        "ts",
        "tsx",
        "json",
        "node"
    ],
    testMatch: [
        `<rootDir>src/**/*(*.)@(spec|test).[tj]s?(x)`
    ],
    rootDir:'../../'
}

export default config
