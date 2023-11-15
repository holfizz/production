import type webpack from "webpack"
import {buildCssLoader} from "./loaders/buildCssLoader"
import {buildBabelLoader} from "./loaders/buildBabelLoader"

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
    const babelLoader = buildBabelLoader(isDev)
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
