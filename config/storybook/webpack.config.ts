import webpack, { DefinePlugin, RuleSetRule } from "webpack"
import { BuildPaths } from "../build/types/config"
import path from "path"
import { buildCssLoader } from "../build/loaders/buildCssLoader"

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

  config!.module!.rules.push(buildCssLoader(true))

  config!.plugins!.push(
      new DefinePlugin({
          __IS_DEV__: JSON.stringify(true),
          __API__: JSON.stringify("https://test.api"),
          __PROJECT__: JSON.stringify("storybook"),
      })
  )

  return config
}
