import { FC } from "react"
import { Page } from "@/widgets/page"
import { VStack } from "@/shared/ui/Stack"
import { useParams } from "react-router-dom"
import Text from "@/shared/ui/Text/Text"
import { useTranslation } from "react-i18next"
import { EditableProfileCard } from "@/features/editableProfileCard"
import { ProfileRating } from "@/features/profileRating"

const ProfilePage: FC = () => {
    const { t } = useTranslation("profile")
    const { id } = useParams<{ id: string }>()
    if (!id) {
        return <Text text={t("Profile not found")} />
    }
    return (
        <Page data-testid={"ProfilePage"}>
            <VStack max gap={"16"}>
                <EditableProfileCard id={id} />
                <ProfileRating profileId={id} />
            </VStack>
        </Page>
    )
}

export default ProfilePage
