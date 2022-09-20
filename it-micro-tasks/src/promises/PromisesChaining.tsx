import React from 'react';
import '../App.css';

function PromisesChaining() {

    function getNumber() {
        return Promise.resolve(Math.random())
    }

    // getNumber().then(n => console.log(n))

    setTimeout( () => {console.log(1)}, 1000 )
    setTimeout( () => {console.log(2)}, 2000 )
    console.log(4)
    setTimeout( () => {console.log(3)}, 3000 )


























return (
    <div>

    </div>
)
}

export default PromisesChaining;
