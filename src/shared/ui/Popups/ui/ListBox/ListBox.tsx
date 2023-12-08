import { FC, Fragment, memo } from "react"
import { Listbox as HListBox } from "@headlessui/react"
import cls from "./ListBox.module.scss"
import { classNames } from "shared/lib/classNames/classNames"
import Button, { ButtonTheme } from "shared/ui/Button/Button"
import Icon from "shared/ui/Icon/Icon"
import { CornerDownRight } from "lucide-react"
import { HStack } from "shared/ui/Stack"
import { DropdownDirection } from "shared/types/ui"
import { mapDirectionClass } from "../../styles/conts"
import popupCls from "../../styles/popup.module.scss"

export interface ListBoxItem {
  value: string;
  content: string;
  disabled?: boolean;
}
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

const ListBox: FC<ListBoxProps> = memo((props) => {
    const {
        className,
        items,
        value,
        defaultValue,
        onChange,
        readonly,
        direction = "bottom right",
        label,
    } = props
    return (
        <HStack gap={"16"}>
            {label && (
                <HStack
                    align={"center"}
                    className={classNames("", { [popupCls.readonly]: readonly }, [className])}
                >
                    {label}
                    <Icon
                        className={classNames("", { [popupCls.readonly]: readonly }, [])}
                        SVG={CornerDownRight}
                    />
                </HStack>
            )}
            <HListBox
                disabled={readonly}
                as={"div"}
                className={popupCls.popup}
                value={value}
                onChange={onChange}
            >
                <HListBox.Button className={popupCls.trigger}>
                    <Button disabled={readonly} theme={ButtonTheme.OUTLINE}>
                        {value ?? defaultValue}
                    </Button>
                </HListBox.Button>
                <HListBox.Options
                    className={classNames(popupCls.menu, {}, [
                        mapDirectionClass[direction],
                        cls.options
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
                                        popupCls.item,
                                        {
                                            [popupCls.active]: active,
                                            [popupCls.readonly]: item.disabled,
                                            [popupCls.selected]: selected,
                                        },
                                        [cls.item]
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
