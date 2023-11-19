import {BookAudio, Home, ListTree, LucideIcon, User} from "lucide-react"
import {RouterPath} from "shared/config/routeConfig/routeConfig"

export interface SidebarItemType {
  path: string;
  text: string;
  Icon: LucideIcon;
  authOnly?: boolean;
}

export const SidebarItemsList: SidebarItemType[] = [
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
    {
        path: RouterPath.profile,
        Icon: User,
        text: "Profile",
        authOnly: true,
    },
    {
        path: RouterPath.articles,
        Icon: ListTree,
        text: "Articles",
        authOnly: true,
    },
]