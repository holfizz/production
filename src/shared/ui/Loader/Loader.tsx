import {FC} from "react"
import cls from "./Loader.module.scss"

const Loader: FC = () => {
    return (
        <span className={cls.loader}>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </span>
    )
}

export default Loader
