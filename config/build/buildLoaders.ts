import type webpack from "webpack"
import { buildCssLoader } from "./loaders/buildCssLoader"
import { buildBabelLoader } from "./loaders/buildBabelLoader"
import { BuildOptions } from "./types/config"

export function buildLoaders(options: BuildOptions): webpack.RuleSetRule[] {
    // const typescriptLoader = {
    //     test: /\.tsx?$/,
    //     use: "ts-loader",
    //     exclude: /node_modules/,
    // }

    const svgLoader = {
        test: /\.svg$/i,
        use: ["@svgr/webpack"],
    }
    const codeBabelLoader = buildBabelLoader({ ...options, isTsx: false })
    const tsxBabelLoader = buildBabelLoader({ ...options, isTsx: true })
    const fileLoader = {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
            {
                loader: "file-loader",
            },
        ],
    }
    const cssLoader = buildCssLoader(options)
    return [fileLoader, cssLoader, svgLoader, codeBabelLoader, tsxBabelLoader]
}
