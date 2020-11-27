import React, { useEffect, useState } from 'react'
import {PokeStatsContainer, PokeMovesContainer, PokeTypeContainer,PokeImgContainer,DetailsFlexBox,ImgFlexBox, StatsFlexBox, TypeMovesFlexBox} from '../../styles/styles'
import axios from 'axios'
import { baseURL } from '../../constants/urls'

const DetailsCard = (props) => {
  const [data, setData] = useState({})
  const [moves, setMoves] = useState([])

  const getPokeDetails = () => {
    axios.get(`${baseURL}/${props.pokemon.pokemon}`).then((res)=>{
      setData(res.data)
    }).catch((err)=>{
      console.log(err)
    })
  }

  useEffect(()=>{
    getPokeDetails()
  }, [])

  const renderMoves = () => {
    const newMoves = []
    if (data.moves) {
      for (let i=0; (i < 7 && i < data.moves.length); i++){
        newMoves.push(data.moves[i].move.name)
      }
      setMoves(newMoves)
    }
  }

  useEffect(() => {
    renderMoves()
  }, [data])

  return(
    <div>
          <DetailsFlexBox>

        <ImgFlexBox>
            <PokeImgContainer>
                {/*Front img pokemon */}
                  {data.sprites && <img src={data.sprites.front_default} height="300px" alt=""/>}
            </PokeImgContainer>
            <PokeImgContainer>
              {/*Back img pokemon */}
                  {data.sprites && <img src={data.sprites.back_default} height="300px" alt=""/>}
            </PokeImgContainer>
        </ImgFlexBox>
        <StatsFlexBox>
              <PokeStatsContainer>
                  <h3>Stats</h3>
                  <div>
                    {data.stats && data.stats.map((stat) => {
                      return <p key={stat.stat.name}><strong>{stat.stat.name}: </strong>{stat.base_stat}</p>
                    })}
                  </div>
          </PokeStatsContainer>
        </StatsFlexBox>
        <TypeMovesFlexBox>
                <PokeTypeContainer>
                    <h3>Type: </h3>
                    {data.types && data.types.map((type) => {
                      return <p>{type.type.name}</p>
                    })}
              </PokeTypeContainer>
              <PokeMovesContainer>
                  <h3>Moves</h3>
                  {moves && moves.map((moves) => {
                    return <p>{moves}</p>
                  })}
            </PokeMovesContainer>
          </TypeMovesFlexBox>
      </DetailsFlexBox>
    </div>
  )
}

export default DetailsCard; 