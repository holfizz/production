import {FC, useCallback} from "react"
import {useTranslation} from "react-i18next"
import Select from "shared/ui/Select/Select"
import {Currency} from "../../model/types/currency"
import {classNames} from "shared/lib/classNames/classNames"

interface CurrencySelectProps {
  className?: string;
  value?: Currency;
  onChange?: (value: Currency) => void;
  readonly?: boolean;
}
const options = [
    { value: Currency.RUB, content: Currency.RUB },
    { value: Currency.EUR, content: Currency.EUR },
    { value: Currency.USD, content: Currency.USD },
]
const CurrencySelect: FC<CurrencySelectProps> = ({
    value,
    onChange,
    readonly,
    className,
}) => {
    const onChangeHandler = useCallback((value: string) => {
        onChange?.(value as Currency)
    }, [onChange])
    const { t } = useTranslation()
    return (
        <Select
            className={classNames("", {}, [className])}
            value={value}
            label={t("indicate currency")}
            onChange={onChangeHandler}
            options={options}
            readonly={readonly}
        />
    )
}

export default CurrencySelect
