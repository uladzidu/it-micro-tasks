export const reducer = (state: stateType, action: ReturnType<typeof updateUserNameAC>) => {
    switch (action.type) {
        case 'USER-NAME-UPDATED':
            return {
                ...state,
                user : {
                    ...state["user"],
                    name : action.name
                }
            }

        default:
            return state
    }
}

const updateUserNameAC = (name: string) => ({type: 'USER-NAME-UPDATED', name})

type stateType = {
    count: number
    user: {
        name: string
        age: number
        isMarried: boolean
        status: string
    },
    books: [string]
}

const state : stateType = {
    count: 10,
    user: {
        name: 'Dimych',
        age: 18,
        isMarried: true,
        status: "offline"
    },
    books: ['you don\'t know JS']
}
const newState = reducer(state, updateUserNameAC('Dmitry'))

console.log(newState.user.name === 'Dmitry')
console.log(newState.books === state.books)
console.log(newState.user !== state.user)

//Что нужно написать вместо XXX, чтобы корректно обновить имя пользователя и в консоли увидеть:  true true true?
