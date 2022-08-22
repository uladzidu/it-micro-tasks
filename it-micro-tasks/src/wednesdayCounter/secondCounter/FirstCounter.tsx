import React, {ChangeEvent, useEffect, useState} from 'react';
import {Button} from "../firstCounter/Components/Button";
import {Input} from "./Components/Input";
import '../testMonday.css'
import {useDispatch, useSelector} from "react-redux";
import {
    setErrorForMaxValueAC,
    setErrorForStartValueAC, setLocalValueAC,
    setMaxValueAC,
    setStartValueAC
} from "../reducers/counterReducer";
import {storeType} from "../reducers/store";

export type FirstCounterPropsType = {
    errorForStartValue: string | null
    errorForMaxValue: string | null
}

export const FirstCounter = (props: FirstCounterPropsType) => {

    // const [localValue, setLocalValue] = useState(0)
    const [localMaxValue, setLocalMaxValue] = useState(0)

    const localValue = useSelector<storeType,number>(state => state.counterReducer.localValue)

    const dispatch = useDispatch()
    // const errorForStartValue = useSelector<storeType,string|null>(state =>state.counterReducer.errorForStartValue )
    // const errorForMaxValue = useSelector<storeType,string|null>(state =>state.counterReducer.errorForMaxValue )


    const setValuesToLS = () => {
        localStorage.setItem('localValue', JSON.stringify(localValue))
        localStorage.setItem('localMaxValue', JSON.stringify(localMaxValue))
    }

    const getValuesFromLS = () => {
        let startVal = localStorage.getItem('localValue')
        let maxVal = localStorage.getItem('localMaxValue')

        if (startVal) {
            // setLocalValue(JSON.parse(startVal))
            dispatch(setLocalValueAC(JSON.parse(startVal)))
        }
        if (maxVal) {
            setLocalMaxValue(JSON.parse(maxVal))
            // dispatch(setMaxValueAC(JSON.parse(maxVal)))
        }
    }

    // window.onload = getValuesFromLS

    useEffect(getValuesFromLS, [dispatch])

    const startValueHandler = (e: ChangeEvent<HTMLInputElement>) => {

        if (+e.currentTarget.value >= 0) {
            if (+e.currentTarget.value < localMaxValue) {
                // setLocalValue(+e.currentTarget.value)
                dispatch(setLocalValueAC(+e.currentTarget.value))
                dispatch(setErrorForStartValueAC('Set Values'))

            } else {
                dispatch(setErrorForStartValueAC('Incorrect value'))
                dispatch(setErrorForMaxValueAC('Incorrect value'))
            }
        } else {
            dispatch(setErrorForStartValueAC('Incorrect value'))
        }
        // setLocalValue(+e.currentTarget.value)
        dispatch(setLocalValueAC(+e.currentTarget.value))
    }

    const maxValueHandler = (e: ChangeEvent<HTMLInputElement>) => {

        if (+e.currentTarget.value >= 0) {
            if (+e.currentTarget.value > localValue) {
                setLocalMaxValue(+e.currentTarget.value)
                // dispatch(setMaxValueAC(+e.currentTarget.value))

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
        dispatch(setStartValueAC(localValue))
        dispatch(setMaxValueAC(localMaxValue))

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

