import {type FC, useCallback, useState} from "react"
import {classNames} from "shared/lib/classNames/classNames"
import cls from "./Navbar.module.scss"
import {useTranslation} from "react-i18next"
import Button, {ButtonSize, ButtonTheme} from "shared/ui/Button/Button"
import {LogIn} from "lucide-react"
import {LoginModal} from "features/AuthByUsername"
import {getUserAuthData, userActions} from "entitie\'s/User"
import {useDispatch, useSelector} from "react-redux"

interface NavbarProps {
  className?: string;
}

const Navbar: FC<NavbarProps> = ({ className }) => {
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
            </div>
        </div>
    )
}

export default Navbar
