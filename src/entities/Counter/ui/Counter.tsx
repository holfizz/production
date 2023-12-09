import { FC } from "react"
import Button from "@/shared/ui/Button/Button"
import { useDispatch, useSelector } from "react-redux"
import { counterActions } from "../model/slice/counterSlice"
import { getCounterValue } from "../model/selectors/getCounterValue/getCounterValue"
import { useTranslation } from "react-i18next"

interface CounterProps {}

const Counter: FC<CounterProps> = ({}) => {
    const dispatch = useDispatch()
    const {t} = useTranslation()
    const counterValue = useSelector(getCounterValue)
    const increment = () => {
        dispatch(counterActions.increment())
    }

    const decrement = () => {
        dispatch(counterActions.decrement())
    }

    return (
        <div>
            <h1 data-testid={'value-title'}>{t('value')} = {counterValue}</h1>
            <Button data-testid={'increment-btn'} onClick={increment}>{t('increment')}</Button>
            <Button data-testid={'decrement-btn'}  onClick={decrement}>{t('decrement')}</Button>
        </div>
    )
}

export default Counter
