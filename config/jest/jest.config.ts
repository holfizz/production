import type { Config } from "jest"
import path from "path"

const config: Config = {
    globals: {
        __IS_DEV__: true,
    },
    clearMocks: true,
    testEnvironment: "jsdom",
    coveragePathIgnorePatterns: ["\\\\node_modules\\\\"],
    moduleDirectories: ["node_modules", "src"],
    moduleFileExtensions: [
        "js",
        "mjs",
        "cjs",
        "jsx",
        "ts",
        "tsx",
        "json",
        "node",
    ],
    testMatch: [`<rootDir>src/**/*(*.)@(spec|test).[tj]s?(x)`],
    rootDir: "../../",
    setupFilesAfterEnv: ["<rootDir>config/jest/setupTests.ts"],
    moduleNameMapper: {
        "\\.s?css$": "identity-obj-proxy",
        "\\.svg": path.resolve(__dirname, "jestEmptyComponent.tsx"),
    },
}

export default config
