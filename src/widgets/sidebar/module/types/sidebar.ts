import {LucideIcon} from "lucide-react"

export interface SidebarItemType {
  path: string;
  text: string;
  Icon: LucideIcon;
  authOnly?: boolean;
}
