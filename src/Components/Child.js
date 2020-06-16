import React, {useContext} from 'react';
import VaC from '../ValueContext';
import Child2 from './Child2';


let Child = () => {
    let Val = useContext(VaC);
    
    return (
        <div className = {`cdiv ${Val[0]? "lit" : "dark"}`}>
            <h1>Room is {Val[0]? "Lit" : "Dark"}</h1>
            <button onClick = {()=>{
                Val[1](!Val[0]);
            }}>Toggle switch</button>
            <br/><br/>
            <Child2/>
        </div>
    );
}
export default Child;