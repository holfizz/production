import {FC, memo, ReactNode} from "react"
import {classNames} from "shared/lib/classNames/classNames"
import cls from "./Tabs.module.scss"
import Card from "shared/ui/Card/Card"

interface TabItem {
  value:string;
  content:ReactNode
}

interface TabsProps {
  className?: string;
  tabs:TabItem[];
  value:string;
  onTabClick:(tab:TabItem) =>void
}

const Tabs: FC<TabsProps> = memo(({className, tabs, onTabClick, value}) => {
    return (
        <div className={classNames(cls.Tabs, {}, [className])}>
            {tabs.map(tab=>(
                <Card key={tab.value} className={cls.tab}>
                    {tab.content}
                </Card>
            ))}
        </div>
    )
})

export default Tabs
