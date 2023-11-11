<<<<<<< HEAD
import {FC, memo, useCallback} from "react"
import {classNames} from "shared/lib/classNames/classNames"
import cls from "./LoginForm.module.scss"
import {useTranslation} from "react-i18next"
import Button, {ButtonSize, ButtonTheme} from "shared/ui/Button/Button"
import Input, {InputTheme} from "shared/ui/Input/Input"
import {useDispatch, useSelector} from "react-redux"
import Text, {TextTheme} from "shared/ui/Text/Text"
import i18n from "shared/config/i18n/i18n"
import {AppDispatch, loginByUsername} from "features/AuthByUsername"
import {loginActions, loginReducer,} from "features/AuthByUsername/model/slice/loginSlice"
import {getLoginUsername} from "../../model/selectors/getLoginUsername/getLoginUsername"
import {getLoginPassword} from "../../model/selectors/getLoginPassword/getLoginPassword"
import {getLoginLoading} from "../../model/selectors/getLoginLoading/getLoginLoading"
import {getLoginError} from "../../model/selectors/getLoginError/getLoginError"
import DynamicModuleLoader, {ReducersList,} from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader"
import Loader from "shared/ui/Loader/Loader"
=======
import { FC, memo, useCallback } from "react"
import { classNames } from "shared/lib/classNames/classNames"
import cls from "./LoginForm.module.scss"
import { useTranslation } from "react-i18next"
import Button, { ButtonSize, ButtonTheme } from "shared/ui/Button/Button"
import Input, { InputTheme } from "shared/ui/Input/Input"
import { useDispatch, useSelector } from "react-redux"
import Text, { TextTheme } from "shared/ui/Text/Text"
import i18n from "shared/config/i18n/i18n"
import { AppDispatch, loginByUsername } from "features/AuthByUsername"
import {
    loginActions,
    loginReducer,
} from "features/AuthByUsername/model/slice/loginSlice"
import { getLoginUsername } from "../../model/selectors/getLoginUsername/getLoginUsername"
import { getLoginPassword } from "../../model/selectors/getLoginPassword/getLoginPassword"
import { getLoginLoading } from "../../model/selectors/getLoginLoading/getLoginLoading"
import { getLoginError } from "../../model/selectors/getLoginError/getLoginError"
import DynamicModuleLoader, {
    ReducersList,
} from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader"
>>>>>>> 921c489 (fix all files and add loki)

export interface LoginFormProps {
  className?: string;
}


const initialReducers:ReducersList ={
    loginForm:loginReducer
}

// eslint-disable-next-line react/display-name
const LoginForm: FC<LoginFormProps> = memo(({ className }) => {
    const { t } = useTranslation()
    const username = useSelector(getLoginUsername)
    const password = useSelector(getLoginPassword)
    const isLoading = useSelector(getLoginLoading)
    const error = useSelector(getLoginError)
    const dispatch:AppDispatch = useDispatch()
    const onChangeUsername = useCallback(
        (value: string) => {
            dispatch(loginActions.setUsername(value))
        },
        [dispatch]
    )
    const onChangePassword = useCallback(
        (value: string) => {
            dispatch(loginActions.setPassword(value))
        },
        [dispatch]
    )

    const onLoginClick = useCallback(() => {
        dispatch(loginByUsername({ username, password }))
    }, [dispatch, password, username])
<<<<<<< HEAD
    if(isLoading){
        return (
            <div className={cls.loaderWrapper}>
                <Loader/>
            </div>
        )
    }
=======
>>>>>>> 921c489 (fix all files and add loki)
    return (
        <DynamicModuleLoader reducer={initialReducers} removeAfterUnmount={true}>
            <div className={classNames(cls.LoginForm, {}, [className])}>
                <Text className={cls.title} title={t("Authorization")}/>
                {
                    error && <Text className={cls.error}
                        text={i18n.t('You entered an incorrect username or password')}
                        theme={TextTheme.ERROR}/>
                }
                <Input
                    theme={InputTheme.OUTLINE}
                    className={cls.input}
                    placeholder={t("Enter username...")}
                    type="text"
                    onChange={onChangeUsername}
                    value={username}
                />
                <Input
                    theme={InputTheme.OUTLINE}
                    className={cls.input}
                    placeholder={t("Enter password...")}
                    type="text"
                    onChange={onChangePassword}
                    value={password}
                />
                <Button
                    disabled={isLoading}
                    onClick={onLoginClick}
                    size={ButtonSize.FULL}
                    theme={ButtonTheme.FILL}
                >
                    {t("log in")}
                </Button>
            </div>
        </DynamicModuleLoader>
    )
})
export default LoginForm
