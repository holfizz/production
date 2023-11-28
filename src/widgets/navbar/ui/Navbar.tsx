import {type FC, memo, useCallback, useEffect, useState} from "react"
import {classNames} from "shared/lib/classNames/classNames"
import cls from "./Navbar.module.scss"
import {useTranslation} from "react-i18next"
import Button, {ButtonSize, ButtonTheme} from "shared/ui/Button/Button"
import {ArrowBigLeft, LogIn, Snail} from "lucide-react"
import {LoginModal} from "features/AuthByUsername"
import {getUserAuthData, userActions} from "entity/User"
import {useDispatch, useSelector} from "react-redux"
import AppLink from "shared/ui/AppLink/AppLink"
import {RouterPath} from "shared/config/routeConfig/routeConfig"
import Text, {TextSize} from "shared/ui/Text/Text"

interface NavbarProps {
  className?: string;
}

const Navbar: FC<NavbarProps> = memo(({ className }) => {
    const { t } = useTranslation()
    const [isAuthModal, setIsAuthModal] = useState<boolean>(false)
    const authData = useSelector(getUserAuthData)
    const dispatch = useDispatch()

    const onLogout = useCallback(() => {
        dispatch(userActions.logout())
    }, [dispatch])
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
                <div className={cls.links}>
                    <Button
                        onClick={onLogout}
                        theme={ButtonTheme.OUTLINE}
                        size={ButtonSize.XL}
                    >
                        {t("log out")}
                        <ArrowBigLeft />
                    </Button>
                </div>
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
