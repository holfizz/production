import {createSelector} from "@reduxjs/toolkit"
import {getUserAuthData} from "entitie/User"
import {RouterPath} from "shared/config/routeConfig/routeConfig"
import {BookAudio, Home, ListTree, User} from "lucide-react"

import {SidebarItemType} from "widgets/sidebar/module/types/sidebar"

export const getSidebarItems = createSelector(getUserAuthData, (userData) => {
    const SidebarItemsList: SidebarItemType[] = [
        {
            path: RouterPath.main,
            Icon: Home,
            text: "Main",
        },
        {
            path: RouterPath.about,
            Icon: BookAudio,
            text: "About",
        },
    ]
    if (userData) {
        SidebarItemsList.push(
            {
                path: RouterPath.profile + userData.id,
                Icon: User,
                text: "Profile",
                authOnly: true,
            },
            {
                path: RouterPath.articles,
                Icon: ListTree,
                text: "Articles",
                authOnly: true,
            }
        )
    }
    return SidebarItemsList
})
