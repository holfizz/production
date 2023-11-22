import {type FC} from "react"
import {useTranslation} from "react-i18next"
import Page from "shared/ui/Page/Page"

const AboutPage: FC = () => {
    const { t } = useTranslation('about')
    return (
        <Page>
            <h1>{t("about")}</h1>
        </Page>
    )
}

export default AboutPage
