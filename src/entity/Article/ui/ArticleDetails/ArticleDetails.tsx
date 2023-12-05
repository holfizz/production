import { FC, memo, useCallback, useEffect } from "react"
import { classNames } from "shared/lib/classNames/classNames"
import cls from "./ArticleDetails.module.scss"
import { useTranslation } from "react-i18next"
import DynamicModuleLoader, {
    ReducersList,
} from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader"
import { articlesDetailsReducer } from "../../model/slice/artliDetailsSlice"
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch"
import { useSelector } from "react-redux"
import {
    getArticleDetailsData,
    getArticleDetailsError,
    getArticleDetailsIsLoading,
} from "../../model/selectors/articleDetails"
import Text, { TextAlign, TextSize, TextTheme } from "shared/ui/Text/Text"
import Avatar from "shared/ui/Avatar/Avatar"
import { CalendarDays, Eye } from "lucide-react"
import Icon from "shared/ui/Icon/Icon"
import { ArticleBlock, ArticleBlockType } from "../../model/types/article"
import Skeleton from "shared/ui/Skeleton/Skeleton"
import ArticleImageBlockComponent from "../ArticleImageBlockComponent/ArticleImageBlockComponent"
import ArticleTextBlockComponent from "../ArticleTextBlockComponent/ArticleTextBlockComponent"
import { fetchArticleById } from "../../model/services/fetchArticleById/fetchArticleById"
import ArticleCodeBlockComponent from "entity/Article/ui/ArticleCodeBlockComponent/ArticleCodeBlockComponent"
import ArticleTypeTabs from "entity/Article/ui/ArticleTypeTabs/ArticleTypeTabs"
import { HStack, VStack } from "shared/ui/Stack"

interface ArticleDetailsProps {
  className?: string;
  id: string;
}

ArticleTypeTabs
const reducers: ReducersList = {
    articleDetails: articlesDetailsReducer,
}
const ArticleDetails: FC<ArticleDetailsProps> = memo(({ className, id }) => {
    const { t } = useTranslation()
    const dispatch = useAppDispatch()
    const isLoading = useSelector(getArticleDetailsIsLoading)
    const article = useSelector(getArticleDetailsData)
    const error = useSelector(getArticleDetailsError)

  
    const renderBlock = useCallback((block: ArticleBlock) => {
        switch (block.type) {
        case ArticleBlockType.CODE:
            return (
                <ArticleCodeBlockComponent
                    key={block.id}
                    block={block}
                    className={cls.block}
                />
            )
        case ArticleBlockType.IMAGE:
            return (
                <ArticleImageBlockComponent
                    key={block.id}
                    block={block}
                    className={cls.block}
                />
            )
        case ArticleBlockType.TEXT:
            return (
                <ArticleTextBlockComponent
                    key={block.id}
                    block={block}
                    className={cls.block}
                />
            )
        default:
            return null
        }
    }, [])

    useEffect(() => {
        if (__PROJECT__ !== "storybook") {
            dispatch(fetchArticleById(id))
        }
    }, [dispatch, id])
    let content
    if (isLoading) {
        content = (
            <>
                <Skeleton
                    className={cls.avatar}
                    width={200}
                    height={200}
                    border={"50%"}
                ></Skeleton>
                <Skeleton
                    className={cls.title}
                    width={300}
                    height={32}
                    border={"10px"}
                ></Skeleton>
                <Skeleton
                    className={cls.title}
                    width={600}
                    height={32}
                    border={"10px"}
                ></Skeleton>
                <Skeleton
                    className={cls.skeleton}
                    width={"100%"}
                    height={200}
                    border={"18px"}
                ></Skeleton>
                <Skeleton
                    className={cls.skeleton}
                    width={"100%"}
                    height={200}
                    border={"18px"}
                ></Skeleton>
            </>
        )
    } else if (error) {
        content = (
            <Text
                theme={TextTheme.ERROR}
                align={TextAlign.CENTER}
                title={t("an error occurred while loading the page")}
            ></Text>
        )
    } else {
        content = (
            <>
                <HStack justify={'center'} gap={"16"} className={cls.avatarWrapper}>
                    <Avatar src={article?.img} className={cls.avatar} size={200} />
                </HStack>
                <VStack gap={'4'} max>
                    <Text
                        title={article?.title}
                        text={article?.subtitle}
                        size={TextSize.L}
                    />
                    <HStack gap={"16"} className={cls.articleInfo}>
                        <Icon SVG={Eye} className={cls.icon} />
                        <Text text={String(article?.views)} />
                    </HStack>
                    <HStack gap={"16"} className={cls.articleInfo}>
                        <Icon SVG={CalendarDays} className={cls.icon} />
                        <Text text={article?.createdAt} />
                    </HStack>
                </VStack>
                {article?.blocks?.map(renderBlock)}
            </>
        )
    }
    return (
        <DynamicModuleLoader reducer={reducers}>
            <VStack gap={'16'} className={classNames(cls.ArticleDetails, {}, [className])}>
                {content}
            </VStack>
        </DynamicModuleLoader>
    )
})
export default ArticleDetails
