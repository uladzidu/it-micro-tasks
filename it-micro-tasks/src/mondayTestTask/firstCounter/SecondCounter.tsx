import React from 'react';
import Number from "./Components/Number";
import '../testMonday.css'
import {Button} from "./Components/Button";


export type SecondCounterPropsType = {
    startValue: number
    maxValue: number
    incFunc: () => void
    resetFunc: () => void
    errorForStartValue: string | null
    errorForMaxValue: string | null
}

export const SecondCounter = (props: SecondCounterPropsType) => {

    const buttonResetDisabled = props.errorForStartValue === 'SET VALUES' || props.errorForMaxValue === 'SET VALUES'
    const buttonIncDisabled = props.startValue === props.maxValue
        || props.errorForStartValue === 'SET VALUES'
        || props.errorForMaxValue === 'SET VALUES'

    return (
        <div className={'firstCounter-wrapper'}>
            <div className={props.startValue === props.maxValue ? 'maxValue' : ''}>
                <Number
                    value={props.startValue}
                    error={props.errorForStartValue}
                />
            </div>
            <div className={'buttons'}>
                <div className={'btn1'}>
                    <Button
                        name={'inc'}
                        callback={props.incFunc}
                        disabled={buttonIncDisabled}
                    />
                </div>
                <div className={'btn2'}>
                    <Button
                        name={'reset'}
                        callback={props.resetFunc}
                        disabled={buttonResetDisabled}
                    />

                </div>
            </div>
        </div>
    );
};
