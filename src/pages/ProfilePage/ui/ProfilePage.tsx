import {FC, useEffect} from "react"
import {classNames} from "shared/lib/classNames/classNames"
import {useTranslation} from "react-i18next"
import DynamicModuleLoader, {ReducersList} from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader"
import {fetchProfileData, ProfileCard, profileReducer} from "entitie's/Profile"
import {useAppDispatch} from "shared/lib/hooks/useAppDispatch"


const reducers:ReducersList = {
    profile:profileReducer
}

interface ProfilePageProps {
  className?: string;
}

const ProfilePage: FC<ProfilePageProps> = ({className}) => {

    const {t} = useTranslation("profile")
    const dispatch = useAppDispatch()
    useEffect(() => {
        dispatch(fetchProfileData())
    }, [dispatch])

    return (
        <DynamicModuleLoader reducer={reducers} removeAfterUnmount>
            <div className={classNames('', {}, [className])}>
                <ProfileCard/>
            </div>
        </DynamicModuleLoader>
    )
}

export default ProfilePage
