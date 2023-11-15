import {FC, useCallback} from "react"
import {classNames} from "shared/lib/classNames/classNames"
import cls from "./ProfilePageHeader.module.scss"
import {useTranslation} from "react-i18next"
import Text from "shared/ui/Text/Text"
import Button, {ButtonSize, ButtonTheme} from "shared/ui/Button/Button"
import {useSelector} from "react-redux"
import {getProfileError, getProfileReadonly, profileActions, updateProfileData} from "entitie's/Profile"
import {useAppDispatch} from "shared/lib/hooks/useAppDispatch"


interface ProfilePageHeaderProps {
  className?: string;
}

const ProfilePageHeader: FC<ProfilePageHeaderProps> = ({ className }) => {
    const { t } = useTranslation()
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
    }, [dispatch])
    if(error){
        return null
    }
    return (
        <div className={classNames(cls.ProfilePageHeader, {}, [className])}>
            <Text text={t("Profile")} />
            {readonly ? (
                <Button
                    size={ButtonSize.L}
                    onClick={onEdit}
                    className={cls.editBtn}
                    theme={ButtonTheme.OUTLINE}
                >
                    {t("edit")}
                </Button>
            ) : (
                <>
                    <Button
                        size={ButtonSize.L}
                        onClick={onCancelEdit}
                        className={cls.editBtn}
                        theme={ButtonTheme.OUTLINE}
                    >
                        {t("cancel")}
                    </Button>

                    <Button
                        size={ButtonSize.L}
                        onClick={onSave}
                        className={cls.saveBtn}
                        theme={ButtonTheme.OUTLINE_SECONDARY}
                    >
                        {t("Save")}
                    </Button>
                </>
            )}
        </div>
    )
}

export default ProfilePageHeader
