import {createSelector} from "@reduxjs/toolkit"
import {getCounter} from "../getCounter/getCounter"
import {CounterSchema} from "entity/Counter"

export const getCounterValue = createSelector(
    getCounter,
    (counter: CounterSchema) => counter.value
)