import { FC, HTMLAttributeAnchorTarget, memo } from "react"
import { classNames } from "@/shared/lib/classNames/classNames"
import cls from "./ArticleListItem.module.scss"
import { useTranslation } from "react-i18next"
import { Article, ArticleTextBlock } from "../../model/types/article"
import Text from "@/shared/ui/Text/Text"
import Card from "@/shared/ui/Card/Card"
import Avatar from "@/shared/ui/Avatar/Avatar"
import Icon from "@/shared/ui/Icon/Icon"
import { Eye } from "lucide-react"
import Button, { ButtonTheme } from "@/shared/ui/Button/Button"
import ArticleTextBlockComponent from "../ArticleTextBlockComponent/ArticleTextBlockComponent"
import AppLink from "@/shared/ui/AppLink/AppLink"
import { ArticleBlockType, ArticleView } from "../../model/const/const"
import { getRouteArticleDetails } from "@/shared/const/router"
import AppImage from "@/shared/ui/AppImage/AppImage"
import Skeleton from "@/shared/ui/Skeleton/Skeleton"

interface ArticleListItemProps {
  className?: string;
  article: Article;
  view: ArticleView;
  target?: HTMLAttributeAnchorTarget;
}

const ArticleListItem: FC<ArticleListItemProps> = memo(
    ({ className, article, view, target }) => {
        const { t } = useTranslation()

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
                    data-testid={"ArticleListItem"}
                    className={classNames(cls.ArticleListItem, {}, [
                        className,
                        cls[view],
                    ])}
                >
                    <Card className={cls.card}>
                        <div className={cls.header}>
                            <Avatar size={30} src={article.user.avatar} />
                            <Text text={article.user.username} className={cls.username} />
                            <Text text={article.createdAt} className={cls.date} />
                        </div>
                        <Text title={article.title} className={cls.title} />
                        {types}
                        <AppImage
                            fallback={<Skeleton width={"100%"} height={250} />}
                            src={article.img}
                            className={cls.img}
                            alt={article.title}
                        />
                        {textBlock && (
                            <ArticleTextBlockComponent
                                block={textBlock}
                                className={cls.textBlock}
                            />
                        )}
                        <div className={cls.footer}>
                            <AppLink target={target} to={getRouteArticleDetails(article.id)}>
                                <Button theme={ButtonTheme.OUTLINE}>{t("Read more")}</Button>
                            </AppLink>
                            {views}
                        </div>
                    </Card>
                </div>
            )
        }
        return (
            <AppLink
                data-testid={"ArticleListItem"}
                target={target}
                to={getRouteArticleDetails(article.id)}
                className={classNames(cls.ArticleListItem, {}, [className, cls[view]])}
            >
                <Card>
                    <div className={cls.imageWrapper}>
                        <AppImage
                            fallback={<Skeleton width={200} height={200} />}
                            src={article.img}
                            className={cls.img}
                            alt={article.title}
                        />
                        <Text text={article.createdAt} className={cls.date} />
                    </div>
                    <div className={cls.infoWrapper}>
                        {types}
                        {views}
                    </div>
                    <Text title={article.title} className={cls.title} />
                </Card>
            </AppLink>
        )
    }
)

export default ArticleListItem
