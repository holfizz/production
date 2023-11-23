import {ChangeEvent, useMemo} from "react"
import {classNames, Mods} from "shared/lib/classNames/classNames"
import cls from "./Select.module.scss"
import {Forward} from "lucide-react"

export interface SelectOption<T extends string> {
  value?: T;
  content?: string;
}
interface SelectProps<T extends string> {
  className?: string;
  label?: string;
  options?: SelectOption<T>[];
  value?: string;
  onChange?: (value: T) => void;
  readonly?: boolean;
}

const Select = <T extends string>(props: SelectProps<T>) => {
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
        onChange?.(e.target.value as T)
    }
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
}

export default Select
