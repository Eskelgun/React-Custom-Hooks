import { useState } from "react"


export const useCounter = (initialState = 0) => {

    const [state, setstate] = useState(initialState) //0

    const incrementar = () => {
        setstate(state+1)
    }

    const decrementar = () => {
        setstate(state-1)
    }

    const reiniciar = () => {
        setstate(initialState)
    }

    return {
        state,
        incrementar,
        decrementar,
        reiniciar,
    }

}


