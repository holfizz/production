import { FC, memo, ReactNode } from "react"
import { classNames } from "@/shared/lib/classNames/classNames"
import popoverCls from "../../styles/popup.module.scss"
import cls from "./Popover.module.scss"
import { Popover as HPopover } from "@headlessui/react"
import { DropdownDirection } from "@/shared/types/ui"
import { mapDirectionClass } from "../../styles/conts"

interface PopoverProps {
  className?: string;
  direction?: DropdownDirection;
  trigger: ReactNode;
  children: ReactNode;
}

const Popover: FC<PopoverProps> = memo(({ className, direction ='bottom right', trigger, children }) => {
    return (
        <div className={classNames(popoverCls.popup, {}, [className, cls.Popover])}>
            <HPopover>
                <HPopover.Button as={'div'} className={popoverCls.trigger}>
                    {trigger}
                </HPopover.Button>
                <HPopover.Panel
                    className={classNames(popoverCls.menu, {}, [mapDirectionClass[direction], cls.panel])}
                >
                    {children}
                </HPopover.Panel>
            </HPopover>
        </div>
    )
})

export default Popover
