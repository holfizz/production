import {CSSProperties, FC, memo} from "react"
import {classNames} from "shared/lib/classNames/classNames"
import cls from "./Skeleton.module.scss"
import {useTranslation} from "react-i18next"

interface SkeletonProps {
  className?: string;
  height?: string | number;
  width?: string | number;
  border?: string;
}

const Skeleton: FC<SkeletonProps> = memo((props) => {
    const { className, width, height, border='3px' } = props
    const { t } = useTranslation()
    const style: CSSProperties = {
        width,
        height,
        borderRadius: border,
    }
    return (
        <div style={style} className={classNames(cls.Skeleton, {}, [className])}></div>
    )
})

export default Skeleton
