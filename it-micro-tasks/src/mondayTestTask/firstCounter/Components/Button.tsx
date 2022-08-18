import React from 'react';

export type ButtonPropsType = {
    name : string
    callback : () => void
    disabled: boolean
}

export const Button = (props : ButtonPropsType) => {

    return (
        <div>
            <button disabled={props.disabled} onClick={props.callback}>{props.name}</button>
        </div>
    );
};
