import { FC, memo } from "react"
import { classNames, Mods } from "@/shared/lib/classNames/classNames"
import cls from "./Text.module.scss"

export enum TextTheme {
  PRIMARY = "primary",
  ERROR = "error",
}

export enum TextAlign {
  RIGHT = "right",
  LEFT = "left",
  CENTER = "center",
}

export enum TextSize {
  S = "size_s",
  M = "size_m",
  L = "size_l",
  XL = "size_xl",
}

interface TextProps {
  className?: string;
  title?: string;
  text?: string;
  theme?: TextTheme;
  align?: TextAlign;
  size?: TextSize;
  "data-testid"?: string;
}

const Text: FC<TextProps> = memo((props) => {
    const {
        className,
        text,
        title,
        theme = TextTheme.PRIMARY,
        align = TextAlign.LEFT,
        size = TextSize.M,
        "data-testid": dataTestId = "Text",
    } = props

    const mods: Mods = {
        [cls[align]]: true,
        [cls[theme]]: true,
        [cls[size]]: true,
    }
  type HeaderTagType = "h1" | "h2" | "h3" | "h4";
  const mapSizeToHeaderTag: Record<TextSize, HeaderTagType> = {
      [TextSize.S]: "h4",
      [TextSize.M]: "h3",
      [TextSize.L]: "h2",
      [TextSize.XL]: "h1",
  }
  const HeaderTag = mapSizeToHeaderTag[size]

  return (
      <div className={classNames(cls.Text, mods, [className])}>
          {title && (
              <HeaderTag data-testid={`${dataTestId}.Header`} className={cls.title}>
                  {title}
              </HeaderTag>
          )}
          {text && (
              <p data-testid={`${dataTestId}.Paragraph`} className={cls.text}>
                  {text}
              </p>
          )}
      </div>
  )
})

export default Text
