import { type FC } from "react"
import { useTranslation } from "react-i18next"
import { Page } from "@/widgets/page"
import { RatingCard } from "@/entities/Rating"

const MainPage: FC = () => {
    const { t } = useTranslation("main")

    return (
        <Page>
            {t("main")}
            <RatingCard
                title={"Как вам статья"}
                feedbackTitle={"Оставьте отзыв о статье"}
                hasFeedback
            />
        </Page>
    )
}

export default MainPage
