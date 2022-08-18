export type initStateType = {
    startValue: number
    maxValue: number
    valueForInc: number
    error: string
    setStartValue?: () => void
    setMaxValue?: () => void
}
export type counterReducerAT =
    ReturnType<typeof incrementValueAC>
    | ReturnType<typeof resetValueAC>
    | ReturnType<typeof setStartValueAC>

const initState: initStateType = {
    startValue: 5,
    maxValue: 0,
    valueForInc: 2,
    error: '',
    setStartValue() {

    },
    setMaxValue() {

    }
}

export const counterReducer = (state: initStateType = initState, action: counterReducerAT): initStateType => {

    switch (action.type) {
        case "INCREMENT-VALUE" : {
            return {
                ...state,
                startValue: state.startValue + 1
            }
        }
        case "RESET-VALUE" : {
            return {
                ...state,
                startValue: action.value
            }
        }
        case "SET-START-VALUE": {
            return {
                ...state,
                startValue : action.value
            }
        }
        default : {
            return state
        }
    }

}

export const incrementValueAC = () => {
    return {
        type: 'INCREMENT-VALUE'
    } as const
}

export const resetValueAC = (value: number) => {
    return {
        type: 'RESET-VALUE',
        value
    } as const
}

export const setStartValueAC = (value : number) => {
    return {
        type: 'SET-START-VALUE',
        value
    } as const
}