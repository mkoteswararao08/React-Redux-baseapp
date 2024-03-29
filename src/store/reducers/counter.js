const initialState={
    counter:0,
}


const reducer=(state=initialState,action)=>{
    console.log('Counter Reducer -->',action.type)
    switch(action.type){
        case 'INCREMENT':
            return {
                ...state,
                counter:state.counter+1
            } 
        case 'DECREMENT':
            return {
                ...state,
                counter:state.counter-1
            }
        case 'ADD' :
            return {
                ...state,
                counter : state.counter+action.value
            } 
        case 'SUBTRACT' :
            return {
                ...state,
                counter :state.counter-action.value
            }
        default :
             return state                  
    }

}

export default reducer;