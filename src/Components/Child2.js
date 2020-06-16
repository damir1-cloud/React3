import React, {useReducer} from 'react';
import NewReducer from '../Reducer';

let Child2 = () => {
    let [state, dispatch] = useReducer(NewReducer, 45);

    return(
        <div>
            <h1>my age is {state}</h1>
            <button onClick = {()=>{
                dispatch({type:"INCREMENT"});
            }}>Increase my age</button>
            <button onClick = {()=> {
                dispatch({type:"DECREMENT"});
            }}>Decrease my age</button>
        </div>
    );

}
export default Child2;