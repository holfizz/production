import {FC, memo, ReactNode, useCallback} from "react"
import {classNames} from "shared/lib/classNames/classNames"
import cls from "./Tabs.module.scss"
import Card, {CardTheme} from "shared/ui/Card/Card"

export interface TabItem {
  value: string;
  content: ReactNode;
}

interface TabsProps {
  className?: string;
  tabs: TabItem[];
  value: string;
  onTabClick: (tab: TabItem) => void;
}

const Tabs: FC<TabsProps> = memo(({ className, tabs, onTabClick, value }) => {
    const clickHandel = useCallback((tab: TabItem) =>()=> {
        onTabClick(tab)
    }, [onTabClick])
    return (
        <div className={classNames(cls.Tabs, {}, [className])}>
            {tabs.map((tab) => (
                <Card onClick={clickHandel(tab)}
                    theme={tab.value === value ? CardTheme.NORMAL : CardTheme.OUTLINED}
                    key={tab.value}
                >
                    {tab.content}
                </Card>
            ))}
        </div>
    )
})

export default Tabs
