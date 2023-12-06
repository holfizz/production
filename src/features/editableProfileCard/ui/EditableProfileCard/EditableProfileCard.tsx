import { classNames } from "shared/lib/classNames/classNames"
import { useTranslation } from "react-i18next"
import cls from "./EditableProfileCard.module.scss"
import { memo, useCallback } from "react"
import { useSelector } from "react-redux"
import { useInitialEffect } from "shared/lib/hooks/useInitialEffect/useInitialEffect"
import { Currency } from "entity/Currency"
import { Country } from "entity/Country"
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch"
import EditableProfileCardHeader from "../EditableProfileCardHeader/EditableProfileCardHeader"
import Text, { TextTheme } from "shared/ui/Text/Text"
import { getProfileForm } from "../../model/selectors/getProfileForm/getProfileForm"
import { getProfileValidateErrors } from "../../model/selectors/getProfileValidateErrors/getProfileValidateErrors"
import { getProfileError } from "../../model/selectors/getProfileError/getProfileError"
import { getProfileIsLoading } from "../../model/selectors/getProfileIsLaading/getProfileIsLoading"
import { getProfileReadonly } from "../../model/selectors/getProfileReadonly/getProfileReadonly"
import { fetchProfileData } from "../../model/services/fetchProfileData/fetchProfileData"
import { profileActions, profileReducer } from "../../model/slice/profileSlice"
import DynamicModuleLoader, {
    ReducersList,
} from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader"
import { ProfileCard } from "entity/Profile"
import { VStack } from "shared/ui/Stack"
import { ValidateProfileErrors } from "features/editableProfileCard/model/const/const"

interface EditableProfileCardProps {
  className?: string;
  id?: string;
}

const reducers: ReducersList = {
    profile: profileReducer,
}
export const EditableProfileCard = memo((props: EditableProfileCardProps) => {
    const { className, id } = props
    const { t } = useTranslation("profile")
    const dispatch = useAppDispatch()

    const formData = useSelector(getProfileForm)
    const validateErrors = useSelector(getProfileValidateErrors)
    const serverError = useSelector(getProfileError)
    const isLoading = useSelector(getProfileIsLoading)
    const readonly = useSelector(getProfileReadonly)

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
            <VStack max gap={'16'} className={classNames(cls.EditableProfileCard, {}, [className])}>
                <EditableProfileCardHeader />
                {validateErrors?.length &&
          validateErrors.map((err: ValidateProfileErrors) => (
              <Text
                  data-testid={"EditableProfileCard.Error"}

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
        </DynamicModuleLoader>
    )
})
