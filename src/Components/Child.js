import React from 'react';
import VaC from '../ValueContext';


let Child = () => {
    let Val = React.useContext(VaC);
    
    return (
        <div>
            <h1>Room is {Val[0]? "Lit" : "Dark"}</h1>
            <button onClick = {()=>{
                Val[1](!Val[0]);
            }}>Toggle switch</button>
        </div>
    );
}
export default Child;