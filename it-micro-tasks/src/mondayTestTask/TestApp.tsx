import React, {useState} from "react";
import './testMonday.css'
import {SecondCounter} from "./firstCounter/SecondCounter";
import {FirstCounter} from "./secondCounter/FirstCounter";


const TestApp = () => {

    const [startValue, setStartValue] = useState(0)
    const [maxValue, setMaxValue] = useState(0)
    const [valueForInc, setValueForInc] = useState(0)

    const [errorForStartValue,setErrorForStartValue] = useState<string | null>('')
    const [errorForMaxValue,setErrorForMaxValue] = useState<string | null>('')

    const incFunc = () => {
        setStartValue(startValue + 1)
    }
    const resetFunc = () => {
        setStartValue(valueForInc)
    }

    const setStartValueHandler = (value : number) => {
        setStartValue(value)
        setValueForInc(value)
    }
    const setMaxValueHandler = (value : number) => {
        setMaxValue(value)
    }

    return (
        <div>
            <div className={'test-app-wrapper'}>

                <FirstCounter setStartValueHandler = {setStartValueHandler}
                              setMaxValueHandler = {setMaxValueHandler}
                              setErrorForStartValue = {setErrorForStartValue}
                              setErrorForMaxValue = {setErrorForMaxValue}
                              errorForStartValue = {errorForStartValue}
                              errorForMaxValue = {errorForMaxValue}

                />

                <SecondCounter startValue={startValue}
                               maxValue = {maxValue}
                               incFunc = {incFunc}
                               resetFunc = {resetFunc}
                               errorForStartValue = {errorForStartValue}
                               errorForMaxValue = {errorForMaxValue}
                />

            </div>
        </div>

    );
};

export default TestApp