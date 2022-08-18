import React from 'react';

type InputPropsType = {
    onChange : any
    type : any
    className? : string
    value? : number
}

export const Input = ( props : InputPropsType ) => {

    return (
        <div>
            <input value={props.value} className={props.className} onChange={props.onChange} type = {props.type} />
        </div>
    );
};
