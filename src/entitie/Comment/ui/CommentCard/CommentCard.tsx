import {FC, memo} from "react"
import {classNames} from "shared/lib/classNames/classNames"
import cls from "./CommentCard.module.scss"
import {Comment} from "entitie/Comment"
import Text from "shared/ui/Text/Text"
import Skeleton from "shared/ui/Skeleton/Skeleton"
import Avatar from "shared/ui/Avatar/Avatar"

interface CommentCardProps {
  className?: string;
  comment: Comment;
  isLoading?: boolean;
}

const CommentCard: FC<CommentCardProps> = memo(
    ({ className, comment, isLoading }) => {
        if (isLoading) {
            return (
                <div className={classNames(cls.CommentCard, {}, [className])}>
                    <div className={cls.header}>
                        <Skeleton height={40} width={40} border={"50%"}></Skeleton>
                        <Skeleton
                            height={16}
                            className={cls.username}
                            width={100}
                        ></Skeleton>
                    </div>
                    <Skeleton className={cls.text} height={50} width={"100%"}></Skeleton>
                </div>
            )
        }
        return (
            <div className={classNames(cls.CommentCard, {}, [className])}>
                <div className={cls.header}>
                    {comment.user.avatar ? <Avatar size={40} src={comment.user.avatar} /> : null}
                    <Text className={cls.username} title={comment.user.username} />
                </div>
                <Text className={cls.text} text={comment.text} />
            </div>
        )
    }
)

export default CommentCard
