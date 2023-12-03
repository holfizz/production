import { FC, Fragment, memo, ReactNode } from "react"
import { Menu } from "@headlessui/react"
import cls from "./Dropdown.module.scss"
import { HStack, VStack } from "shared/ui/Stack"
import { classNames } from "shared/lib/classNames/classNames"
import { DropdownDirection } from "shared/types/ui"
import AppLink from "shared/ui/AppLink/AppLink"

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

const mapDirectionClass: Record<DropdownDirection, string> = {
    "bottom left": cls.menuBottomLeft,
    "bottom right": cls.menuBottomRight,
    "top left": cls.menuTopLeft,
    "top right": cls.menuTopRight,
}

const Dropdown: FC<DropdownProps> = memo((props) => {
    const { className, items, trigger, direction = "bottom right" } = props
    return (
        <HStack gap={"16"} className={classNames("", {}, [className])}>
            <Menu as={"div"} className={cls.Dropdown}>
                <HStack>
                    <Menu.Button className={cls.btn}>{trigger}</Menu.Button>
                </HStack>
                <VStack max align={"center"}>
                    <Menu.Items
                        className={classNames(cls.menu, {}, [mapDirectionClass[direction]])}
                    >
                        {items.map((item) => {
                            const content = ({ active }: { active: boolean }) => (
                                <button
                                    disabled={item.disabled}
                                    type={"button"}
                                    onClick={item.onClick}
                                    className={classNames(cls.item, {
                                        [cls.active]: active,
                                    })}
                                >
                                    {item.content}
                                </button>
                            )
                            if (item.href) {
                                return (
                                    <Menu.Item key={String(item.content)} to={item.href} as={AppLink}>
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
