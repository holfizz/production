import { type FC, memo, useEffect, useState } from "react"
import { classNames } from "shared/lib/classNames/classNames"
import cls from "./Navbar.module.scss"
import { useTranslation } from "react-i18next"
import Button, { ButtonSize, ButtonTheme } from "shared/ui/Button/Button"
import { LogIn, Snail } from "lucide-react"
import { LoginModal } from "features/AuthByUsername"
import { getUserAuthData } from "entity/User"
import { useSelector } from "react-redux"
import AppLink from "shared/ui/AppLink/AppLink"
import { RouterPath } from "shared/config/routeConfig/routeConfig"
import Text, { TextSize } from "shared/ui/Text/Text"
import { HStack } from "shared/ui/Stack"
import { NotificationButton } from "features/notificationButton"
import { AvatarDropdown } from "features/avatarDropdown"

interface NavbarProps {
  className?: string;
}

const Navbar: FC<NavbarProps> = memo(({ className }) => {
    const { t } = useTranslation()
    const [isAuthModal, setIsAuthModal] = useState<boolean>(false)
    const authData = useSelector(getUserAuthData)

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
                <AppLink className={cls.createBtn} to={RouterPath.article_create}>
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
                    onClick={() => setIsAuthModal(true)}
                    theme={ButtonTheme.OUTLINE}
                    size={ButtonSize.XL}
                >
                    {t("log in")}
                    <LogIn />
                </Button>
                <LoginModal isOpen={isAuthModal} onClose={setIsAuthModal} />
            </div>
        </header>
    )
})

export default Navbar
