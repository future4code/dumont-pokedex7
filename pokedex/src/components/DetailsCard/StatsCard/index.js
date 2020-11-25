import React from 'react'
import {PokeStatsContainer} from '../styled'

const StatsCard = () => {
  return(
    <PokeStatsContainer>
      <h3>Stats</h3>
      <p><strong>hp:</strong> 45</p>
      <p><strong>attack:</strong>49</p>
      <p><strong>defense:</strong>49</p>
      <p><strong>special-attack:</strong>65</p>
      <p><strong>special-defense:</strong>65</p>
      <p><strong>speed:</strong>45</p>
    </PokeStatsContainer>
  )
}
export default StatsCard;