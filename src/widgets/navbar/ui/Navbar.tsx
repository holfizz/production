import { type FC, memo, useCallback, useEffect, useState } from "react"
import { classNames } from "@/shared/lib/classNames/classNames"
import cls from "./Navbar.module.scss"
import { useTranslation } from "react-i18next"
import Button, { ButtonSize, ButtonTheme } from "@/shared/ui/Button/Button"
import { LogIn, Snail } from "lucide-react"
import { LoginModal } from "@/features/AuthByUsername"
import { getUserAuthData } from "@/entities/User"
import { useSelector } from "react-redux"
import AppLink from "@/shared/ui/AppLink/AppLink"
import Text, { TextSize } from "@/shared/ui/Text/Text"
import { HStack } from "@/shared/ui/Stack"
import { NotificationButton } from "@/features/notificationButton"
import { AvatarDropdown } from "@/features/avatarDropdown"
import { RoutePath } from "@/shared/const/router"

interface NavbarProps {
  className?: string;
}

const Navbar: FC<NavbarProps> = memo(({ className }) => {
    const { t } = useTranslation()
    const authData = useSelector(getUserAuthData)
    const [isAuthModal, setIsAuthModal] = useState(false)

    const onCloseModal = useCallback(() => {
        setIsAuthModal(false)
    }, [])

    const onShowModal = useCallback(() => {
        setIsAuthModal(true)
    }, [])
    useEffect(() => {
        setIsAuthModal(false)
    }, [authData])
    if (authData) {
        return (
            <header className={classNames(cls.Navbar, {}, [className])}>
                <div className={cls.appName}>
                    <Snail size={40} className={cls.logo} />
                    <Text size={TextSize.L} text={t("articles")} />
                </div>
                <AppLink className={cls.createBtn} to={RoutePath.article_create}>
                    {t("Create article")}
                </AppLink>
                <HStack className={cls.actions} gap={"16"}>
                    <NotificationButton />
                    <AvatarDropdown />
                </HStack>
            </header>
        )
    }
    return (
        <header className={classNames(cls.Navbar, {}, [className])}>
            <div className={cls.links}>
                <Button
                    onClick={onShowModal}
                    theme={ButtonTheme.OUTLINE}
                    size={ButtonSize.XL}
                >
                    {t("log in")}
                    <LogIn />
                </Button>
                <LoginModal isOpen={isAuthModal} onClose={onCloseModal} />
            </div>
        </header>
    )
})

export default Navbar
