import {
    counterReducer,
    incrementValueAC,
    resetValueAC,
    setMaxValueAC,
    setStartValueAC
} from "./reducers/counterReducer";

let initState: initStateType

export type initStateType = {
    startValue: number
    maxValue: number
    valueForInc: number
    errorForStartValue: string | null
    errorForMaxValue: string | null
    localValue : number
    localMaxValue : number
}

beforeEach(() => {
    initState = {
        startValue: 2,
        maxValue: 5,
        valueForInc: 3,
        errorForStartValue: '',
        errorForMaxValue: '',
        localValue : 0,
        localMaxValue : 0,
    }
})

test('first test', () => {

    expect(initState.startValue).toBe(0)

})

test( 'increment value', () => {

   const resultState = counterReducer( initState, incrementValueAC() )

    expect( resultState.startValue ).toBe(1)

} )

test( 'reset value', () => {

    const resultState = counterReducer( initState, resetValueAC(5) )

    expect(resultState.startValue).toBe(5)

} )

test( 'set start value', () => {

    const resultState = counterReducer( initState, setStartValueAC(5) )

    expect( resultState.startValue ).toBe(5)

} )

test( 'set Max Value' , () => {

    const resultState = counterReducer( initState, setMaxValueAC(10) )

    expect(resultState.maxValue).toBe(10)

} )

