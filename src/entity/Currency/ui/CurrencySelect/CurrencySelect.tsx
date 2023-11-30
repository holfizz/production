import { FC, useCallback } from "react"
import { useTranslation } from "react-i18next"
import { Currency } from "../../model/types/currency"
import { classNames } from "shared/lib/classNames/classNames"
import ListBox from "shared/ui/ListBox/ListBox"

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
    const onChangeHandler = useCallback(
        (value: string) => {
            onChange?.(value as Currency)
        },
        [onChange]
    )
    const { t } = useTranslation()
    return (
        <ListBox
            direction={"top"}
            readonly={readonly}
            defaultValue={t("indicate currency")}
            label={t("indicate currency")}
            className={classNames("", {}, [className])}
            value={value}
            onChange={onChangeHandler}
            items={options}
        />
    )
}

export default CurrencySelect
