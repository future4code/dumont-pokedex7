import React from 'react'
import styled from 'styled-components'

const DetailsContainer = styled.div `
    background-color:#f2f2f2f2;
    height:200px;
    width:200px;
    margin: 20px;
    border: 1px solid black;
`

const DetailsCard = () => {
    return(
      <DetailsContainer>
          Details
      </DetailsContainer>
    )
}

export default DetailsCard;