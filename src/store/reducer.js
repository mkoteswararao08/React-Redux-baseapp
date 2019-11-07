const initialState={
    counter:0,
    results:[]
}


const reducer=(state=initialState,action)=>{
    console.log('Single Reducer--> ',action.type);
    switch(action.type){
        case 'INCREMENT':
            // setTimeout(()=>{
            //     return {
            //         ...state,
            //         counter:state.counter+1
            //     }      
            // },2000);
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

//     if(action.type === 'INCREMENT'){
//        return {
//            counter:state.counter+1
//        }
//    }
//    if(action.type === 'DECREMENT'){
//        return {
//            counter:state.counter-1
//        }
//    }
//    if(action.type === 'ADD'){
//        return {
//            counter : state.counter+action.value
//        }
//    }
//    if(action.type === 'SUBTRACT'){
//        return{
//            counter :state.counter-action.value
//        }
//    }
    // return state;
}

export default reducer;


/**
 * --> Push() will adds element to original array. where as concat() adds element to array but returns 
 *     new array.
 * --> so if we use push() method then it is mutably way doing. where as if we use concat() method  then it is 
 *     immutably way of doing. 
 * --> splice() will removes elemente from original array. where as filter() will removes elements and gives 
 *     new array.  
 * --> so if we use splice() method then it is mutably way doing. where as if we use filter() method  then it is 
 *     immutably way of doing.
 * 
 * 
 * --> Why we need to update state immutably way?
 *         In redux store or react state, before updating state it will checks references only.so if we update directly
 *     state then while updating it will checks references, after updating state value also still it having same 
 *     reference only. because of this react or redux won't re-render dom. 
 *     -> After change of state also. state object having same reference, so it is checking references that why 
 *        it won't renders dom. so always update state immutably, that is create new object and return that object.
 *        so that while checking return object with state, both are having different references. because of that 
 *        react or redux renders dom. redux or react checks references because it gives improvement in performance. 
 *        where as if we check every value then it will take lot of time.          
 * --> Redux's use of shallow equality checking requires immutability if any connected components 
 *     are to be updated correctly.           
 * --> Shallow equality checking (or reference equality) simply checks that two different variables reference the 
 *     same object; in contrast, deep equality checking (or value equality) must check every value of two 
 *     objects' properties.
 * --> A shallow equality check is therefore as simple (and as fast) as a === b, whereas a deep equality 
 *     check involves a recursive traversal through the properties of two objects, comparing the value 
 *     of each property at each step.
   --> It's for this improvement in performance that Redux uses shallow equality checking.       
 */

 /**
  * --> we can't write asynchronous code inside the reducer. because reducer will returns before 
  *     completing asynchronous code.
  * --> suppose if we write asynchronous(setTimeOut, api) code inside the reducer then it won't
  *     work properly. it will moves to next switch case.
  * --> To write asynchronous code, redux provided  redux thunk. using redux thunk we can return 
  *     function in action creators.
  * 
  */