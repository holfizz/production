import {FC, memo} from "react"
import {classNames} from "shared/lib/classNames/classNames"
import cls from "./CommentList.module.scss"
import {Comment} from '../../model/types/comment'
import {useTranslation} from "react-i18next"
import Text from "shared/ui/Text/Text"
import CommentCard from "../CommentCard/CommentCard"


interface CommentListProps {
  className?: string;
  comments:Comment[];
  isLoading?:boolean
}

const CommentList: FC<CommentListProps> = memo(({className, comments,isLoading}) => {
    const {t} = useTranslation()

    if(isLoading){
        return(
            <div className={classNames(cls.CommentList, {}, [className])}>
                <CommentCard isLoading/>
                <CommentCard isLoading/>
                <CommentCard isLoading/>
            </div>
        )
    }
    return (
        <div className={classNames(cls.CommentList, {}, [className])}>
            {comments?.length ?comments.map(comment=>(
                <CommentCard isLoading={isLoading} className={cls.comment} key={comment.id} comment={comment}/>
            )) :<Text text={t("no comments")}/>}
        </div>
    )
})

export default CommentList
