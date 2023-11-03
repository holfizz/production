import type webpack from "webpack"
import { buildCssLoader } from "./loaders/buildCssLoader"

export function buildLoaders(isDev: boolean): webpack.RuleSetRule[] {
    const typescriptLoader = {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
    }

    const svgLoader = {
        test: /\.svg$/i,
        use: ["@svgr/webpack"],
    }
    const babelLoader = {
        test: /\.(js|jsx|tsx)$/,
        exclude: /node_modules/,
        use: {
            loader: "babel-loader",
            options: {
                presets: ["@babel/preset-env"],
                plugins: [
                    [
                        "i18next-extract",
                        {
                            locales: ["en", "ru"],
                            keyAsDefaultValue: true,
                        },
                    ],
                ],
            },
        },
    }
    const fileLoader = {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
            {
                loader: "file-loader",
            },
        ],
    }
    const cssLoader = buildCssLoader(isDev)
    return [fileLoader, cssLoader, svgLoader, babelLoader, typescriptLoader]
}
