import { lazy, Suspense } from "react"
import { ArticleRatingProps } from "./ArticleRating"
import Skeleton from "@/shared/ui/Skeleton/Skeleton"

const ArticleRatingLazy = lazy(() => import("./ArticleRating"))

const ArticleRatingAsync = (props:ArticleRatingProps)=>{
    return(
        <Suspense fallback={<Skeleton width={'100%'} height={120} border={'16'}/>}>
            <ArticleRatingLazy {...props}/>
        </Suspense>
    )
}
export default ArticleRatingAsync
