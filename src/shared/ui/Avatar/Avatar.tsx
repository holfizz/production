import { CSSProperties, FC, useMemo } from "react"
import { classNames, Mods } from "@/shared/lib/classNames/classNames"
import cls from "./Avatar.module.scss"
import AppImage from "../AppImage/AppImage"
import Icon from "../Icon/Icon"
import { UserCircle } from "lucide-react"
import Skeleton from "../Skeleton/Skeleton"

interface AvatarProps {
  className?: string;
  src?: string;
  alt?: string;
  size?: number;
}

const Avatar: FC<AvatarProps> = ({ className, src, size, alt }) => {
    const mods: Mods = {}
    const styles = useMemo<CSSProperties>(() => {
        return {
            width: size || 100,
            height: size || 100,
        }
    }, [size])
    const fallback = <Skeleton width={size} height={size} border={"50%"}/>
    const errorFallback = <Icon size={size} SVG={UserCircle}/>
    return (
        <AppImage fallback={fallback}
            errorFallback={errorFallback}
            src={src}
            alt={alt}
            style={styles}
            className={classNames(cls.Avatar, mods, [className])}
        />
    )
}

export default Avatar
