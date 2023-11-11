import {Dispatch, FC, PropsWithChildren, SetStateAction, useCallback, useEffect, useRef, useState,} from "react"
import {classNames} from "shared/lib/classNames/classNames"
import cls from "./Modal.module.scss"
import Portal from "shared/ui/Portal/Portal"
<<<<<<< HEAD
import {useTheme} from "app/providers/ThemeProvider"
=======
>>>>>>> 921c489 (fix all files and add loki)

interface ModalProps {
  className?: string;
  isOpen: boolean;
  onClose: Dispatch<SetStateAction<boolean>>;
  lazy?: boolean;
}

const ANIMATION_DELAY = 400

const Modal: FC<PropsWithChildren<ModalProps>> = ({
    className,
    children,
    onClose,
    isOpen,
    lazy,
}) => {
<<<<<<< HEAD
    const { theme } = useTheme()
=======
>>>>>>> 921c489 (fix all files and add loki)
    const [isClothing, setIsClothing] = useState<boolean>(false)
    const [isMounted, setIsMounted] = useState<boolean>(false)
    const timerRef = useRef<ReturnType<typeof setTimeout>>(null)

    useEffect(() => {
<<<<<<< HEAD
        if (isOpen) {
=======
        if(isOpen){
>>>>>>> 921c489 (fix all files and add loki)
            setIsMounted(true)
        }
    }, [isOpen])

<<<<<<< HEAD
    const closeHandler = useCallback(() => {
        if (onClose) {
            setIsClothing(true)
            timerRef.current = setTimeout(() => {
                onClose(false)
                setIsClothing(false)
            }, ANIMATION_DELAY)
=======
    const closeHandler = useCallback(() =>{
        if(onClose){
            setIsClothing(true)
            timerRef.current = setTimeout(()=>{
                onClose(false)
                setIsClothing(false)
            },ANIMATION_DELAY)
>>>>>>> 921c489 (fix all files and add loki)
        }
    }, [onClose])

    const mods: Record<string, boolean> = {
        [cls.opened]: isOpen,
<<<<<<< HEAD
        [cls.isClothing]: isClothing,
    }
    const onKeyDown = useCallback(
        (e: KeyboardEvent) => {
            if (e.key === "Escape") {
                closeHandler()
            }
        },
        [closeHandler]
    )

    useEffect(() => {
        if (isOpen) {
            window.addEventListener("keydown", onKeyDown)
        }
        return () => {
            clearTimeout(timerRef.current)
            window.removeEventListener("keydown", onKeyDown)
        }
    }, [isOpen, onKeyDown])

    if (lazy && !isMounted) {
=======
        [cls.isClothing] :isClothing,
    }
    const onKeyDown = useCallback((e:KeyboardEvent) =>{
        if(e.key === 'Escape'){
            closeHandler()
        }
    },[closeHandler])

    useEffect(() => {
        if(isOpen){
            window.addEventListener('keydown', onKeyDown)
        }
        return ()=>{
            clearTimeout(timerRef.current)
            window.removeEventListener('keydown', onKeyDown)

        }
    }, [isOpen, onKeyDown])

    if(lazy && !isMounted){
>>>>>>> 921c489 (fix all files and add loki)
        return null
    }
    return (
        <Portal>
            <div className={classNames(cls.Modal, mods, [className])}>
                <div onClick={() => closeHandler()} className={cls.overlay}>
                    <div onClick={(e) => e.stopPropagation()} className={cls.content}>
                        {children}
                    </div>
                </div>
            </div>
        </Portal>
    )
}

export default Modal
