import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';


function App() {
  const [newOrder, setNewOrder] = useState([]);

  useEffect(() => {
    console.log('in useEffect')
    getMenu();
    getOrder();
  }, []);

  const dispatch = useDispatch();

//This function returns the data from the pizza table in the db. basically the menu
//it will then be rendered to the dom below using map
  const getMenu = () => {
    axios({
      method: 'GET',
      url: '/api/pizza'
    }).then( (response) => {
        dispatch( { type: 'setPizzaMenu', payload: response.data } );
        console.log( 'back from getPizza with:', response );
    }).catch( (err) => { 
        console.log(err);
        alert( 'problem in getMenu' )
    })
  }//end of getMenu

  //Will add to customer order 
  //tested it by pluggin in object and logging post route. WORKING
  const addOrder = () => {
    axios({
      method: 'POST',
      url: '/api/order',
      data: newOrder
    }).then ( ( response ) => {
      console.log('back from POST with:', response);
    }).catch( (err) => {
      console.log( err );
      alert( 'err in addOrder' );
    })
  }//end of addOrder

  const getOrder = () => {
    axios({
      method: 'GET',
      url: '/api/order'
    }).then( (response) => {
        console.log( 'back from getOrder with:', response );
    }).catch( (err) => { 
        console.log(err);
        alert( 'problem in getOrder' )
    })
  }//end of getOrder

  return (
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Prime Pizza</h1>
      </header>
  
      <img src='images/pizza_photo.png' />
      <p>Pizza is great.</p>
  
    </div>
  );
}

export default App;
