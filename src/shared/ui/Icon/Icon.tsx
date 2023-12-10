import { FC, memo } from "react"
import { classNames } from "@/shared/lib/classNames/classNames"
import cls from "./Icon.module.scss"
import { LucideIcon, LucideProps } from "lucide-react"

interface IconProps extends Omit<LucideProps, "ref"> {
  className?: string;
  SVG: LucideIcon;
}

const Icon: FC<IconProps> = memo(({ className, SVG, ...otherProps }) => {
    return (
        <SVG
            className={classNames(cls.Icon, {}, [className])}
            {...otherProps}
        />
    )
})

export default Icon
