import {useEffect, useState} from "react"
import Button from "shared/ui/Button/Button"
import {useTranslation} from "react-i18next"
//Component for testing
const BugButton = () => {
    const [error, setError] = useState<boolean>(false)
    const {t} = useTranslation()

    const onThrow = () => setError(true)

    useEffect(() => {
        if (error) {
            throw new Error()
        }
    }, [error])

    return (
        <Button onClick={onThrow}>{t('throw error')}</Button>
    )
}

export default BugButton
