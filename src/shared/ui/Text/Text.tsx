import {FC, memo} from "react"
import {classNames, Mods} from "shared/lib/classNames/classNames"
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

interface TextProps {
  className?: string;
  title?: string;
  text?: string;
  theme?: TextTheme;
  align?: TextAlign;
}

const Text: FC<TextProps> = memo((props) => {
    const {
        className,
        text,
        title,
        theme = TextTheme.PRIMARY,
        align = TextAlign.LEFT,
    } = props
    const mods : Mods={
        [cls[align]]:true,
        [cls[theme]]: true
    }
    return (
        <div className={classNames(cls.Text, mods, [className])}>
            {title && <p className={cls.title}>{title}</p>}
            {text && <p className={cls.text}>{text}</p>}
        </div>
    )
})

export default Text
