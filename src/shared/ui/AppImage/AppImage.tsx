import {
    FC,
    ImgHTMLAttributes,
    memo,
    ReactNode,
    useLayoutEffect,
    useState,
} from "react"

interface AppImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  className?: string;
  fallback?: ReactNode;
  errorFallback?: ReactNode;
}

const AppImage: FC<AppImageProps> = memo((props) => {
    const { className, src, alt, fallback, errorFallback, ...otherProps } = props
    const [isLoading, setIsLoading] = useState(true)
    const [hasError, setHasError] = useState(false)
    useLayoutEffect(() => {
        const img = new Image()
        img.src = src ?? ''
        img.onload = () =>{
            setIsLoading(false)
        }
        img.onerror = ()=>{
            setIsLoading(false)
            setHasError(true)
        }
    }, [src])
    if (isLoading && fallback) {
        return fallback
    }

    if (!hasError && errorFallback) {
        return errorFallback
    }
    return <img src={src} className={className} alt={alt} {...otherProps}/>
})

export default AppImage
