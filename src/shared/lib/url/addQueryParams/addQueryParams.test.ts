import {getQueryParams} from "./addQueryParams"

describe("addQueryParams.test", () => {
    test("test with one param", () => {
        const params = getQueryParams({
            test: "values",
        })
        expect(params).toEqual("?test=values")
    })
    test("test with multiple params", () => {
        const params = getQueryParams({
            test: "values",
            second: "2",
        })
        expect(params).toEqual("?test=values&second=2")
    })
    test("test with undefined", () => {
        const params = getQueryParams({
            test: "values",
            second: undefined,
        })
        expect(params).toEqual("?test=values")
    })
})
