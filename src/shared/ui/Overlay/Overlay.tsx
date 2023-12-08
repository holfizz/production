import { FC, memo } from "react"
import { classNames } from "shared/lib/classNames/classNames"
import cls from "./Overlay.module.scss"

interface OverlayProps {
  className?: string;
  onClick: () => void;
}
const Overlay: FC<OverlayProps> = memo((props) => {
    const { className, onClick } = props
    return (
        <div
            onClick={onClick}
            className={classNames(cls.Overlay, {}, [className])}
        />
    )
})

export default Overlay
