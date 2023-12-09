import { FC, Fragment, memo, ReactNode } from "react"
import { Menu } from "@headlessui/react"
import cls from "./Dropdown.module.scss"
import { HStack, VStack } from "@/shared/ui/Stack"
import { classNames } from "@/shared/lib/classNames/classNames"
import { DropdownDirection } from "@/shared/types/ui"
import AppLink from "@/shared/ui/AppLink/AppLink"
import { mapDirectionClass } from "../../styles/conts"
import popupCls from "../../styles/popup.module.scss"

export interface DropdownItem {
  disabled?: boolean;
  content: ReactNode;
  onClick?: () => void;
  href?: string;
}

interface DropdownProps {
  className?: string;
  items: DropdownItem[];
  direction?: DropdownDirection;
  trigger: ReactNode;
}

const Dropdown: FC<DropdownProps> = memo((props) => {
    const { className, items, trigger, direction = "bottom right" } = props
    return (
        <HStack gap={"16"} className={classNames("", {}, [className])}>
            <Menu as={"div"} className={popupCls.popup}>
                <HStack>
                    <Menu.Button className={popupCls.trigger}>{trigger}</Menu.Button>
                </HStack>
                <VStack max align={"center"}>
                    <Menu.Items
                        className={classNames(popupCls.menu, {}, [
                            mapDirectionClass[direction],
                            cls.menu
                        ])}
                    >
                        {items.map((item) => {
                            const content = ({ active }: { active: boolean }) => (
                                <button
                                    disabled={item.disabled}
                                    type={"button"}
                                    onClick={item.onClick}
                                    className={classNames(popupCls.item, {
                                        [popupCls.active]: active,
                                    },[cls.item])}
                                >
                                    {item.content}
                                </button>
                            )
                            if (item.href) {
                                return (
                                    <Menu.Item
                                        key={String(item.content)}
                                        to={item.href}
                                        as={AppLink}
                                    >
                                        {content}
                                    </Menu.Item>
                                )
                            }
                            return (
                            // eslint-disable-next-line react/jsx-key
                                <Menu.Item as={Fragment}>{content}</Menu.Item>
                            )
                        })}
                    </Menu.Items>
                </VStack>
            </Menu>
        </HStack>
    )
})

export default Dropdown
