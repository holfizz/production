import { FC, useCallback } from "react"
import { useTranslation } from "react-i18next"
import Text from "shared/ui/Text/Text"
import Button, { ButtonSize, ButtonTheme } from "shared/ui/Button/Button"
import { useSelector } from "react-redux"
import {
    getProfileData,
    getProfileError,
    getProfileReadonly,
    profileActions,
    updateProfileData,
} from "entity/Profile"
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch"
import { getUserAuthData } from "entity/User"
import { HStack } from "shared/ui/Stack"

const ProfilePageHeader: FC = () => {
    const { t } = useTranslation()
    const authData = useSelector(getUserAuthData)
    const profileData = useSelector(getProfileData)
    const canEdit = authData?.id === profileData?.id
    const readonly = useSelector(getProfileReadonly)
    const error = useSelector(getProfileError)
    const dispatch = useAppDispatch()
    const onEdit = useCallback(() => {
        dispatch(profileActions.setReadonly(false))
    }, [dispatch])
    const onCancelEdit = useCallback(() => {
        dispatch(profileActions.cancelEdit())
    }, [dispatch])
    const onSave = useCallback(() => {
        dispatch(updateProfileData())
        dispatch(profileActions.setReadonly(true))
    }, [dispatch])
    if (error) {
        return null
    }
    return (
        <HStack max justify={"between"}>
            <Text text={t("Profile")} />
            {canEdit && (
                <HStack justify={"end"} gap={"16"}>
                    {readonly ? (
                        <Button
                            size={ButtonSize.L}
                            onClick={onEdit}
                            theme={ButtonTheme.OUTLINE}
                        >
                            {t("edit")}
                        </Button>
                    ) : (
                        <>
                            <Button
                                size={ButtonSize.L}
                                onClick={onCancelEdit}
                                theme={ButtonTheme.OUTLINE}
                            >
                                {t("cancel")}
                            </Button>

                            <Button
                                size={ButtonSize.L}
                                onClick={onSave}
                                theme={ButtonTheme.OUTLINE_SECONDARY}
                            >
                                {t("Save")}
                            </Button>
                        </>
                    )}
                </HStack>
            )}
        </HStack>
    )
}

export default ProfilePageHeader
