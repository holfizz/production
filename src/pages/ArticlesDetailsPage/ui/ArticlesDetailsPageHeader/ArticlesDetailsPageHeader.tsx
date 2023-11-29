import { FC, memo, useCallback } from "react"
import { classNames } from "shared/lib/classNames/classNames"
import { useTranslation } from "react-i18next"
import Button, { ButtonTheme } from "shared/ui/Button/Button"
import { RouterPath } from "shared/config/routeConfig/routeConfig"
import { useNavigate } from "react-router-dom"
import { useSelector } from "react-redux"
import { getCanEditArticle } from "../../model/selectors/article"
import { getArticleDetailsData } from "entity/Article"
import { HStack } from "shared/ui/Stack"

interface ArticlesDetailsPageHeaderProps {
  className?: string;
}

const ArticlesDetailsPageHeader: FC<ArticlesDetailsPageHeaderProps> = memo(
    ({ className }) => {
        const { t } = useTranslation("article-details")
        const navigate = useNavigate()
        const article = useSelector(getArticleDetailsData)

        const backToList = useCallback(() => {
            navigate(RouterPath.articles)
        }, [navigate])
        const onEditArticle = useCallback(() => {
            navigate(`${RouterPath.articles}/${article?.id}/edit`)
        }, [article?.id, navigate])
        const canEdit = useSelector(getCanEditArticle)
        return (
            <HStack max justify={'between'}
                className={classNames('', {}, [className])}
            >
                <Button theme={ButtonTheme.OUTLINE} onClick={backToList}>
                    {t("Back to list")}
                </Button>
                {canEdit && (
                    <Button theme={ButtonTheme.OUTLINE} onClick={onEditArticle}>
                        {t("Edit")}
                    </Button>
                )}
            </HStack>
        )
    }
)

export default ArticlesDetailsPageHeader
