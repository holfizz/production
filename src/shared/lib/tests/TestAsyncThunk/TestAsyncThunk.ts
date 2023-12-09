import {StateSchema} from "@/app/providers/StoreProvider"
import {AsyncThunkAction} from "@reduxjs/toolkit"
import axios, {AxiosStatic} from "axios"

jest.mock("axios")
const mockedAxios = jest.mocked(axios)
type ActionCreatorType<Return, Arg, RejectValue> = (
  arg: Arg
) => AsyncThunkAction<Return, Arg, { rejectValue: RejectValue }>;

export class TestAsyncThunk<Return, Arg, RejectValue> {
    dispatch: jest.Mocked<any>
    getState: () => StateSchema
    actionCreator: ActionCreatorType<Return, Arg, RejectValue>

    api:jest.MockedFunctionDeep<AxiosStatic>
    navigate:jest.Mocked<any>

    constructor(actionCreator: ActionCreatorType<Return, Arg, RejectValue>, state?:DeepPartial<StateSchema>) {
        this.actionCreator = actionCreator
        this.dispatch = jest.fn()
        this.getState = jest.fn(()=>state as StateSchema)
        this.api = mockedAxios
        this.navigate = jest.fn()
    }
    async callThunk(arg: Arg) {
        const action = this.actionCreator(arg)
        const result = await action(this.dispatch, this.getState, {
            api:this.api, navigate:this.navigate
        })

        return result
    }
}
