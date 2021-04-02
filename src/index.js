import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';

const pizzaMenu =( state=[], action ) =>{
    console.log('in pizzaMenu reducer:', action );
    if( action.type === 'setPizzaMenu' ){
        console.log( 'set pizzaMenu state' );
        state = [ action.payload ];
    }
    console.log(state);
    return state;
}//end pizzaMenu reducer

const store = createStore(
    combineReducers({
        pizzaMenu: pizzaMenu
    }),
    applyMiddleware( logger )
)//end of store 


ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
