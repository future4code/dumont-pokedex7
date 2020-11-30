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
<<<<<<< HEAD
=======
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
>>>>>>> 68fa8540ffe2fdfb2b86a40f0547e9d57bbd8087
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
                        {moves && moves.map((moves) => {
                          return <p>{moves}</p>
                        })}
                  </PokeMovesContainer >
              </TypeMovesFlexBox >
<<<<<<< HEAD
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
=======
>>>>>>> 68fa8540ffe2fdfb2b86a40f0547e9d57bbd8087
        </DetailsFlexBox>
    </React.Fragment>
  )
}
export default DetailsCard; 