import {FC, memo, MutableRefObject, PropsWithChildren, useRef} from "react"
import {classNames} from "shared/lib/classNames/classNames"
import cls from "./Page.module.scss"
import {useInfiniteScroll} from "shared/lib/hooks/useInfiniteScroll/useInfiniteScroll"

interface PageProps {
  className?: string;
  onScrollEnd?:()=>void
}

const Page: FC<PropsWithChildren<PageProps>> = memo(
    ({ className, children,onScrollEnd }) => {
        const wrapperRef = useRef() as MutableRefObject<HTMLDivElement>
        const triggerRef = useRef() as MutableRefObject<HTMLDivElement>
        useInfiniteScroll({
            triggerRef,
            wrapperRef,
            callback:onScrollEnd,
        })
        return (
            <section
                ref={wrapperRef}
                className={classNames(cls.Page, {}, [className])}
            >
                {children}
                <div ref={triggerRef} />
            </section>
        )
    }
)

export default Page
