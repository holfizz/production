import { FC, PropsWithChildren } from "react"
import { classNames, Mods } from "@/shared/lib/classNames/classNames"
import cls from "./Modal.module.scss"
import Portal from "@/shared/ui/Portal/Portal"
import { useModal } from "@/shared/lib/hooks/useModal/useModal"

interface ModalProps {
  className?: string;
  isOpen: boolean;
  onClose?: () => void;
  lazy?: boolean;
}

const ANIMATION_DELAY = 400

const Modal: FC<PropsWithChildren<ModalProps>> = (props) => {
    const { className, children, isOpen, onClose, lazy } = props
    const { isClosing, isMounted, close } = useModal({
        onClose,
        isOpen,
        animationDelay: ANIMATION_DELAY,
    })

    const mods: Mods = {
        [cls.opened]: isOpen,
        [cls.isClosing]: isClosing,
    }

    if (lazy && !isMounted) {
        return null
    }

    return (
        <Portal>
            <div className={classNames(cls.Modal, mods, [className])}>
                <div onClick={close} className={cls.overlay}>
                    <div onClick={(e) => e.stopPropagation()} className={cls.content}>
                        {children}
                    </div>
                </div>
            </div>
        </Portal>
    )
}

export default Modal
