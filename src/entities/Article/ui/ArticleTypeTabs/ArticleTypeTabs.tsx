import { FC, memo, useCallback, useMemo } from "react"
import { classNames } from "@/shared/lib/classNames/classNames"
import { useTranslation } from "react-i18next"
import Tabs, { TabItem } from "@/shared/ui/Tabs/Tabs"
import { ArticleType } from "../../model/const/const"

interface ArticleTypeTabsProps {
  className?: string;
  value: ArticleType;
  onChangeType: (type: ArticleType) => void;
}

const ArticleTypeTabs: FC<ArticleTypeTabsProps> = memo(({className,value,onChangeType}) => {

    const {t} = useTranslation()
    const typeTabs = useMemo<TabItem[]>(
        () => [
            {
                value: ArticleType.ALL,
                content: t("all"),
            },
            {
                value: ArticleType.IT,
                content: t("it"),
            },
            {
                value: ArticleType.SCIENCE,
                content: t("science"),
            },
            {
                value: ArticleType.ECONOMICS,
                content: t("economics"),
            },
        ],
        [t]
    )
    const onTabClick = useCallback((tab:TabItem)=>{
        onChangeType(tab.value as ArticleType)
    },[onChangeType])
    return (
        <Tabs onTabClick={onTabClick} value={value} tabs={typeTabs} className={classNames("", {}, [className])}/>
    )
})

export default ArticleTypeTabs
