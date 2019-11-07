import React, { Component } from 'react';

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';

import {connect} from 'react-redux'
import * as actionTypes from '../../store/actions';

class Counter extends Component {
   
    render () {
        return (
            <div>
                <CounterOutput value={this.props.ctr} />
                <CounterControl label="Increment" clicked={this.props.onIncrementCounter} />
                <CounterControl label="Decrement" clicked={this.props.onDecrementCounter}  />
                <CounterControl label="Add 5" clicked={this.props.onAddCounter}  />
                <CounterControl label="Subtract 5" clicked={this.props.onSubtractCounter}  />
                <hr />
                <button onClick={this.props.onStoreResult}>Store Result</button>
                <ul>
                    {this.props.res.map(strResult=>(
                        <li onClick={()=>this.props.onDeleteResult(strResult.id)} key={strResult.id}>{strResult.value} is created {strResult.id}</li>
                    ))} 
                </ul>
            </div>
        );
    }
}

const mapStateToProps = state=>{
    // console.log('MapStateToProps--->',state)//called every time, when every state value changes.
    return {
        ctr:state.counter,
        res:state.results
    };
};

//To get data from multiple reducers
// const mapStateToProps = state=>{
//     return {
//         ctr:state.ctr.counter,
//         res:state.res.results
//     };
// };

const mapDispatchToProps=dispatch =>{
    // console.log('MapDispatchToProps--->',dispatch)  //Called only once.
    return {
        // onIncrementCounter : ()=>dispatch({type:actionTypes.INCREMENT}),
        // onDecrementCounter : ()=>dispatch({type:actionTypes.DECREMENT}),
        // onAddCounter : ()=>dispatch({type:actionTypes.ADD,value:5}),
        // onSubtractCounter: ()=>dispatch({type:actionTypes.SUBTRACT,value:15}),
        // onStoreResult : ()=>dispatch({type:actionTypes.STORE_RESULT}),
        // onDeleteResult : (id)=>dispatch({type:actionTypes.DELETE_RESULT,resultElID:id}),

        // Action Creators
        onIncrementCounter : ()=>dispatch(actionTypes.increment()),
        onDecrementCounter : ()=>dispatch(actionTypes.decrement()),
        onAddCounter : ()=>dispatch(actionTypes.add()),
        onSubtractCounter: ()=>dispatch(actionTypes.subtract()),
        onStoreResult : ()=>dispatch(actionTypes.storeResult()),
        onDeleteResult : (id)=>dispatch(actionTypes.deleteResult(id)),
    }
} 


export default connect(mapStateToProps,mapDispatchToProps)(Counter);


/**
 * --> connect is a function, which returns function for that function we can pass component.
 *     Ex: connect()(Counter);
 * --> We need to mention which part of state need to come to this component.because in big applications we have 
 *     lot of values is state.so using connect we can mention which part of state can come to this component.
 * --> we can mention which actions do we want to dispatch from particular. In big applications components will dispatch 
 *     so many number of actions. so we need to mention what are the actions does the component can dispatch.  
 * --> To mention what are the properties can be passed to this component, we will pass function which returns 
 *     required properties from redux store. this function takes redux store or state values and passes them as 
 *     props to this component.  
 * --> props given to this component are nothing but subscription to the store.
 * --> To dispatch action we need to pass another function to connect.this function will returns dispatch function
 *     with type of action. To call this function we will use this.props.functionName.
 * --> For suppose if we want to pass only store values that is subscription to store value. then pass one parameter to
 *     connect method. connect(mapStateToProps)(Counter).
 *     If you want only dispatch(action) from component to the store in redux. then pass first parameter as null and 
 *     second parameter as function.
 *     Ex:::  export default connect(null,mapDispatchToProps)(Counter);

 *      
 */