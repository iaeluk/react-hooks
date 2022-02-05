import { useEffect, useState, useContext } from "react"
import { CounterContext } from "../contexts/CounterContext"

export function DoubleCounter(){
    const [doubleCounter, setDouleCounter] = useState(0)
    const {counter} = useContext(CounterContext)

    useEffect(() => {
        setDouleCounter(counter * 2)
    }, [counter])

    return (
        <h1>Dobro de Counter: {doubleCounter}</h1>
    )
}