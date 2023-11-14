import {FC, useCallback} from "react"
import {useTranslation} from "react-i18next"
import Select from "shared/ui/Select/Select"
import {Country} from "../../model/types/country"
import {classNames} from "shared/lib/classNames/classNames"

interface CurrencySelectProps {
  className?: string;
  value?: Country;
  onChange?: (value: Country) => void;
  readonly?: boolean;
}
const options:{ value: Country; content: Country; }[] = [
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
    const onChangeHandler = useCallback(() => {
        onChange?.(value as Country)
    }, [onChange, value])

    const { t } = useTranslation()
    return (
        <Select
            className={classNames("", {}, [className])}
            value={value}
            label={t("indicate country")}
            onChange={onChangeHandler}
            options={options}
            readonly={readonly}
        />
    )
}

export default CountrySelect
