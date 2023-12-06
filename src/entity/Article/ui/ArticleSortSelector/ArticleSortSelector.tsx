import { FC, memo, useMemo } from "react"
import { classNames } from "shared/lib/classNames/classNames"
import cls from "./ArticleSortSelector.module.scss"
import { useTranslation } from "react-i18next"
import Select, { SelectOption } from "shared/ui/Select/Select"
import { SortOrder } from "shared/types"
import { ArticleSortField } from "../../model/const/const"

interface ArticleSortSelectorProps {
  className?: string;
  sort: ArticleSortField;
  order: SortOrder;
  onChangeOrder: (newOrder: SortOrder) => void;
  onChangeSort: (newSort: ArticleSortField) => void;
}

const ArticleSortSelector: FC<ArticleSortSelectorProps> = memo(
    ({ className, sort, onChangeSort, onChangeOrder, order }) => {
        const { t } = useTranslation()

        const sortFieldOptions = useMemo<SelectOption<ArticleSortField>[]>(
            () => [
                {
                    value: ArticleSortField.CREATE,
                    content: t("creation date"),
                },
                {
                    value: ArticleSortField.TITLE,
                    content: t("name"),
                },
                {
                    value: ArticleSortField.VIEWS,
                    content: t("views"),
                },
            ],
            [t]
        )
        const orderOptions = useMemo<SelectOption<SortOrder>[]>(
            () => [
                {
                    value: "asc",
                    content: t("increasing"),
                },
                {
                    value: "desc",
                    content: t("decreasing"),
                },
            ],
            [t]
        )


        return (
            <div className={classNames(cls.ArticleSortSelector, {}, [className])}>
                <Select<ArticleSortField> value={sort} onChange={onChangeSort} options={sortFieldOptions} label={t("Sort by")} />
                <Select<SortOrder> className={cls.sortOrder} value={order} onChange={onChangeOrder} options={orderOptions} label={t("By")} />
            </div>
        )
    }
)

export default ArticleSortSelector
