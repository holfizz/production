import {FC, useCallback, useEffect} from "react"
import {classNames} from "shared/lib/classNames/classNames"
import DynamicModuleLoader, {ReducersList,} from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader"
import {
    fetchProfileData,
    getProfileError,
    getProfileForm,
    getProfileIsLoading,
    getProfileReadonly,
    profileActions,
    ProfileCard,
    profileReducer,
} from "entitie/Profile"
import {useAppDispatch} from "shared/lib/hooks/useAppDispatch"
import {useSelector} from "react-redux"
import ProfilePageHeader from "./ProfilePageHeader/ProfilePageHeader"
import {Currency} from "entitie/Currency"
import {Country} from "entitie/Country"
import {
    getProfileValidateErrors
} from "entitie/Profile/model/selectors/getProfileValidateErrors/getProfileValidateErrors"
import Text, {TextTheme} from "shared/ui/Text/Text"
import {ValidateProfileErrors} from "entitie/Profile/model/types/profile"
import {useTranslation} from "react-i18next"

const reducers: ReducersList = {
    profile: profileReducer,
}

interface ProfilePageProps {
  className?: string;
}

const ProfilePage: FC<ProfilePageProps> = ({ className }) => {
    const dispatch = useAppDispatch()
    const {t} = useTranslation('profile')
    const formData = useSelector(getProfileForm)
    const validateErrors = useSelector(getProfileValidateErrors)
    const serverError = useSelector(getProfileError)
    const isLoading = useSelector(getProfileIsLoading)
    const readonly = useSelector(getProfileReadonly)

    const validateErrorTranslate = {
        [ValidateProfileErrors.INCORRECT_USER_DATA]:t('Incorrect user'),
        [ValidateProfileErrors.SERVER_ERROR]:t('Server Error'),
        [ValidateProfileErrors.INCORRECT_COUNTY]:t('Incorrect country'),
        [ValidateProfileErrors.INCORRECT_AGE]:t('Incorrect age'),
        [ValidateProfileErrors.NO_DATA]:t('Data not provided'),
    }
    useEffect(() => {
        if(__PROJECT__!=='storybook'){
            dispatch(fetchProfileData())
        }
    }, [dispatch])
    const onChangeFirstname = useCallback(
        (value?: string) => {
            dispatch(profileActions.updateProfile({ first: value || "" }))
        },
        [dispatch]
    )
    const onChangeLastname = useCallback(
        (value?: string) => {
            console.log(value)

            dispatch(profileActions.updateProfile({ lastname: value || "" }))
        },
        [dispatch]
    )
    const onChangeAge = useCallback(
        (value?: string) => {
            dispatch(profileActions.updateProfile({ age: Number(value || 0) }))
        },
        [dispatch]
    )
    const onChangeCity = useCallback(
        (value?: string) => {
            dispatch(profileActions.updateProfile({ lastname: value || "" }))
        },
        [dispatch]
    )
    const onChangeUsername = useCallback(
        (value?: string) => {
            dispatch(profileActions.updateProfile({ username: value || "" }))
        },
        [dispatch]
    )
    const onChangeAvatar = useCallback(
        (value?: string) => {
            dispatch(profileActions.updateProfile({ avatar: value || "" }))
        },
        [dispatch]
    )
    const onChangeCurrency = useCallback(
        (currency: Currency) => {
            dispatch(profileActions.updateProfile({ currency }))
        },
        [dispatch]
    )
    const onChangeCountry = useCallback(
        (country: Country) => {
            dispatch(profileActions.updateProfile({ country }))
        },
        [dispatch]
    )
    return (
        <DynamicModuleLoader reducer={reducers} removeAfterUnmount>
            <ProfilePageHeader />
            {validateErrors?.length && validateErrors.map((err) => (
                <Text key={err} theme={TextTheme.ERROR} text={validateErrorTranslate[err]} />
            ))}
            <div className={classNames("", {}, [className])}>
                <ProfileCard
                    data={formData}
                    isLoading={isLoading}
                    errors={serverError}
                    readonly={readonly}
                    onChangeFirstname={onChangeFirstname}
                    onChangeLastname={onChangeLastname}
                    onChangeAge={onChangeAge}
                    onChangeCity={onChangeCity}
                    onChangeUsername={onChangeUsername}
                    onChangeAvatar={onChangeAvatar}
                    onChangeCurrency={onChangeCurrency}
                    onChangeCountry={onChangeCountry}
                />
            </div>
        </DynamicModuleLoader>
    )
}

export default ProfilePage
