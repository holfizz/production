import { FC, memo } from "react"
import { useTranslation } from "react-i18next"
import { Page } from "@/widgets/page"

interface ForbiddenPageProps {
  className?: string;
}

const ForbiddenPage: FC<ForbiddenPageProps> = memo(({ className }) => {
    const { t } = useTranslation("forbidden-page")

    return (
        <Page data-testid={'ForbiddenPage'} className={className}>
            {t("you do not have access to this page")}
        </Page>
    )
})

export default ForbiddenPage
