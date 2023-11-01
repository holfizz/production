import type webpack from 'webpack'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'

export function buildLoaders (isDev: boolean): webpack.RuleSetRule[] {
    const typescriptLoader = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
    }

    const svgLoader = {
        test: /\.svg$/i,
        use: ['@svgr/webpack']
    }
    const babelLoader = {
        test: /\.(js|jsx|tsx)$/,
        exclude: /node_modules/,
        use: {
            loader: 'babel-loader',
            options: {
                presets: ['@babel/preset-env'],
                plugins: [
                    [
                        "i18next-extract",
                        {
                            locales: ['en', 'ru'],
                            keyAsDefaultValue: true
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
                loader: 'file-loader'
            },
        ],
    }
    const cssLoader = {
        test: /\.s[ac]ss$/i,
        use: [
            isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
            {
                loader: 'css-loader',
                options: {
                    modules: {
                        auto: (resPath: string) => Boolean(resPath.includes('.module.')),
                        localIdentName: isDev
                            ? '[local]__[hash:base64:8]'
                            : '[hash:base64:8]'
                    },
                },
            },
            "sass-loader",
        ],
    }
    return [fileLoader, cssLoader, svgLoader, babelLoader, typescriptLoader]
}
