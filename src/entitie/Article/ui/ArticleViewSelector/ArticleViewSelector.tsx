import {FC, memo} from "react"
import {classNames} from "shared/lib/classNames/classNames"
import cls from "./ArticleViewSelector.module.scss"
import {ArticleView} from "../../model/types/article"
import {AlignJustify, Grid2X2} from "lucide-react"
import Button, {ButtonTheme} from "shared/ui/Button/Button"
import Icon from "shared/ui/Icon/Icon"

interface ArticleViewSelectorProps {
  className?: string;
  view: ArticleView;
  onViewClick?: (view: ArticleView) => void;
}
const viewTypes = [
    {
        view: ArticleView.SMALL,
        icon: Grid2X2,
    },
    {
        view: ArticleView.BIG,
        icon: AlignJustify,
    },
]
const ArticleViewSelector: FC<ArticleViewSelectorProps> = memo(
    ({ className, view, onViewClick }) => {
        const onClick = (newView: ArticleView) => () => {
            onViewClick?.(newView)
        }
        return (
            <div className={classNames(cls.ArticleViewSelector, {}, [className])}>
                {viewTypes.map((viewType, index) => (
                    <Button className={cls.button}
                        theme={ButtonTheme.CLEAR}
                        key={index}
                        onClick={onClick(viewType.view)}
                    >
                        <Icon className={classNames('', {[cls.selected]:viewType.view ===view},[])} SVG={viewType.icon} />
                    </Button>
                ))}
            </div>
        )
    }
)

export default ArticleViewSelector
