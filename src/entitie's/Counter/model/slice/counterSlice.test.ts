import {counterReducer, CounterSchema} from "entitie\'s/Counter"
import {counterActions} from "entitie\'s/Counter/model/slice/counterSlice"

describe("counterSlice", () => {
    test("should work", () => {
        const state: CounterSchema = {
            value: 10,
        }
        expect(counterReducer(state, counterActions.decrement())).toEqual({
            value: 9,
        })
        expect(counterReducer(state, counterActions.increment())).toEqual({
            value: 11,
        })
    })
    test("should work with empty state", () => {
        expect(counterReducer(undefined, counterActions.increment())).toEqual({
            value: 1,
        })
    })
})
