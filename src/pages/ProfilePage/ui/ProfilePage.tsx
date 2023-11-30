import { FC, useCallback } from "react"
import DynamicModuleLoader, {
    ReducersList,
} from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader"
import {
    fetchProfileData,
    getProfileError,
    getProfileForm,
    getProfileIsLoading,
    getProfileReadonly,
    profileActions,
    ProfileCard,
    profileReducer,
} from "entity/Profile"
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch"
import { useSelector } from "react-redux"
import ProfilePageHeader from "./ProfilePageHeader/ProfilePageHeader"
import { Currency } from "entity/Currency"
import { Country } from "entity/Country"
import { getProfileValidateErrors } from "entity/Profile/model/selectors/getProfileValidateErrors/getProfileValidateErrors"
import Text, { TextTheme } from "shared/ui/Text/Text"
import { ValidateProfileErrors } from "entity/Profile/model/types/profile"
import { useTranslation } from "react-i18next"
import { useInitialEffect } from "shared/lib/hooks/useInitialEffect/useInitialEffect"
import { useParams } from "react-router-dom"
import { Page } from "widgets/page"
import { VStack } from "shared/ui/Stack"

const reducers: ReducersList = {
    profile: profileReducer,
}

const ProfilePage: FC = () => {
    const dispatch = useAppDispatch()
    const { t } = useTranslation("profile")
    const formData = useSelector(getProfileForm)
    const validateErrors = useSelector(getProfileValidateErrors)
    const serverError = useSelector(getProfileError)
    const isLoading = useSelector(getProfileIsLoading)
    const readonly = useSelector(getProfileReadonly)
    const { id } = useParams<{ id: string }>()

    const validateErrorTranslate = {
        [ValidateProfileErrors.INCORRECT_USER_DATA]: t("Incorrect user"),
        [ValidateProfileErrors.SERVER_ERROR]: t("Server Error"),
        [ValidateProfileErrors.INCORRECT_COUNTY]: t("Incorrect country"),
        [ValidateProfileErrors.INCORRECT_AGE]: t("Incorrect age"),
        [ValidateProfileErrors.NO_DATA]: t("Data not provided"),
    }
    useInitialEffect(() => {
        if (id) {
            dispatch(fetchProfileData(id))
        }
    })
    const onChangeFirstname = useCallback(
        (value?: string) => {
            dispatch(profileActions.updateProfile({ first: value || "" }))
        },
        [dispatch]
    )
    const onChangeLastname = useCallback(
        (value?: string) => {
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
            dispatch(profileActions.updateProfile({ city: value || "" }))
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
        <DynamicModuleLoader reducer={reducers}>
            <Page>
                <VStack max gap={"16"}>
                    <ProfilePageHeader />
                    {validateErrors?.length &&
            validateErrors.map((err) => (
                <Text
                    key={err}
                    theme={TextTheme.ERROR}
                    text={validateErrorTranslate[err]}
                />
            ))}
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
                </VStack>
            </Page>
        </DynamicModuleLoader>
    )
}

export default ProfilePage
