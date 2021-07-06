import { useEffect, useRef, useState } from "react"


export const useFetch = (url) => {
    
    const isWorking = useRef(true)

    const [state, setstate] = useState({data: null, loading: true, error: null})

    useEffect(() => {
        
        return () => {
            isWorking.current = false
        }
    }, [])

    useEffect(() => {

        setstate({data: null,
        loading: true,
        error: null})

        fetch(url).then(resp => resp.json())
        .then(data => {

            setTimeout(() => {

                if(isWorking.current){
                    setstate({
                        loading: false,
                        error: null,
                        data,
        
                    })
                }else{
                    console.log("Se desmontó - setState");
                }

            }, 3000);

        })
    }, [url])

    return state;

}