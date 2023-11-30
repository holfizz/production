import { FC, Fragment, memo } from "react"
import { Listbox as HListBox } from "@headlessui/react"
import cls from "./ListBox.module.scss"
import { classNames } from "shared/lib/classNames/classNames"
import Button, { ButtonTheme } from "shared/ui/Button/Button"
import Icon from "shared/ui/Icon/Icon"
import { CornerDownRight } from "lucide-react"
import { HStack } from "shared/ui/Stack"

export interface ListBoxItem {
  value: string;
  content: string;
  disabled?: boolean;
}
type DropdownDirection = "top" | "bottom";
interface ListBoxProps {
  className?: string;
  items?: ListBoxItem[];
  value?: string;
  defaultValue?: string;
  onChange: (value: string) => void;
  readonly?: boolean;
  direction?: DropdownDirection;
  label?: string;
}

const mapDirectionClass: Record<DropdownDirection, string> = {
    bottom: cls.optionsBottom,
    top: cls.optionsTop,
}

const ListBox: FC<ListBoxProps> = memo((props) => {
    const {
        className,
        items,
        value,
        defaultValue,
        onChange,
        readonly,
        direction = "bottom",
        label,
    } = props
    return (
        <HStack gap={'16'}>
            {label && (
                <HStack  align={'center'} className={classNames('',{[cls.readonly]:readonly},[])}>
                    {label}
                    <Icon className={classNames('',{[cls.readonly]:readonly},[])} SVG={CornerDownRight} />
                </HStack>
            )}
            <HListBox
                disabled={readonly}
                as={"div"}
                className={cls.listBox}
                value={value}
                onChange={onChange}
            >
                <HListBox.Button className={cls.trigger}>
                    <Button disabled={readonly} theme={ButtonTheme.OUTLINE}>{value ?? defaultValue}</Button>
                </HListBox.Button>
                <HListBox.Options
                    className={classNames(cls.options, {}, [
                        mapDirectionClass[direction],
                    ])}
                >
                    {items?.map((item) => (
                        <HListBox.Option
                            key={item.value}
                            value={item.value}
                            as={Fragment}
                            disabled={item.disabled}
                        >
                            {({ active, selected }) => (
                                <li
                                    className={classNames(
                                        cls.item,
                                        {
                                            [cls.active]: active,
                                            [cls.disabled]: item.disabled,
                                            [cls.selected]: selected,
                                        },
                                        []
                                    )}
                                >
                                    {item.content}
                                </li>
                            )}
                        </HListBox.Option>
                    ))}
                </HListBox.Options>
            </HListBox>
        </HStack>
    )
})

export default ListBox
