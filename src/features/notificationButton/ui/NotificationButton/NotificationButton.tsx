import { FC, memo, useCallback, useState } from "react"
import { classNames } from "shared/lib/classNames/classNames"
import cls from "./NotificationButton.module.scss"
import { Popover } from "shared/ui/Popups"
import Button, { ButtonTheme } from "shared/ui/Button/Button"
import Icon from "shared/ui/Icon/Icon"
import { Bell } from "lucide-react"
import { NotificationList } from "entity/Notification"
import { Drawer } from "shared/ui/Drawer/Drawer"
import { BrowserView, MobileView } from "react-device-detect"
import { AnimationProvider } from "shared/lib/components/AnimationProvider"

interface NotificationButtonProps {
  className?: string;
}

const NotificationButton: FC<NotificationButtonProps> = memo(
    ({ className }) => {
        const [isOpen, setIsOpen] = useState(false)
        const onOpenDrawer = useCallback(() => {
            setIsOpen(true)
        }, [])
        const onCloseDrawer = useCallback(() => {
            setIsOpen(false)
        }, [])
        const trigger = (
            <Button onClick={onOpenDrawer} theme={ButtonTheme.CLEAR}>
                <Icon SVG={Bell} />
            </Button>
        )
        return (
            <div>
                <BrowserView>
                    <Popover
                        className={classNames(cls.NotificationButton, {}, [className])}
                        direction={"bottom left"}
                        trigger={trigger}
                    >
                        <NotificationList className={cls.notifications} />
                    </Popover>
                </BrowserView>
                <MobileView>
                    {trigger}
                    <AnimationProvider>
                        <Drawer isOpen={isOpen} onClose={onCloseDrawer}>
                            <NotificationList />
                        </Drawer>
                    </AnimationProvider>
                </MobileView>
            </div>
        )
    }
)

export default NotificationButton
