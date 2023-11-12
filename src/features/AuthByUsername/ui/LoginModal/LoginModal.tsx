import {Dispatch, FC, SetStateAction, Suspense} from "react"
import {classNames} from "shared/lib/classNames/classNames"
import cls from "./LoginModal.module.scss"
import Modal from "shared/ui/Modal/Modal"
import LoginFormAsync from "../LoginForm/LoginForm.async"
import Loader from "shared/ui/Loader/Loader"

interface LoginModalProps {
  className?: string;
  isOpen: boolean;
  onClose: Dispatch<SetStateAction<boolean>>;
}

export const LoginModal: FC<LoginModalProps> = ({
    className,
    onClose,
    isOpen,
}) => {
    return (
        <Modal
            lazy
            isOpen={isOpen}
            onClose={onClose}
            className={classNames(cls.LoginModal, {}, [className])}
        >
            <div className={cls.wrapper}>
                <Suspense  fallback={<Loader/>}>
                    <LoginFormAsync />
                </Suspense>
            </div>
        </Modal>
    )
}

