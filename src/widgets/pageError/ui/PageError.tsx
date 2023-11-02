import { FC } from "react"
import { classNames } from "shared/lib/classNames/classNames"
import cls from "./PageError.module.scss"
import { useTranslation } from "react-i18next"
import Button from "shared/ui/Button/Button"

interface PageErrorProps {
  className?: string;
}

const PageError: FC<PageErrorProps> = ({className}) => {
    const reloadPage = () =>{
        location.reload()
    }
    const {t} = useTranslation()
    return (
        <div className={classNames(cls.PageError, {}, [className])}>
            <p>{t('An unexpected error occurred')}</p>
            <Button  onClick={reloadPage}>
                {t('Refresh the page')}
            </Button>
        </div>
    )
}

export default PageError
