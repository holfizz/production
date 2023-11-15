import {ChangeEvent, FC, memo, useEffect, useMemo} from "react"
import {classNames, Mods} from "shared/lib/classNames/classNames"
import cls from "./Select.module.scss"
import {Forward} from "lucide-react"

export interface SelectOption {
  value?: string;
  content?: string;
}
interface SelectProps {
  className?: string;
  label?: string;
  options?: SelectOption[];
  value?: string;
  onChange?: (value: string) => void;
  readonly?: boolean;
}

const Select: FC<SelectProps> = memo((props) => {
    const { className, label, options, value, onChange, readonly } = props
    const optionsList = useMemo(() => {
        return options?.map((opt) => {
            return (
                <option className={cls.option} value={opt.value} key={opt.value}>
                    {opt.content}
                </option>
            )
        })
    }, [options])
    const mods: Mods = {
        [cls.readonly]: readonly,
    }

    const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
        onChange?.(e.target.value)
    }
    useEffect(() => {
        console.log(value)
    }, [value])
    return (
        <div className={classNames(cls.Wrapper, mods, [className])}>
            {label && (
                <span className={cls.label}>
                    {label}
                    <Forward />
                </span>
            )}
            <select
                disabled={readonly}
                className={classNames(cls.select, {}, [])}
                value={value}
                onChange={onChangeHandler}
            >
                {optionsList}
            </select>
        </div>
    )
})

export default Select
