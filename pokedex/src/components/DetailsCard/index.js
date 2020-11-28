import React, { useEffect, useState } from 'react'
import {PokeStatsContainer, PokeMovesContainer, PokeTypeContainer,PokeImgContainer,DetailsFlexBox,ImgFlexBox, StatsFlexBox, TypeMovesFlexBox} from '../../styles/styles'
import axios from 'axios'
import { baseURL } from '../../constants/urls'

const DetailsCard = (props) => {
  const [data, setData] = useState({})

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

  return(
    <React.Fragment>
          <DetailsFlexBox role="main">
              <ImgFlexBox  role="div">
                  <PokeImgContainer role="div">
                        {/*Get front img pokemon */}
                        {data.sprites && <img 
                        role="img" src={data.sprites.front_default}
                        height="300px" alt=""/>}
                  </PokeImgContainer >
                  <PokeImgContainer role="div">
                        {/*Get back img pokemon */}
                        {data.sprites && <img 
                        role="img" src={data.sprites.back_default}
                        height="300px" alt=""/>}
                  </PokeImgContainer>
            </ImgFlexBox >
            <StatsFlexBox role="div">
                    <PokeStatsContainer roles="div">
                          <h3 role="h3">Stats</h3>
                          <React.Fragment>
                              {data.stats && data.stats.map((stat) => {
                                return <p role="p"
                                    key={stat.stat.name}>
                                    <strong>{stat.stat.name}: 
                                    </strong>{stat.base_stat}
                                  </p>
                              })}
                          </React.Fragment>
                  </PokeStatsContainer >
            </StatsFlexBox >
            <TypeMovesFlexBox role="div">
                      <PokeTypeContainer role="div">
                          <h3 role="h3">Type: </h3>
                          {data.types && data.types.map((type) => {
                            return <p>
                                  {type.type.name}
                              </p>
                          })}
                    </PokeTypeContainer>
                    <PokeMovesContainer roles="div">
                        <h3 role="h3">Moves</h3>
                        
                        {data.moves && 

                        <React.Fragment>
                              <p>{data.moves[0].move.name}</p>
                              <p>{data.moves[1].move.name}</p>
                              <p>{data.moves[2].move.name}</p>
                              <p>{data.moves[3].move.name}</p>
                              <p>{data.moves[4].move.name}</p>
                              <p>{data.moves[5].move.name}</p>
                              <p>{data.moves[6].move.name}</p>
                              <p>{data.moves[7].move.name}</p>
                          </React.Fragment>}
                  </PokeMovesContainer >
              </TypeMovesFlexBox >
        </DetailsFlexBox>
    </React.Fragment>
  )
}
export default DetailsCard; 