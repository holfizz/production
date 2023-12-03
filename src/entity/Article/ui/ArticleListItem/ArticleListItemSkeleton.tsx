import { FC, memo } from "react"
import { classNames } from "shared/lib/classNames/classNames"
import cls from "./ArticleListItem.module.scss"
import { ArticleView } from "../../model/types/article"
import Card from "shared/ui/Card/Card"
import Skeleton from "shared/ui/Skeleton/Skeleton"

interface ArticleListItemSkeletonProps {
  className?: string;
  view: ArticleView;
}

const ArticleListItemSkeleton: FC<ArticleListItemSkeletonProps> = memo(
    ({ className, view }) => {
        if (view === ArticleView.BIG) {
            return (
                <div
                    className={classNames(cls.ArticleListItem, {}, [
                        className,
                        cls[view],
                    ])}
                >
                    <Card>
                        <div className={cls.header}>
                            <Skeleton height={30} width={30} border={"50%"} />
                            <Skeleton height={16} width={150} className={cls.username} />
                            <Skeleton height={16} width={150} className={cls.date} />
                        </div>
                        <Skeleton width={250} height={24} className={cls.title} />
                        <Skeleton width={150} height={24} className={cls.title} />
                        <Skeleton  height={200} className={cls.img} />
                        <div className={cls.footer}>
                            <Skeleton height={36} width={200} />
                        </div>
                    </Card>
                </div>
            )
        }
        return (
            <div
                className={classNames(cls.ArticleListItem, {}, [className, cls[view]])}
            >
                <Card>
                    <div className={cls.imageWrapper}>
                        <Skeleton
                            border={"6px"}
                            width={200}
                            height={200}
                            className={cls.img}
                        />
                    </div>
                    <div className={cls.infoWrapper}>
                        <Skeleton border={"3px"} width={130} height={16} />
                    </div>
                    <Skeleton
                        border={"3px"}
                        width={150}
                        height={16}
                        className={cls.titleSkeleton}
                    />
                </Card>
            </div>
        )
    }
)

export default ArticleListItemSkeleton
