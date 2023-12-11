import { FC } from "react"

interface CounterProps {}

const Counter: FC<CounterProps> = ({}) => {
    // const { increment} = useCounterActions()
    // const {t} = useTranslation()
    // const counterValue = useSelector(getCounterValue)
    // const handelInc = () => {
    //     increment()
    // }

    // const handelDec = () => {
    //     decrement()
    // }

    return (
        <div>
            {/*<h1 data-testid={'value-title'}>{t('value')} = {counterValue}</h1>*/}
            {/*<Button data-testid={'increment-btn'} onClick={handelInc}>{t('increment')}</Button>*/}
            {/*<Button data-testid={'decrement-btn'}  onClick={handelDec}>{t('decrement')}</Button>*/}
        </div>
    )
}

export default Counter
