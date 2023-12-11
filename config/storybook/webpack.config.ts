import webpack, { DefinePlugin, RuleSetRule } from "webpack"
import { BuildOptions, BuildPaths } from "../build/types/config"
import path from "path"
import { buildCssLoader } from "../build/loaders/buildCssLoader"
import MiniCssExtractPlugin from "mini-css-extract-plugin"

export default ({ config }: { config: webpack.Configuration }) => {
    const paths: BuildPaths = {
        build: "",
        html: "",
        entry: "",
        src: path.resolve(__dirname, "..", "..", "src"),
        locales: "",
        buildLocales: "",
    }
  config!.resolve!.modules!.push(paths.src)
  config!.resolve!.extensions!.push(".ts", ".tsx")
  config!.resolve!.modules = [
      paths.src,
      "node_modules", // добавляем эту строку
  ]
  config!.resolve!.alias = {
      ...config!.resolve!.alias,
      "@": paths.src,
  }
  // @ts-ignore
  config!.module!.rules = config!.module!.rules!.map((rule: RuleSetRule) => {
      if (/svg/.test(rule.test as string)) {
          return { ...rule, exclude: /\.svg$/i }
      }
      return rule
  })

  config!.module!.rules.push({
      test: /\.tsx?$/,
      use: "ts-loader",
      exclude: /node_modules/,
  })

  config!.module!.rules.push(buildCssLoader({ isDev: true } as BuildOptions))
  config!.plugins!.push(
      new DefinePlugin({
          __IS_DEV__: JSON.stringify(true),
          __API__: JSON.stringify("http://localhost:3000"),
          __PROJECT__: JSON.stringify("storybook"),
      }),
      new MiniCssExtractPlugin()
  )

  return config
}
