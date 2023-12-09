import {FC, memo} from "react"
import {classNames} from "@/shared/lib/classNames/classNames"
import cls from "./ArticleEditPage.module.scss"
import {useTranslation} from "react-i18next"
import {Page} from "@/widgets/page"
import {useParams} from "react-router-dom"


interface ArticleEditPageProps {
  className?: string;
}

const ArticleEditPage: FC<ArticleEditPageProps> = memo(({className}) => {

    const {t} = useTranslation("article-edit-page")
    const {id} = useParams<{id:string}>()
    const isEdit = Boolean(id)
    return (
        <Page className={classNames(cls.ArticleEditPage, {}, [className])}>
            {isEdit ? t("Edit article with ID = ") + id : t("Create new article")}
        </Page>
    )
})

export default ArticleEditPage
