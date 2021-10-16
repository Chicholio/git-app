import { useState, useEffect, useRef } from 'react'

const useFetch = (url) => {

    const refMount = useRef(true)
    
    const [state, setstate] = useState({
        data: null,
        loading: true,
        error: null
    })

    useEffect(() => {
        return () => {
            refMount.current = false
        }
    }, [])

    useEffect(() => {
        fetch(url)
        .then(resp => resp.json())
        .then(data => {

            if (refMount.current) {
                setstate({
                    loading: false,
                    error: null,
                    data
                })
            } else {
                console.log('Componente desmontado')
            }

        })
    }, [url])
    
    return state
}

export default useFetch