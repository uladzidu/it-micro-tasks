import React from "react";
import './testMonday.css'
import {SecondCounter} from "./firstCounter/SecondCounter";
import {FirstCounter} from "./secondCounter/FirstCounter";
import {useDispatch, useSelector} from "react-redux";
import {storeType} from "./reducers/store";
import {incrementValueAC, resetValueAC, setMaxValueAC} from "./reducers/counterReducer";


const AppWithRedux = () => {

    // const [startValue, setStartValue] = useState(0)
    // const [maxValue, setMaxValue] = useState(0)
    // const [valueForInc, setValueForInc] = useState(0)

    const dispatch = useDispatch()

    const startValue = useSelector<storeType, number>(state => state.counterReducer.startValue)
    const maxValue = useSelector<storeType, number>(state => state.counterReducer.maxValue)
    const valueForInc = useSelector<storeType, number>(state => state.counterReducer.valueForInc)

    const errorForStartValue = useSelector<storeType, string | null>(state => state.counterReducer.errorForStartValue)
    const errorForMaxValue = useSelector<storeType, string | null>(state => state.counterReducer.errorForMaxValue)

    // const [errorForStartValue,setErrorForStartValue] = useState<string | null>('')
    // const [errorForMaxValue,setErrorForMaxValue] = useState<string | null>('')


    const incFunc = () => {
        dispatch(incrementValueAC())
    }

    const resetFunc = () => {
        dispatch(resetValueAC(valueForInc))
    }

    // const setStartValueHandler = (value : number) => {
    //     dispatch(setStartValueAC(value))
    // }
    const setMaxValueHandler = (value: number) => {
        dispatch(setMaxValueAC(value))
    }

    return (
        <div>
            <div className={'test-app-wrapper'}>

                <FirstCounter
                    // setStartValueHandler={setStartValueHandler}
                    setMaxValueHandler={setMaxValueHandler}
                    // setErrorForStartValue = {setErrorForStartValue}
                    // setErrorForMaxValue = {setErrorForMaxValue}
                    errorForStartValue={errorForStartValue}
                    errorForMaxValue={errorForMaxValue}

                />

                <SecondCounter startValue={startValue}
                               maxValue={maxValue}
                               incFunc={incFunc}
                               resetFunc={resetFunc}
                               errorForStartValue={errorForStartValue}
                               errorForMaxValue={errorForMaxValue}
                />

            </div>
        </div>

    );
};

export default AppWithRedux