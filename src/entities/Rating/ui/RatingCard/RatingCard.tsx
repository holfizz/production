import { FC, memo, useCallback, useState } from "react"
import { classNames } from "@/shared/lib/classNames/classNames"
import cls from "./RatingCard.module.scss"
import Card from "@/shared/ui/Card/Card"
import { HStack, VStack } from "@/shared/ui/Stack"
import Text, { TextAlign } from "@/shared/ui/Text/Text"
import StarRating from "@/shared/ui/StarRating/StarRating"
import Modal from "@/shared/ui/Modal/Modal"
import Input, { InputSize } from "@/shared/ui/Input/Input"
import { useTranslation } from "react-i18next"
import { BrowserView, MobileView } from "react-device-detect"
import { Drawer } from "@/shared/ui/Drawer/Drawer"
import Button, { ButtonSize, ButtonTheme } from "@/shared/ui/Button/Button"

interface RatingCardProps {
  className?: string;
  title?: string;
  feedbackTitle?: string;
  hasFeedback?: boolean;
  onCancel?: (starCount: number) => void;
  onAccept?: (starCount: number, feedback?: string) => void;
}

const RatingCard: FC<RatingCardProps> = memo((props) => {
    const { className, title, feedbackTitle, hasFeedback, onAccept, onCancel } =
    props
    const { t } = useTranslation()
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [starsCount, setStarsCount] = useState(0)
    const [feedback, setFeedback] = useState("")
    const onSelectStars = useCallback(
        (selectedStarsCount: number) => {
            setStarsCount(selectedStarsCount)
            if (hasFeedback) {
                setIsModalOpen(true)
            } else {
                onAccept?.(selectedStarsCount)
            }
        },
        [hasFeedback, onAccept]
    )
    const acceptHandler = useCallback(() => {
        setIsModalOpen(false)
        onAccept?.(starsCount, feedback)
    }, [feedback, onAccept, starsCount])
    const cancelHandler = useCallback(() => {
        setIsModalOpen(false)
        onCancel?.(starsCount)
    }, [onCancel, starsCount])

    const modalContent = (
        <>
            <Text align={TextAlign.CENTER} title={feedbackTitle} />
            <Input
                onChange={setFeedback}
                size={InputSize.FULL}
                placeholder={t("your feedback")}
            />
        </>
    )

    return (
        <Card className={classNames(cls.RatingCard, {}, [className])}>
            <VStack align={"center"} gap={"8"}>
                <Text title={title} />
                <StarRating size={40} onSelect={onSelectStars} />
                <BrowserView>
                    <VStack max gap={"32"}>
                        <Modal isOpen={isModalOpen} onClose={close}>
                            {modalContent}
                        </Modal>
                        <HStack max gap={"16"} justify={"end"}>
                            <Button
                                onClick={cancelHandler}
                                size={ButtonSize.M}
                                theme={ButtonTheme.OUTLINE_SECONDARY}
                            >
                                {t("close")}
                            </Button>
                            <Button
                                onClick={acceptHandler}
                                size={ButtonSize.M}
                                theme={ButtonTheme.OUTLINE}
                            >
                                {t("Send")}
                            </Button>
                        </HStack>
                    </VStack>
                </BrowserView>
                <MobileView>
                    <Drawer isOpen={isModalOpen}>
                        <VStack gap={"16"}>
                            {modalContent}
                            <Button
                                theme={ButtonTheme.OUTLINE_SECONDARY}
                                onClick={acceptHandler}
                                size={ButtonSize.FULL}
                            >
                                {"Send"}
                            </Button>
                        </VStack>
                    </Drawer>
                </MobileView>
            </VStack>
        </Card>
    )
})

export default RatingCard
