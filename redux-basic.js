const redux=require('redux');
const createStore=redux.createStore;

const initialState={
    counter:0,
    age:23
}

//reducer
const rootReducer=(state=initialState,action)=>{
    if(action.type==='INC_COUNTER'){
        var x={
            ...state,                           //we can't change state directly.we will update state in mutable way.
            counter:state.counter + 1
        }
        return x;
    }
    if(action.type==='ADD_COUNTER'){
          return {
              ...state,
              counter:state.counter+action.value
          }
    }
    return state;
}

//store
const store=createStore(rootReducer);
console.log(store.getState());

//subscription
store.subscribe(()=>{
    console.log('subscribe method ',store.getState());
})

store.subscribe(()=>{
    console.log('subscribe method --> 2 ',store.getState());
})

console.log('----------------------------------')
//dispatching action
store.dispatch({type:'INC_COUNTER'});
console.log(store.getState());
store.dispatch({type:'ADD_COUNTER',value:10});
console.log(store.getState());


/** ------------------------------Redux---------------------------------
 * -->  
 * 
 * 
 * 
 */
