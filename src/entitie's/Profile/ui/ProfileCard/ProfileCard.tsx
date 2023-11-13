import {FC} from "react"
import {classNames} from "shared/lib/classNames/classNames"
import cls from "./ProfileCard.module.scss"
import {useTranslation} from "react-i18next"
import {useSelector} from "react-redux"
import {getProfileData} from "entitie's/Profile/model/selectors/getProfileData/getProfileData"
import {getProfileError} from "entitie's/Profile/model/selectors/getProfileError/getProfileError"
import {getProfileIsLoading} from "entitie's/Profile/model/selectors/getProfileIsLaading/getProfileIsLoading"
import Text from "shared/ui/Text/Text"
import Button, {ButtonTheme} from "shared/ui/Button/Button"
import Input, {InputTheme} from "shared/ui/Input/Input"

interface ProfileCardProps {
  className?: string;
}

const ProfileCard: FC<ProfileCardProps> = ({ className }) => {
    const { t } = useTranslation()
    const data = useSelector(getProfileData)
    const error = useSelector(getProfileError)
    const isLoading = useSelector(getProfileIsLoading)
    return (
        <div className={classNames(cls.ProfileCard, {}, [className])}>
            <div className={cls.header}>
                <Text text={t("Profile")} />
                <Button className={cls.editBtn} theme={ButtonTheme.OUTLINE}>
                    {t("edit")}
                </Button>
            </div>
            <div className={cls.data}>
                <div className={cls.fields}>
                    <Text text={t("Your name")}></Text>
                    <Input
                        theme={InputTheme.OUTLINE}
                        className={cls.input}
                        value={data?.first}
                        placeholder={t("Your name")}
                    ></Input>
                </div>
                <div className={cls.fields}>
                    <Text text={t("Your lastname")}></Text>
                    <Input
                        theme={InputTheme.OUTLINE}
                        className={cls.input}
                        value={data?.lastname}
                        placeholder={t("Your lastname")}
                    ></Input>
                </div>

            </div>
        </div>
    )
}

export default ProfileCard
