import {BookAudio, Home, LucideIcon, User} from "lucide-react"
import {RouterPath} from "shared/config/routeConfig/routeConfig"

export interface SidebarItemType {
  path: string;
  text: string;
  Icon: LucideIcon;
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
    },
]
