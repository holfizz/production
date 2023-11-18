import {createSelector} from "@reduxjs/toolkit"
import {getCounter} from "../getCounter/getCounter"
import {CounterSchema} from "entitie/Counter"

export const getCounterValue = createSelector(
    getCounter,
    (counter: CounterSchema) => counter.value
)
