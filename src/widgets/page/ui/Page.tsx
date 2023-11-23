import {FC, memo, MutableRefObject, PropsWithChildren, UIEvent, useRef} from "react"
import {classNames} from "shared/lib/classNames/classNames"
import cls from "./Page.module.scss"
import {useInfiniteScroll} from "shared/lib/hooks/useInfiniteScroll/useInfiniteScroll"
import {useAppDispatch} from "shared/lib/hooks/useAppDispatch/useAppDispatch"
import {getScrollSaveByPath, scrollSaveActions} from "features/ScrollSave"
import {useLocation} from "react-router-dom"
import {useInitialEffect} from "shared/lib/hooks/useInitialEffect/useInitialEffect"
import {useSelector} from "react-redux"
import {StateSchema} from "app/providers/StoreProvider"
import {useThrottle} from "shared/lib/hooks/useThrottle/useThrottle"

interface PageProps {
  className?: string;
  onScrollEnd?: () => void;
}

const Page: FC<PropsWithChildren<PageProps>> = memo(
    ({ className, children, onScrollEnd }) => {
        const {pathname} = useLocation()
        const dispatch = useAppDispatch()

        const wrapperRef = useRef() as MutableRefObject<HTMLDivElement>
        const triggerRef = useRef() as MutableRefObject<HTMLDivElement>

        const scrollPositions = useSelector((state:StateSchema)=>getScrollSaveByPath(state, pathname))

        useInfiniteScroll({
            triggerRef,
            wrapperRef,
            callback: onScrollEnd,
        })
        useInitialEffect(()=>{
            wrapperRef.current.scrollTop = scrollPositions
        })
        const onScroll = useThrottle((e: UIEvent<HTMLDivElement>) => {
            dispatch(scrollSaveActions.setScrollPosition({position:e.currentTarget.scrollTop, path:pathname}))
        },500)
        return (
            <section
                onScroll={onScroll}
                ref={wrapperRef}
                className={classNames(cls.Page, {}, [className])}
            >
                {children}
                {onScrollEnd ?  <div className={cls.trigger} ref={triggerRef} /> : null}
            </section>
        )
    }
)

export default Page
