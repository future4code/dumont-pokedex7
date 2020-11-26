import  { useEffect, useState } from 'react'
import axios from 'axios'

const useRequestData = (url, initialState) => {
    const [dados,setDados] = useState(initialState)
    const getDados = () =>{ 
        axios.get(url).then(resposta => {
            setDados(resposta.data)
        })
        .catch(error =>
            {console.log(error)})
        }
        useEffect(() => {
            getDados()
          }, []) 

    return(dados) 
    
}

export default useRequestData;