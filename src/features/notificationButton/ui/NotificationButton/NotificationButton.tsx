import { FC, memo } from "react"
import { classNames } from "shared/lib/classNames/classNames"
import cls from "./NotificationButton.module.scss"
import { Popover } from "shared/ui/Popups"
import Button, { ButtonTheme } from "shared/ui/Button/Button"
import Icon from "shared/ui/Icon/Icon"
import { Bell } from "lucide-react"
import { NotificationList } from "entity/Notification"

interface NotificationButtonProps {
  className?: string;
}

const NotificationButton: FC<NotificationButtonProps> = memo(
    ({ className }) => {
        return (
            <Popover
                className={classNames(cls.NotificationButton, {}, [className])}
                direction={"bottom left"}
                trigger={
                    <Button theme={ButtonTheme.CLEAR}>
                        <Icon SVG={Bell} />
                    </Button>
                }
            >
                <NotificationList className={cls.notifications} />
            </Popover>
        )
    }
)

export default NotificationButton
