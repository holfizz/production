import { FC, memo } from "react"
import { classNames } from "shared/lib/classNames/classNames"
import cls from "./ForbiddenPage.module.scss"
import { useTranslation } from "react-i18next"
import { Page } from "widgets/page"

interface ForbiddenPageProps {
  className?: string;
}

const ForbiddenPage: FC<ForbiddenPageProps> = memo(({ className }) => {
    const { t } = useTranslation("forbidden-page")

    return (
        <Page className={classNames(cls.ForbiddenPage, {}, [className])}>
            {t("you do not have access to this page")}
        </Page>
    )
})

export default ForbiddenPage
