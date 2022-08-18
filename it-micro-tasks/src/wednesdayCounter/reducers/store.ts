import {combineReducers, legacy_createStore} from "redux";
import {counterReducer} from "./counterReducer";

const rootReducer = combineReducers({
        counterReducer
    }
)

export const store = legacy_createStore(rootReducer)

export type storeType = ReturnType<typeof rootReducer>