import { createContext, useState, useEffect } from "react";


export const CounterContext = createContext()


export function CounterContextProvider({children}){
    
  const [counter, setCounter] = useState(0)
  const [doubleCounter, setDouleCounter] = useState(0)


  function increaseCounter() {
    setCounter(counter + 1)
  }

  useEffect(() => {
    setDouleCounter(counter * 2)
  }, [counter])


    return(
        <CounterContext.Provider value={{counter, setCounter, increaseCounter, doubleCounter}}>
            {children}
        </CounterContext.Provider>
    )
}