import React, { useState } from 'react';
import { HandleCounter } from './components/handleCounter';
import {DoubleCounter} from './components/doubleCounter'
import { CounterContextProvider } from './contexts/CounterContext';


function App() {


  return(
    <CounterContextProvider>
    <div>
    <HandleCounter/>
    <DoubleCounter/>
    </div>
    </CounterContextProvider>
  )
}

export default App;
