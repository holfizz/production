import {createSelector} from "@reduxjs/toolkit"
import {getArticleDetailsData} from "entitie/Article"
import {getUserAuthData} from "entitie/User"


export const  getCanEditArticle = createSelector(getArticleDetailsData,getUserAuthData,(article, user)=>{
    if(!article || !user){
        return false
    }
    return article.user.id === user.id
})
