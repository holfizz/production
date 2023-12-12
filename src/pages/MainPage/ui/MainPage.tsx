import { type FC } from "react"
import { useTranslation } from "react-i18next"
import { Page } from "@/widgets/page"

const MainPage: FC = () => {
    const { t } = useTranslation("main")

    return <Page data-testid={"MainPage"}>{t("main")}</Page>
}

export default MainPage
