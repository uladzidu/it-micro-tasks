import React, {ChangeEvent, Dispatch, SetStateAction, useState} from 'react';
import {Button} from "../firstCounter/Components/Button";
import {Input} from "./Components/Input";
import '../testMonday.css'
import {useDispatch} from "react-redux";
import {
    setErrorForMaxValueAC,
    setErrorForStartValueAC,
    setMaxValueAC,
    setStartValueAC
} from "../reducers/counterReducer";

export type FirstCounterPropsType = {
    // setStartValueHandler: (value: number) => void
    setMaxValueHandler: (value: number) => void
    setErrorForMaxValue?: Dispatch<SetStateAction<string | null>>
    setErrorForStartValue?: Dispatch<SetStateAction<string | null>>
    errorForStartValue: string | null
    errorForMaxValue: string | null
}

export const FirstCounter = (props: FirstCounterPropsType) => {

    const [localValue, setLocalValue] = useState(0)
    const [localMaxValue, setLocalMaxValue] = useState(0)

    const dispatch = useDispatch()

    const setValuesToLS = () => {
        localStorage.setItem('localValue' , JSON.stringify(localValue))
        localStorage.setItem('localMaxValue' , JSON.stringify(localMaxValue))
    }

    const getValuesFromLS = () => {
        let startVal = localStorage.getItem('localValue')
        let maxVal = localStorage.getItem('localMaxValue')

        if (startVal) {
            setLocalValue(JSON.parse(startVal))
        }
        if (maxVal) {
            setLocalMaxValue(JSON.parse(maxVal))
        }
    }

    window.onload = getValuesFromLS

    const startValueHandler = (e: ChangeEvent<HTMLInputElement>) => {

        if (+e.currentTarget.value >= 0) {
            if (+e.currentTarget.value < localMaxValue) {
                setLocalValue(+e.currentTarget.value)
                dispatch(setErrorForStartValueAC('Set Values'))

            } else {
                dispatch(setErrorForStartValueAC('Incorrect value'))
                dispatch(setErrorForMaxValueAC('Incorrect value'))
            }
        } else {
            dispatch(setErrorForStartValueAC('Incorrect value'))
        }
        setLocalValue(+e.currentTarget.value);
    }

    const maxValueHandler = (e: ChangeEvent<HTMLInputElement>) => {

        if (+e.currentTarget.value >= 0) {
            if (+e.currentTarget.value > localValue) {
                setLocalMaxValue(+e.currentTarget.value)
                dispatch(setErrorForMaxValueAC('Set Values'))
            } else {
                dispatch(setErrorForStartValueAC('Incorrect value'))
                dispatch(setErrorForMaxValueAC('Incorrect value'))
            }
        } else {
            dispatch(setErrorForMaxValueAC('Incorrect value'))
        }
        setLocalMaxValue(+e.currentTarget.value)
    }

    const buttonHandler = () => {
        // props.setStartValueHandler(localValue)
        // props.setMaxValueHandler(localMaxValue)
        dispatch( setStartValueAC(localValue) )
        dispatch( setMaxValueAC(localMaxValue) )

        dispatch(setErrorForStartValueAC(null))
        dispatch(setErrorForMaxValueAC(null))
        setValuesToLS()
    }

    const maxInputClassName = props.errorForMaxValue === 'Incorrect value' ? 'incorrectValue' : 'correctValue'
    const startInputClassName = props.errorForStartValue === 'Incorrect value' ? 'incorrectValue' : 'correctValue'


    return (

        <div className={'secondCounter-wrapper'}>
            <div>
                Max value :
                <Input value={localMaxValue} className={maxInputClassName} onChange={maxValueHandler} type={'number'}/>
            </div>
            <div>
                Start value :
                <Input value={localValue} className={startInputClassName} onChange={startValueHandler} type={'number'}/>
            </div>
            <Button name={'Set'}
                    callback={buttonHandler}
                    disabled={props.errorForStartValue === 'Incorrect value' || props.errorForMaxValue === 'Incorrect value'}

            />
        </div>
    );
};

