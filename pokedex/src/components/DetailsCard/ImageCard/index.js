import React from 'react'
import {PokeImgContainer} from '../styled'

const ImageCard = () => {
  return(
    <PokeImgContainer>
        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png" height="300px" alt=""/>
    </PokeImgContainer>
  )
}
export default ImageCard;