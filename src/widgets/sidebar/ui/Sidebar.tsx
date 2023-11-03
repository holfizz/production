import { type FC, useState } from "react"
import { classNames } from "shared/lib/classNames/classNames"
import cls from "./Sidebar.module.scss"
import { LangSwitcher } from "widgets/langSwitcher"
import { ThemeSwitcher } from "widgets/themeSwitcher"

interface SidebarProps {
  className?: string;
}

const Sidebar: FC<SidebarProps> = ({ className }) => {
    const [collapsed, setCollapsed] = useState<boolean>(false)
    const onToggle = () => {
        setCollapsed((prevState) => !prevState)
    }

    return (
        <div
            data-testid="sidebar"
            className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [
                className,
            ])}
        >
            <button data-testid={'sidebar-toggle'} onClick={onToggle}>123</button>
            <div className={cls.switchers}>
                <LangSwitcher />
                <ThemeSwitcher />
            </div>
        </div>
    )
}

export default Sidebar
