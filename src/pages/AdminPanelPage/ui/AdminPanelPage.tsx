import { FC, memo } from "react"
import { classNames } from "@/shared/lib/classNames/classNames"
import cls from "./AdminPanelPage.module.scss"
import { useTranslation } from "react-i18next"
import { Page } from "@/widgets/page"

interface AdminPanelPageProps {
  className?: string;
}

const AdminPanelPage: FC<AdminPanelPageProps> = memo(({className}) => {

    const {t} = useTranslation('admin-panel')

    return (
        <Page data-testid={'AdminPanelPage'} className={classNames(cls.AdminPanelPage, {}, [className])}>
            {t('Admin panel')}
        </Page>
    )
})

export default AdminPanelPage
