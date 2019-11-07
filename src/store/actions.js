export const INCREMENT='INCREMENT';
export const DECREMENT='DECREMENT';
export const ADD='ADD';
export const SUBTRACT='SUBTRACT';
export const STORE_RESULT='STORE_RESULT';
export const DELETE_RESULT='DELETE_RESULT';

// Action Creators
export const increment=()=>{
    return {
        type:INCREMENT
    }
}
export const decrement= ()=>{
    return {
        type : DECREMENT
    }
}
export const add= ()=>{
    return {
        type : ADD,
        value:5
    }
}
export const subtract= ()=>{
    return {
        type : SUBTRACT,
        value:15
    }
}
// --> action creator which returns action object only. 
// export const storeResult= ()=>{  
//        return {
//            type : STORE_RESULT
//         }
// }
// --> action creator which returns function instead of an action.
export const storeResult= ()=>{
    return (dispatch,getState)=>{
        console.log(getState());
        setTimeout(() => {
            dispatch({type : STORE_RESULT})          
        },2000); 
    }
}
export const deleteResult= (id)=>{
    return {
        type : DELETE_RESULT,
        resultElID:id
    }
}



/**
 * --> Action Types are outsourced in large applications, so that error can avoided while writing 
 *     action types in application. 
 * --> Action Creators are used to write action object outside. so that easy to handle action object.
 *     In action creators we will just return action object. 
 * --> In Big applications actionTypes and actionCreators both will be writen separately.
 */

 /** ---------------------------------------Redux-thunk-------------------------------------
  * --> Redux Thunk middleware allows you to write action creators that return a function instead of an 
  *     action. The thunk can be used to delay the dispatch of an action, or to dispatch only if a certain
  *     condition is met. The inner function receives the store methods dispatch and getState as parameters.
  *     Ex::
               export const storeResult= ()=>{
                    return (dispatch)=>{
                        setTimeout(() => {
                            dispatch({type : STORE_RESULT})          
                        },2000); 
                    }
                }
    --> To use redux thunk middleware we will pass this middleware inside applyMiddleware() function.                  
  * --> suppose if we writing async code inside action creators  without middleware then it will gives you 
  *     error. so we will use Redux thunk middleware.
  * --> Using redux thunk, we will return function instead of an action. so that it will do any async 
  *     operation(setTimeout or api calls) after that it will calls dispatch() function. 
  * --> The inner function receives the store methods dispatch and getState as parameters.
  *      1) Dispatch method is used to dispatch the action after async code execution.
  *      2) getState() method is used to access the state inside the action creator.         
  * 
  * 
  */
 /** --------------------Action-Creators vs Reducer-----------------------
  * --> Action creators can handle both  |   --> Reducer can handle only pure sync code
  *     sync and async code.             |  
  * --> Action creators shouldn't        |   --> used to update the state.
  *     prepare the state update to much.|
  * --> changes the data which goes into |   --> returns new state object.  
  *     the reducer.                     |                             
  */                   