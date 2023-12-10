import { FC, memo, useCallback } from "react"
import { useTranslation } from "react-i18next"
import { RatingCard } from "@/entities/Rating"
import { useSelector } from "react-redux"
import { getUserAuthData } from "@/entities/User"
import Skeleton from "@/shared/ui/Skeleton/Skeleton"
import {
    useGetProfileRating,
    useRateProfile,
} from "../../api/profileRatingApi"

export interface ProfileRatingProps {
  className?: string;
  profileId: string;
}

const ProfileRating: FC<ProfileRatingProps> = memo(
    ({ className, profileId }) => {
        const { t } = useTranslation()
        const userData = useSelector(getUserAuthData)
        const { data, isLoading } = useGetProfileRating({
            profileId,
            userId: userData?.id ?? "",
        })
        const [rateProfileMutation, {}] = useRateProfile({})

        const rating = data?.[0]

        const handleRateProfile = useCallback(
            (starCount: number, feedback?: string) => {
                try {
                    rateProfileMutation({
                        userId: userData?.id ?? "",
                        profileId,
                        rate: starCount,
                        feedback: feedback,
                    })
                } catch (e) {
                    console.log(e)
                }
            },
            [profileId, rateProfileMutation, userData?.id]
        )
        const onAccept = useCallback(
            (starCount: number, feedback?: string) => {
                handleRateProfile(starCount, feedback)
            },
            [handleRateProfile]
        )
        const onCancel = useCallback(
            (starCount: number, feedback?: string) => {
                handleRateProfile(starCount)
            },
            [handleRateProfile]
        )
        if (isLoading) {
            return <Skeleton width={"100%"} height={120} border={"16"} />
        }

        return (
            <RatingCard
                onAccept={onAccept}
                onCancel={onCancel}
                rate={rating?.rate}
                className={className}
                title={t("Rate this profile")}
                feedbackTitle={t(
                    "Leave feedback on the profile"
                )}
                hasFeedback
            />
        )
    }
)

export default ProfileRating
