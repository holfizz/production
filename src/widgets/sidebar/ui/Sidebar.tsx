import { type FC, useState } from "react"
import { classNames } from "shared/lib/classNames/classNames"
import cls from "./Sidebar.module.scss"
import { LangSwitcher } from "widgets/langSwitcher"
import { ThemeSwitcher } from "widgets/themeSwitcher"
import { BookAudio, ChevronLeft, ChevronRight, Home } from "lucide-react"
import AppLink from "shared/ui/AppLink/AppLink"
import { useTranslation } from "react-i18next"

interface SidebarProps {
  className?: string;
}

const Sidebar: FC<SidebarProps> = ({ className }) => {
    const [collapsed, setCollapsed] = useState<boolean>(false)
    const { t } = useTranslation()

    const onToggle = () => {
        setCollapsed((prevState) => !prevState)
    }
    let classLink = [cls.linkName, collapsed && cls.collapsedLink].join(' ')
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
                    {collapsed ? (
                        <ChevronRight />

                    ) : (
                        <ChevronLeft />

                    )}
                </div>
            </button>
            <div className={cls.links}>
                <AppLink to={'/'} className={cls.link}>
                    <Home />
                    <div className={classLink}>
                        <div>{t('main')}</div>
                    </div>
                </AppLink>
                <AppLink to={'/about'} className={cls.link}>
                    <BookAudio />
                    <div className={classLink}>
                        <div>{t('about')}</div>

                    </div>
                </AppLink>
            </div>
            <div className={cls.switchers}>
                <LangSwitcher />
                <ThemeSwitcher />
            </div>
        </div>
    )
}

export default Sidebar
