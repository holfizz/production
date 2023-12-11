import { createSelector } from "@reduxjs/toolkit"
import { getUserAuthData } from "@/entities/User"
import { BookAudio, Home, ListTree, User } from "lucide-react"

import { SidebarItemType } from "../../module/types/sidebar"
import { RoutePath } from "@/shared/const/router"

export const getSidebarItems = createSelector(getUserAuthData, (userData) => {
    const SidebarItemsList: SidebarItemType[] = [
        {
            path: RoutePath.main,
            Icon: Home,
            text: "Main",
        },
        {
            path: RoutePath.about,
            Icon: BookAudio,
            text: "About",
        },
    ]
    if (userData) {
        SidebarItemsList.push(
            {
                path: RoutePath.profile + userData.id,
                Icon: User,
                text: "Profile",
                authOnly: true,
            },
            {
                path: RoutePath.articles,
                Icon: ListTree,
                text: "Articles",
                authOnly: true,
            }
        )
    }
    return SidebarItemsList
})
