import {type FC, memo, useMemo, useState} from "react"
import {classNames} from "shared/lib/classNames/classNames"
import cls from "./Sidebar.module.scss"
import {LangSwitcher} from "widgets/langSwitcher"
import {ThemeSwitcher} from "widgets/themeSwitcher"
import {ChevronLeft, ChevronRight} from "lucide-react"

import SidebarItem from "widgets/sidebar/ui/SidebarItem/SidebarItem"
import {useSelector} from "react-redux"
import {getSidebarItems} from "widgets/sidebar/module/selectors/getSidebarItems"

interface SidebarProps {
  className?: string;
}

const Sidebar: FC<SidebarProps> = memo(({ className }) => {
    const [collapsed, setCollapsed] = useState<boolean>(false)
    let classLink = [cls.linkName, collapsed && cls.collapsedLink].join(" ")
    const onToggle = () => {
        setCollapsed((prevState) => !prevState)
    }
    const sidebarItemsList = useSelector(getSidebarItems)
    const itemList = useMemo(() => {
        return sidebarItemsList.map((item) => {
            return <SidebarItem key={item.path} className={classLink} item={item} />
        })
    }, [classLink, sidebarItemsList])
    return (
        <div
            data-testid="sidebar"
            className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [
                className,
            ])}
        >
            <button
                className={cls.SidebarCollapsed}
                data-testid={"sidebar-toggle"}
                onClick={onToggle}
            >
                <div className={cls.buttonCollapsed}>
                    {collapsed ? <ChevronRight /> : <ChevronLeft />}
                </div>
            </button>
            <div className={cls.links}>
                {itemList}
            </div>
            <div className={cls.switchers}>
                <LangSwitcher />
                <ThemeSwitcher />
            </div>
        </div>
    )
})

export default Sidebar
