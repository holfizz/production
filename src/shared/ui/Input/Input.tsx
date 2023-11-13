import {ChangeEvent, FC, InputHTMLAttributes, memo} from "react"
import {classNames, Mods} from "shared/lib/classNames/classNames"
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

const Input: FC<InputProps> = memo(
    ({ className, onChange, value, type = "text", theme = InputTheme.OUTLINE, ...otherProps }) => {
        const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
            onChange?.(e.target.value)
        }
        const mods: Mods = {
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
