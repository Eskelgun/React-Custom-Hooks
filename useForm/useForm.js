import { useState } from "react";

export const useForm = (initialState = {}) => {
    
    const [state, setstate] = useState(initialState)

    const reset = () => {
        setstate(initialState)
    }

    const inputChange = ({ target }) => {
        // console.log(e.target.name);
        // console.log(e.target.value);
        setstate({
            ...state,
            [target.name]: target.value
        });
    }

    return [state,inputChange, reset ]
};
