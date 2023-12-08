import { FC, memo, useCallback } from "react"
import { classNames } from "shared/lib/classNames/classNames"
import cls from "./AvatarDropdown.module.scss"
import { useTranslation } from "react-i18next"
import { RouterPath } from "shared/config/routeConfig/routeConfig"
import Avatar from "shared/ui/Avatar/Avatar"
import { Dropdown } from "shared/ui/Popups"
import {
    getUserAuthData,
    isUserAdmin,
    isUserManager,
    userActions,
} from "entity/User"
import { useDispatch, useSelector } from "react-redux"

interface AvatarDropdownProps {
  className?: string;
}

const AvatarDropdown: FC<AvatarDropdownProps> = memo(({ className }) => {
    const { t } = useTranslation()
    const dispatch = useDispatch()
    const onLogout = useCallback(() => {
        dispatch(userActions.logout())
    }, [dispatch])
    const isAdmin = useSelector(isUserAdmin)
    const isManager = useSelector(isUserManager)
    const isAdminPanelAvailable = isAdmin || isManager
    const authData = useSelector(getUserAuthData)
    if (!authData) {
        return null
    }
    return (
        <Dropdown
            className={classNames(cls.AvatarDropdown, {}, [className])}
            direction={"bottom left"}
            items={[
                ...(isAdminPanelAvailable
                    ? [
                        {
                            content: t("Admin"),
                            href: RouterPath.admin_panel,
                        },
                    ]
                    : []),
                {
                    content: t("Profile"),
                    href: RouterPath.profile + authData.id,
                },
                { content: t("log out"), onClick: onLogout },
            ]}
            trigger={<Avatar size={50} src={authData.avatar} />}
        />
    )
})

export default AvatarDropdown
