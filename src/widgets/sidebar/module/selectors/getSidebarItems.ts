import { createSelector } from "@reduxjs/toolkit"
import { getUserAuthData } from "@/entities/User"
import { BookAudio, Home, ListTree, User } from "lucide-react"

import { SidebarItemType } from "../../module/types/sidebar"
import {
    getRouteAbout,
    getRouteArticles,
    getRouteMain,
    getRouteProfile,
} from "@/shared/const/router"

export const getSidebarItems = createSelector(getUserAuthData, (userData) => {
    const SidebarItemsList: SidebarItemType[] = [
        {
            path: getRouteMain(),
            Icon: Home,
            text: "Main",
        },
        {
            path: getRouteAbout(),
            Icon: BookAudio,
            text: "About",
        },
    ]
    if (userData) {
        SidebarItemsList.push(
            {
                path: getRouteProfile(userData.id),
                Icon: User,
                text: "Profile",
                authOnly: true,
            },
            {
                path: getRouteArticles(),
                Icon: ListTree,
                text: "Articles",
                authOnly: true,
            }
        )
    }
    return SidebarItemsList
})
