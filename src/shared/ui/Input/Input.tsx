import { ChangeEvent, FC, InputHTMLAttributes, memo } from "react"
import { classNames } from "shared/lib/classNames/classNames"
import cls from "./Input.module.scss"

type HTMLInputProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  "value" | "onChange"
>;

export enum InputTheme {
  OUTLINE = "outline",
}

interface InputProps extends HTMLInputProps {
  className?: string;
  value?: string;
  theme?: InputTheme;
  onChange?: (value: string) => void;
}

// eslint-disable-next-line react/display-name
const Input: FC<InputProps> = memo(
    // eslint-disable-next-line react/prop-types
    ({ className, onChange, value, type = "text", theme, ...otherProps }) => {
        const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
            onChange?.(e.target.value)
        }
        const mods: Record<string, boolean> = {
            [cls[theme]]: true,
        }
        return (
            <input
                className={classNames(cls.Input, mods, [className])}
                onChange={onChangeHandler}
                type={type}
                value={value}
                {...otherProps}
            />
        )
    }
)

export default Input
