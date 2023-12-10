import { FC, memo, useState } from "react"
import { classNames } from "@/shared/lib/classNames/classNames"
import cls from "./StarRating.module.scss"
import Icon from "@/shared/ui/Icon/Icon"
import { Star } from "lucide-react"

interface StarRatingProps {
  className?: string;
  onSelect?: (startCount: number) => void;
  size?: number;
  selectedStars?: number;
  rate?: number;
}

const stars = [1, 2, 3, 4, 5]

const StarRating: FC<StarRatingProps> = memo(
    ({ className, selectedStars, onSelect, size = 30, rate = 0 }) => {
        const [currentStartCount, setCurrentStartCount] = useState<number>(rate)
        const [isSelected, setIsSelected] = useState<boolean>(
            Boolean(selectedStars)
        )

        const onHover = (starsCount: number) => () => {
            if (!isSelected) {
                setCurrentStartCount(starsCount)
            }
        }
        const onLeave = () => {
            if (!isSelected) {
                setCurrentStartCount(0)
            }
        }
        const onClick = (starsCount: number) => () => {
            if (!isSelected) {
                onSelect?.(starsCount)
                setCurrentStartCount(starsCount)
                setIsSelected(true)
            }
        }
        return (
            <div className={classNames(cls.StarRating, {}, [className])}>
                {stars.map((starNumber) => (
                    <Icon
                        height={size}
                        width={size}
                        className={classNames(cls.starIcon, {}, [
                            currentStartCount >= starNumber ? cls.hovered : cls.normal,
                        ])}
                        key={starNumber}
                        SVG={Star}
                        onMouseLeave={onLeave}
                        onMouseEnter={onHover(starNumber)}
                        onClick={onClick(starNumber)}
                    />
                ))}
            </div>
        )
    }
)

export default StarRating
