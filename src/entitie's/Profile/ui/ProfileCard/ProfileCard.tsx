import {FC} from "react"
import {classNames, Mods} from "shared/lib/classNames/classNames"
import cls from "./ProfileCard.module.scss"
import {useTranslation} from "react-i18next"
import Text, {TextAlign, TextTheme} from "shared/ui/Text/Text"
import Input, {InputTheme} from "shared/ui/Input/Input"
import {Profile} from "../../model/types/profile"
import Loader from "shared/ui/Loader/Loader"
import Avatar from "shared/ui/Avatar/Avatar"
import {Currency, CurrencySelect} from "entitie's/Currency"
import {Country, CountrySelect} from "entitie's/Country"

interface ProfileCardProps {
  className?: string;
  data?: Profile;
  isLoading?: boolean;
  errors?: string;
  readonly?: boolean;
  onChangeFirstname?: (value?: string) => void;
  onChangeLastname?: (value?: string) => void;
  onChangeAge?: (value?: string) => void;
  onChangeCity?: (value?: string) => void;
  onChangeUsername?: (value?: string) => void;
  onChangeAvatar?: (value?: string) => void;
  onChangeCurrency: (currency: Currency) => void;
  onChangeCountry: (country: Country) => void;
}

const ProfileCard: FC<ProfileCardProps> = (props) => {
    const {
        className,
        data,
        errors,
        isLoading,
        onChangeLastname,
        onChangeFirstname,
        onChangeCity,
        onChangeAge,
        onChangeUsername,
        onChangeAvatar,
        onChangeCurrency,
        onChangeCountry,
        readonly,
    } = props
    const { t } = useTranslation()

    const mods: Mods = {
        [cls.editing]: !readonly,
    }

    if (isLoading) {
        return (
            <div
                className={classNames(cls.ProfileCard, {}, [className, cls.loading])}
            >
                <Loader />
            </div>
        )
    }
    if (errors) {
        return (
            <div className={classNames(cls.ProfileCard, {}, [className, cls.error])}>
                <Text
                    align={TextAlign.CENTER}
                    theme={TextTheme.ERROR}
                    title={t("There was an error loading the profile")}
                    text={t("Try refreshing the page")}
                />
            </div>
        )
    }
    return (
        <div className={classNames(cls.ProfileCard, mods, [className])}>
            <div className={cls.data}>
                {data?.avatar && (
                    <div className={cls.avatarWrapper}>
                        <Avatar size={150} src={data?.avatar} className={cls.avatar} />
                    </div>
                )}
                <div className={cls.fields}>
                    <Text text={t("Your name")}></Text>
                    <Input
                        onChange={onChangeFirstname}
                        readonly={readonly}
                        theme={InputTheme.OUTLINE}
                        className={cls.input}
                        value={data?.first}
                        placeholder={t("Your name")}
                    ></Input>
                </div>
                <div className={cls.fields}>
                    <Text text={t("Your lastname")}></Text>
                    <Input
                        onChange={onChangeLastname}
                        readonly={readonly}
                        theme={InputTheme.OUTLINE}
                        className={cls.input}
                        value={data?.lastname}
                        placeholder={t("Your lastname")}
                    ></Input>
                </div>
                <div className={cls.fields}>
                    <Text text={t("Your username")}></Text>
                    <Input
                        onChange={onChangeUsername}
                        readonly={readonly}
                        theme={InputTheme.OUTLINE}
                        className={cls.input}
                        value={data?.username}
                        placeholder={t("Your username")}
                    ></Input>
                </div>
                <div className={cls.fields}>
                    <Text text={t("Your age")}></Text>
                    <Input
                        type={"number"}
                        onChange={onChangeAge}
                        readonly={readonly}
                        theme={InputTheme.OUTLINE}
                        className={cls.input}
                        value={data?.age}
                        placeholder={t("Your age")}
                    ></Input>
                </div>
                <div className={cls.fields}>
                    <Text text={t("Your city")}></Text>
                    <Input
                        onChange={onChangeCity}
                        readonly={readonly}
                        theme={InputTheme.OUTLINE}
                        className={cls.input}
                        value={data?.city}
                        placeholder={t("Your city")}
                    ></Input>
                </div>
                <div className={cls.fields}>
                    <Text text={t("Your avatar")}></Text>
                    <Input
                        onChange={onChangeAvatar}
                        readonly={readonly}
                        theme={InputTheme.OUTLINE}
                        className={cls.input}
                        value={data?.avatar}
                        placeholder={t("Your avatar")}
                    ></Input>
                </div>
                <div className={cls.fields}>
                    <CurrencySelect readonly={readonly} onChange={onChangeCurrency} value={data?.currency} />
                </div>
                <div className={cls.fields}>
                    <CountrySelect readonly={readonly} onChange={onChangeCountry} value={data?.country} />
                </div>
            </div>
        </div>
    )
}

export default ProfileCard
