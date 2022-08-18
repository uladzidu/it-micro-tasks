import React, {ChangeEvent, useState} from 'react';

export type StartValuePropsType = {
    setStartValueFunc: (value: number) => void
}

export const StartValue = (props : StartValuePropsType) => {

     const onChangeHandler = (e : ChangeEvent<HTMLInputElement>) => {
        props.setStartValueFunc(+e.currentTarget.value)
    }

    return (
        <div>
            Start value :
            <input onChange={onChangeHandler} type={"number"}/>
        </div>
    );
};