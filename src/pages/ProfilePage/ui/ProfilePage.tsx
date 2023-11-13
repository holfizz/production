import {FC} from "react"
import {classNames} from "shared/lib/classNames/classNames"
import {useTranslation} from "react-i18next"
import DynamicModuleLoader, {ReducersList} from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader"
import {profileReducer} from "entitie's/Profile"


const reducers:ReducersList = {
    profile:profileReducer
}

interface ProfilePageProps {
  className?: string;
}

const ProfilePage: FC<ProfilePageProps> = ({className}) => {

    const {t} = useTranslation()

    return (
        <DynamicModuleLoader reducer={reducers} removeAfterUnmount>
            <div className={classNames('', {}, [className])}>
                {t("PROFILE PAGE")}
            </div>
        </DynamicModuleLoader>
    )
}

export default ProfilePage
