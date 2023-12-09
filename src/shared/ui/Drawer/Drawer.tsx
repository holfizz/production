import { classNames, Mods } from "shared/lib/classNames/classNames"
import React, { memo, ReactNode } from "react"
import cls from "./Drawer.module.scss"
import Portal from "../Portal/Portal"
import Overlay from "../Overlay/Overlay"
import { useModal } from "shared/lib/hooks/useModal/useModal"

interface DrawerProps {
  className?: string;
  children: ReactNode;
  isOpen?: boolean;
  onClose: () => void;
  lazy?: boolean;
}
const ANIMATION_DELAY = 400
export const Drawer = memo((props: DrawerProps) => {
    const { className, children, onClose, isOpen, lazy } = props
    const { isClosing, isMounted, close } = useModal({
        onClose,
        isOpen,
        animationDelay: ANIMATION_DELAY,
    })
    const mods: Mods = {
        [cls.opened]: isOpen,
        [cls.isClosing]: isClosing,
    }
    if(lazy && !isMounted){
        return null
    }
    return (
        <Portal>
            <div className={classNames(cls.Drawer, mods, [className])}>
                <Overlay onClick={close} />
                <div className={cls.content}>{children}</div>
            </div>
        </Portal>
    )
})
