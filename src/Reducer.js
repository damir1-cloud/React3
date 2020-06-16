let NewReducer = (state, action) => {
    switch(action.type){
        case 'INCREMENT':
            return state +1
        
        case 'DECREMENT':
            return state -1
           
        //no default

    }
}
export default NewReducer;

