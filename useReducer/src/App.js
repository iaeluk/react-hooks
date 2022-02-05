import React, { useState, useReducer } from 'react';

const initialState = {
          red: 0,
          green: 0,
          blue: 0
}

const reducer = (state, action) => {
  
  switch (action.type) {
    case 'aumentarVermelho':
        return {
          ...state,
          red: state.red + 1
        }

    case 'aumentarVerde':
    return {
      ...state,
      green: state.green + 1  
    }

    case 'aumentarAzul':
      return {
        ...state,
        blue: state.blue + 1
      }

    case 'resetar':
      return {
        red: initialState.red,
        green: initialState.green,
        blue: initialState.blue
      }

    default:
      return state
  }

}

function App() {


  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <>
    <h1>Vermelho: {state.red}</h1>
    <h1>Verde: {state.green}</h1>
    <h1>Azul: {state.blue}</h1>

    <button onClick={() => {dispatch({type: 'aumentarVermelho'})}}>Aumentar Vermelho</button>
    <button onClick={() => {dispatch({type: 'aumentarVerde'})}}>Aumentar Verde</button>
    <button onClick={() => {dispatch({type: 'aumentarAzul'})}}>Aumentar Azul</button>


    <button onClick={() => {dispatch({type: 'resetar'})}}>Resetar</button>




    </>
  );
}

export default App;
