export type initStateType = {
    startValue: number
    maxValue: number
    valueForInc: number
    errorForStartValue: string | null
    errorForMaxValue: string | null
    localValue : number
    localMaxValue : number
}
export type counterReducerAT =
    ReturnType<typeof incrementValueAC>
    | ReturnType<typeof resetValueAC>
    | ReturnType<typeof setStartValueAC>
    | ReturnType<typeof setMaxValueAC>
    | ReturnType<typeof setErrorForStartValueAC>
    | ReturnType<typeof setErrorForMaxValueAC>

const initState: initStateType = {
    startValue: 5,
    maxValue: 0,
    valueForInc: 2,
    localValue : 0,
    localMaxValue : 0,
    errorForStartValue: '',
    errorForMaxValue: '',
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
                startValue: action.value,
                valueForInc: action.value
            }
        }
        case "SET-MAX-VALUE": {
            return {
                ...state,
                maxValue: action.value
            }
        }
        case "SET-ERROR-FOR-START-VALUE": {
            return {
                ...state,
                errorForStartValue : action.value
            }
        }
        case "SET-ERROR-FOR-MAX-VALUE" : {
            return {
                ...state,
                errorForMaxValue : action.value
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

export const setStartValueAC = (value: number) => {
    return {
        type: 'SET-START-VALUE',
        value
    } as const
}

export const setMaxValueAC = (value: number) => {
    return {
        type: 'SET-MAX-VALUE',
        value
    } as const
}

export const setErrorForStartValueAC = (value: string | null) => {
    return {
        type: 'SET-ERROR-FOR-START-VALUE',
        value
    } as const
}

export const setErrorForMaxValueAC = (value: string | null) => {
    return {
        type: 'SET-ERROR-FOR-MAX-VALUE',
        value
    } as const
}