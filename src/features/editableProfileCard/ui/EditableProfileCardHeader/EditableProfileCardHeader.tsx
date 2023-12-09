import { FC, useCallback } from "react"
import { useTranslation } from "react-i18next"
import Text from "@/shared/ui/Text/Text"
import Button, { ButtonSize, ButtonTheme } from "@/shared/ui/Button/Button"
import { useSelector } from "react-redux"
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch/useAppDispatch"
import { getUserAuthData } from "@/entities/User"
import { HStack } from "@/shared/ui/Stack"
import { getProfileData } from "../../model/selectors/getProfileData/getProfileData"
import { getProfileReadonly } from "../../model/selectors/getProfileReadonly/getProfileReadonly"
import { getProfileError } from "../../model/selectors/getProfileError/getProfileError"
import { profileActions } from "../../model/slice/profileSlice"
import { updateProfileData } from "../../model/services/updateProfileData/updateProfileData"

const EditableProfileCardHeader: FC = () => {
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
                            data-testid={"EditableProfileCardHeader.EditButton"}
                            size={ButtonSize.L}
                            onClick={onEdit}
                            theme={ButtonTheme.OUTLINE}
                        >
                            {t("edit")}
                        </Button>
                    ) : (
                        <>
                            <Button
                                data-testid={"EditableProfileCardHeader.CancelButton"}
                                size={ButtonSize.L}
                                onClick={onCancelEdit}
                                theme={ButtonTheme.OUTLINE}
                            >
                                {t("cancel")}
                            </Button>

                            <Button
                                data-testid={"EditableProfileCardHeader.SaveButton"}
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

export default EditableProfileCardHeader
