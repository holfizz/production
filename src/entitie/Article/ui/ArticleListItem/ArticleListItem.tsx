import {FC, memo, useCallback} from "react"
import {classNames} from "shared/lib/classNames/classNames"
import cls from "./ArticleListItem.module.scss"
import {useTranslation} from "react-i18next"
import {Article, ArticleBlockType, ArticleTextBlock, ArticleView,} from "../../model/types/article"
import Text from "shared/ui/Text/Text"
import Card from "shared/ui/Card/Card"
import Avatar from "shared/ui/Avatar/Avatar"
import Icon from "shared/ui/Icon/Icon"
import {Eye} from "lucide-react"
import Button, {ButtonTheme} from "shared/ui/Button/Button"
import ArticleTextBlockComponent from "../ArticleTextBlockComponent/ArticleTextBlockComponent"
import {RouterPath} from "shared/config/routeConfig/routeConfig"
import {useNavigate} from "react-router-dom"

interface ArticleListItemProps {
  className?: string;
  article: Article;
  view: ArticleView;
}

const ArticleListItem: FC<ArticleListItemProps> = memo(
    ({ className, article, view }) => {
        const { t } = useTranslation()
        const navigate = useNavigate()

        const onOpenArticle = useCallback(()=>{
            navigate(RouterPath.articles_details + article.id)
        }
        ,[article.id, navigate])

        const types = <Text text={article.type.join(", ")} className={cls.types} />
        const views = (
            <>
                <Text text={String(article.views)} className={cls.views} />
                <Icon SVG={Eye} />
            </>
        )
        if (view === ArticleView.BIG) {
            const textBlock = article.blocks.find(
                (block) => block.type === ArticleBlockType.TEXT
            ) as ArticleTextBlock
            return (
                <div
                    className={classNames(cls.ArticleListItem, {}, [
                        className,
                        cls[view],
                    ])}
                >
                    <Card>
                        <div className={cls.header}>
                            <Avatar size={30} src={article.user.avatar} />
                            <Text text={article.user.username} className={cls.username} />
                            <Text text={article.createdAt} className={cls.date} />
                        </div>
                        <Text title={article.title} className={cls.title} />
                        {types}
                        <img src={article.img} className={cls.img} alt={article.title} />
                        {textBlock && <ArticleTextBlockComponent block={textBlock} className={cls.textBlock}/>}
                        <div className={cls.footer}>
                            <Button onClick={onOpenArticle} theme={ButtonTheme.OUTLINE}>{t("Read more")}</Button>
                            {views}
                        </div>
                    </Card>
                </div>
            )
        }
        return (
            <div
                className={classNames(cls.ArticleListItem, {}, [className, cls[view]])}
            >
                <Card onClick={onOpenArticle}>
                    <div className={cls.imageWrapper}>
                        <img src={article.img} className={cls.img} alt={article.title} />
                        <Text text={article.createdAt} className={cls.date} />
                    </div>
                    <div className={cls.infoWrapper}>
                        {types}
                        {views}
                    </div>
                    <Text title={article.title} className={cls.title} />
                </Card>
            </div>
        )
    }
)

export default ArticleListItem
