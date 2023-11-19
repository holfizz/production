import {FC, memo} from "react"
import {classNames} from "shared/lib/classNames/classNames"
import cls from "./CommentCard.module.scss"
import {Comment} from "entitie/Comment"
import Text from "shared/ui/Text/Text"
import Skeleton from "shared/ui/Skeleton/Skeleton"
import Avatar from "shared/ui/Avatar/Avatar"
import AppLink from "shared/ui/AppLink/AppLink"
import {RouterPath} from "shared/config/routeConfig/routeConfig"

interface CommentCardProps {
  className?: string;
  comment?: Comment;
  isLoading?: boolean;
}

const CommentCard: FC<CommentCardProps> = memo(
    ({ className, comment, isLoading }) => {
        if (isLoading) {
            return (
                <div
                    className={classNames(cls.CommentCard, {}, [className, cls.loading])}
                >
                    <div className={cls.header}>
                        <Skeleton height={40} width={40} border={"50%"}></Skeleton>
                        <Skeleton border={"3px"}
                            height={16}
                            className={cls.username}
                            width={100}
                        ></Skeleton>
                    </div>
                    <Skeleton border={"8px"} className={cls.text} height={50} width={"100%"}></Skeleton>
                </div>
            )
        }
        if (!comment) {
            return null
        }
        return (
            <div className={classNames(cls.CommentCard, {}, [className])}>
                <AppLink
                    to={`${RouterPath.profile}${comment.user.id}`}
                    className={cls.header}
                >
                    {comment.user.avatar ? (
                        <Avatar size={40} src={comment.user.avatar} />
                    ) : null}
                    <Text className={cls.username} title={comment.user.username} />
                </AppLink>
                <Text className={cls.text} text={comment.text} />
            </div>
        )
    }
)

export default CommentCard
