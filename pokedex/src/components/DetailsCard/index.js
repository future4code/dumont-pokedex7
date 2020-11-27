import React from 'react'
import {PokeStatsContainer, PokeMovesContainer, PokeTypeContainer,PokeImgContainer,DetailsFlexBox,ImgFlexBox, StatsFlexBox, TypeMovesFlexBox} from '../../styles/styles'

const DetailsCard = () => {

  return(
    <div>
          <DetailsFlexBox>

        <ImgFlexBox>
            <PokeImgContainer>
                {/*Front img pokemon */}
                  <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png" height="300px" alt=""/>
            </PokeImgContainer>
            <PokeImgContainer>
              {/*Back img pokemon */}
                  <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png" height="300px" alt=""/>
            </PokeImgContainer>
        </ImgFlexBox>
        <StatsFlexBox>
              <PokeStatsContainer>
                  <h3>Stats</h3>
                  <div>
                    <p><strong>hp:</strong> 45</p>
                    <p><strong>attack:</strong>49</p>
                    <p><strong>defense:</strong>49</p>
                    <p><strong>special-attack:</strong>65</p>
                    <p><strong>special-defense:</strong>65</p>
                    <p><strong>speed:</strong>45</p>
                  </div>
          </PokeStatsContainer>
        </StatsFlexBox>
        <TypeMovesFlexBox>
                <PokeTypeContainer>
                    <h3>Type: </h3>
                    <p>glass</p>
                    <p>poison</p>
              </PokeTypeContainer>
              <PokeMovesContainer>
                  <h3>Moves</h3>
                  <p>razor-wind</p>
                  <p>sword-dance</p>
                  <p>cut</p>
                  <p>bind</p>
                  <p>vine-whip</p>
            </PokeMovesContainer>
          </TypeMovesFlexBox>
      </DetailsFlexBox>
    </div>
  )
}

export default DetailsCard;