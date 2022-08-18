import {counterReducer, incrementValueAC, resetValueAC, setStartValueAC} from "./reducers/counterReducer";

let initState: initStateType

export type initStateType = {
    startValue: number
    maxValue: number
    valueForInc: number
    error: string
}

beforeEach(() => {
    initState = {
        startValue: 2,
        maxValue: 5,
        valueForInc: 3,
        error: '',
    }
})

test('first test', () => {

    expect(initState.startValue).toBe(0)

})

test( 'increment value ', () => {

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

