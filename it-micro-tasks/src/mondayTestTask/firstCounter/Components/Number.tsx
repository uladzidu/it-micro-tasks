import React from 'react';

export type numberPropsType = {
    value :  number
    error : string | null
}

const Number = (props : numberPropsType) => {


    if (props.error) {
        return <div>{props.error}</div>
    } else {
        return <div>{props.value}</div>
    }
};

export default Number;