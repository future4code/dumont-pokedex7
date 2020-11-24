import  { useEffect, useState } from 'react'
import axios from 'axios'

const GetHooks = () => {
    const [dados,setDados] = useState([])
    const getDados = () =>{ 
        axios.get('https://pokeapi.co/api/v2/pokemon').then(resposta => {
            setDados(resposta.data.results)
            console.log(resposta.data.results)
        })
        .catch(error =>
            {console.log(error)})
        }
        useEffect(() => {
            getDados()
          }, []) 

    return(dados.map) 
    
}

export default GetHooks;