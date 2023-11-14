import {type FC, useState} from "react"
import {useTranslation} from "react-i18next"

const MainPage: FC = () => {
    const [value, setValue] = useState<string>("")
    const {t} = useTranslation('main')
    const onChange = (value: string) => {
        setValue(value)
    }
    return (
        <div>
            {t('main')}
        </div>
    )
}

export default MainPage
