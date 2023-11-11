import { type FC } from "react"
import { useTranslation } from "react-i18next"

const AboutPage: FC = () => {
    const { t } = useTranslation()
    return (
        <div>
            <h1>{t("hello")}</h1>
        </div>
    )
}

export default AboutPage
