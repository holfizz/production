import {FC, memo} from "react"
import cls from "./SidebarItem.module.scss"
import {useTranslation} from "react-i18next"
import AppLink from "shared/ui/AppLink/AppLink"
import {classNames} from "shared/lib/classNames/classNames"
import {useSelector} from "react-redux"
import {getUserAuthData} from "entitie/User"
import {SidebarItemType} from "widgets/sidebar/module/types/sidebar"

interface SidebarItemProps {
  className?: string;
  item: SidebarItemType;
}

const SidebarItem: FC<SidebarItemProps> = memo(({ item, className }) => {
    const { t } = useTranslation()

    const isAuth = useSelector(getUserAuthData)
    if(item.authOnly && !isAuth){
        return null
    }
    return (
        <AppLink to={item.path} className={cls.link}>
            <item.Icon />
            <div className={classNames("", {}, [className])}>
                <div>{t(item.text)}</div>
            </div>
        </AppLink>
    )
})

export default SidebarItem
