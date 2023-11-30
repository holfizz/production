import { FC, memo } from "react"
import { classNames } from "shared/lib/classNames/classNames"
import cls from "./Icon.module.scss"
import { LucideIcon } from "lucide-react"

interface IconProps {
  className?: string;
  SVG: LucideIcon;
}

const Icon: FC<
  IconProps> = memo(({className, SVG}) => {
      return (
          <SVG className={classNames(cls.Icon, {}, [className])}/>
      )
  })

export default Icon
