import {FC, memo} from "react"
import {classNames} from "@/shared/lib/classNames/classNames"
import cls from "./ArticleImageBlockComponent.module.scss"
import {ArticleImageBlock} from "../../model/types/article"
import Text, {TextAlign} from "@/shared/ui/Text/Text"


interface ArticleImageBlockComponentProps {
  className?: string;
  block:ArticleImageBlock
}

const ArticleImageBlockComponent: FC<ArticleImageBlockComponentProps> = memo(({className,block}) => {
    return (
        <div className={classNames(cls.ArticleImageBlockComponent, {}, [className])}>
            <img className={cls.img} src={block.src} alt={block.title}/>
            {block.title && (
                <Text title={block.title} align={TextAlign.CENTER}/>
            )}
        </div>
    )
})

export default ArticleImageBlockComponent
