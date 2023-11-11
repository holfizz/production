import { type ButtonHTMLAttributes, type FC } from "react"
import { classNames } from "shared/lib/classNames/classNames"
import cls from "./Button.module.scss"

export enum ButtonTheme {
  CLEAR = "clear",
  OUTLINE = "outline",
  FILL = "fill",
}

export enum ButtonSize {
  M = "size_m",
  L = "size_l",
  XL = "size_xl",
  FULL = "size_full",
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ButtonTheme;
  size?: ButtonSize;
  disabled?: boolean;
}

const Button: FC<ButtonProps> = ({
    className,
    children,
    theme,
    size = ButtonSize.M,
    disabled,
    ...otherProps
}) => {
    const mods: Record<string, boolean> = {
        [cls[theme]]: true,
        [cls[size]]: true,
        [cls.disabled]:disabled
    }
    return (
        <button
            disabled={disabled}
            type={"button"}
            className={classNames(cls.Button, mods, [className, cls[theme]])}
            {...otherProps}
        >
            {children}
        </button>
    )
}

export default Button
