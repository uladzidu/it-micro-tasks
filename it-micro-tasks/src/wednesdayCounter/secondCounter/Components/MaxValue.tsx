import React, {ChangeEvent, useState} from 'react';
import '../../testMonday.css'

export type MaxValuePropsType = {
    setMaxValueFunc: (value: number) => void
}

export const MaxValue = (props : MaxValuePropsType) => {

    const onChangeHandler = (e : ChangeEvent<HTMLInputElement>) => {
        props.setMaxValueFunc(+e.currentTarget.value)
    }


    return (
        <div>
            Max value :
            <input onChange={onChangeHandler} type={"number"}/>
        </div>
    );
};