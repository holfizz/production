import MiniCssExtractPlugin from "mini-css-extract-plugin"
import { BuildOptions } from "../types/config"

export function buildCssLoader({ isDev }: BuildOptions) {
    return {
        test: /\.s[ac]ss$/i,
        exclude: /node_modules/,
        use: [
            isDev ? "style-loader" : MiniCssExtractPlugin.loader,
            {
                loader: "css-loader",
                options: {
                    modules: {
                        auto: (resPath: string) => Boolean(resPath.includes(".module.")),
                        localIdentName: isDev
                            ? "[local]__[hash:base64:8]"
                            : "[hash:base64:8]",
                    },
                },
            },
            "sass-loader",
        ],
    }
}
