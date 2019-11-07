import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// eslint-disable-next-line
import {createStore,combineReducers,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import { createLogger} from 'redux-logger';
import {Provider} from 'react-redux';
import reducer from './store/reducer';

//For Combining multiple reducers.
/* 
import counterReducer from './store/reducers/counter';
import resultReducer from './store/reducers/result';
/*--> For combineReducers() we need to pass json object. inside json object we need to mention reducers in 
      key and value format. 
  --> If any action dispatches, action will goes to every reducers. but it will do operation only in one reducer 
      where every action matches. we can check this with coonsole.log() in every reducers.
  --> Every reducers contains state separately. but combineReducers() method makes them into one single state.
      suppose if we want to access one particular reducers state in any component, then we need to use 
      key name of reducer after state.
      Ex: state.ctr.counter,
          state.res.results   

const rootReducer= combineReducers({
    ctr:counterReducer,
    res:resultReducer
})
const store = createStore(rootReducer) //for combining multiple reducers.
*/


/* Apply Middleware
   --> To use middleware, we need to import applyMiddleware from redux. and passes that function as argument 
       to createStore(reducer,applyMiddleware()).
   --> Middleware will we executed before going to reducer.
   --> we can write any number of middlewares. every middleware will be executed before going to reducer.
   --> Inside middleware, we need to call next(action) method. then only it will go to next middleware
       or reducer.  
   --> next(action) method will returns action after reducer completion only. backward flow will be goes 
       from last middleware to fast middleware.   
   --> Inside middleware we can change or modify the action type also.           
*/
const logger= store =>{
    return next=>{
        return action=>{
            console.log('[Middleware] Dispatching -->1 ', action);
            next(action);
            // const result=next(action);
            // console.log('[Middleware] next state -->1 ',store.getState(),result);
            // return result;
        }
    }
}

const logger2= store =>{
    return next=>{
        return action=>{
            console.log('[Middleware] Dispatching -->2 ', action);
            next(action);
            // const result=next(action);
            // console.log('[Middleware] next state -->2 ',store.getState(),result);
            // return result;
        }
    }
}

// eslint-disable-next-line
const loggerMiddleware = createLogger() //middleware to log the data. pass the data to applyMiddleware() function.  

const store=createStore(reducer,applyMiddleware(logger,logger2,thunk)); //for single reducer

//for using Redux DevTools.
// const store = createStore(reducer, /* preloadedState, */ window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()) 

ReactDOM.render(<Provider store={store} ><App /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();


/**
 * --> redux directly can't connect to react.
 * --> react-redux helps to connect react app. 
 * --> <Provider><App /></Provider> this makes us to inject store value into react app. 
 * --> Provider is a helper component, which allows us inject store value into react app. 
 * --> For provider component we need to pass store props. store props contains store value created by us.
 *     now store value is connected to react app. 
 */
