import { FC, useCallback } from "react"
import { useTranslation } from "react-i18next"
import { Country } from "../../model/types/country"
import { classNames } from "shared/lib/classNames/classNames"
import { ListBox } from "shared/ui/Popups"

interface CurrencySelectProps {
  className?: string;
  value?: Country;
  onChange?: (value: Country) => void;
  readonly?: boolean;
}
const options = [
    { value: Country.RUSSIA, content: Country.RUSSIA },
    { value: Country.AMERICA, content: Country.AMERICA },
    { value: Country.DUBAI, content: Country.DUBAI },
]
const CountrySelect: FC<CurrencySelectProps> = ({
    value,
    onChange,
    readonly,
    className,
}) => {
    const onChangeHandler = useCallback(
        (value: string) => {
            onChange?.(value as Country)
        },
        [onChange]
    )
    const { t } = useTranslation()
    return (
        <ListBox
            direction={"top right"}
            className={classNames("", {}, [className])}
            value={value}
            defaultValue={t("indicate country")}
            label={t("indicate country")}
            onChange={onChangeHandler}
            items={options}
            readonly={readonly}

        />
    )
}

export default CountrySelect
