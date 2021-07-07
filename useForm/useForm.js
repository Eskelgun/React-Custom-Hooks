import { useState } from "react";

export const useForm = (initialState = {}) => {
    
    const [values, setValues] = useState(initialState);

    const reset = () => {
        setstate(initialState)
    }

    const handleInputChange = ({ target }) => {
        // console.log(e.target.name);
        // console.log(e.target.value);
        setstate({
            ...state,
            [target.name]: target.value
        });
    }

    return [values,handleInputChange, reset ]
};
