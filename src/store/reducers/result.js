const initialState={
    results:[]
}


const reducer=(state=initialState,action)=>{
    console.log('Result Reducer -->',action.type)
    switch(action.type){
        case 'STORE_RESULT' :
            return { 
                 ...state,  
                results :state.results.concat({id:Math.random(), value: state.counter})   //results array contains json object.[{id:2,value:1},{id:7,value:6}] 
            }       
        case 'DELETE_RESULT' :
            const updatedArray = state.results.filter((result)=> result.id!==action.resultElID)
            return {
                 ...state,
                 results: updatedArray   
            } 

        default :
             return state                  
    }

}

export default reducer;