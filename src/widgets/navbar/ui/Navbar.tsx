<<<<<<< HEAD
import {type FC, useCallback, useEffect, useState} from "react"
=======
import {type FC, useCallback, useState} from "react"
>>>>>>> 921c489 (fix all files and add loki)
import {classNames} from "shared/lib/classNames/classNames"
import cls from "./Navbar.module.scss"
import {useTranslation} from "react-i18next"
import Button, {ButtonSize, ButtonTheme} from "shared/ui/Button/Button"
<<<<<<< HEAD
import {ArrowBigLeft, LogIn} from "lucide-react"
import {LoginModal} from "features/AuthByUsername"
import {getUserAuthData, userActions} from "entitie's/User"
=======
import {LogIn} from "lucide-react"
import {LoginModal} from "features/AuthByUsername"
import {getUserAuthData, userActions} from "entitie\'s/User"
>>>>>>> 921c489 (fix all files and add loki)
import {useDispatch, useSelector} from "react-redux"

interface NavbarProps {
  className?: string;
}

const Navbar: FC<NavbarProps> = ({ className }) => {
<<<<<<< HEAD
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
            <div className={classNames(cls.Navbar, {}, [className])}>
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
            </div>
        )
    }
    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
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
=======
    const {t} = useTranslation()
    const [isAuthModal, setIsAuthModal]  = useState<boolean>(false)
    const authData = useSelector(getUserAuthData)
    const dispatch = useDispatch()

    const onLogout = useCallback(()=>{
        dispatch(userActions.logout())
    },[dispatch])

    if(authData){
        return ( <div className={classNames(cls.Navbar, {}, [className])}>

            <div className={cls.links}>
                <Button
                    onClick={onLogout}
                    theme={ButtonTheme.OUTLINE} size={ButtonSize.XL}
                >
                    {t('log out')}
                    <LogIn />
                </Button>
            </div>
        </div>)
    }
    return (
        <div className={classNames(cls.Navbar, {}, [className])}>

            <div className={cls.links}>
                <Button
                    onClick={()=> setIsAuthModal(true)}
                    theme={ButtonTheme.OUTLINE} size={ButtonSize.XL}
                >
                    {t('log in')}
                    <LogIn />
                </Button>
                <LoginModal isOpen={isAuthModal} onClose={setIsAuthModal}/>
>>>>>>> 921c489 (fix all files and add loki)
            </div>
        </div>
    )
}

export default Navbar
