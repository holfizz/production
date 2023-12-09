import {FC, memo} from "react"
import {classNames} from "@/shared/lib/classNames/classNames"
import cls from "./ArticleTextBlockComponent.module.scss"
import {useTranslation} from "react-i18next"
import {ArticleTextBlock} from "../../model/types/article"
import Text from "@/shared/ui/Text/Text"


interface ArticleTextBlockComponentProps {
  className?: string;
  block:ArticleTextBlock;
}

const ArticleTextBlockComponent: FC<ArticleTextBlockComponentProps> = memo(({className, block}) => {

    const {t} = useTranslation()

    return (
        <div className={classNames(cls.ArticleTextBlockComponent, {}, [className])}>
            {block.title && (
                <Text title={block.title} className={cls.title}/>
            )}
            {block.paragraphs.map((paragraph, index)=>(
                <Text className={cls.paragraph} key={index} text={paragraph}/>
            ))}
        </div>
    )
})

export default ArticleTextBlockComponent
