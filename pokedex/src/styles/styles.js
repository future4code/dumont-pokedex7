import styled from 'styled-components'


//HEADER PARA TODAS PAGES

export const Header = styled.header `
    background-color:#ff6666;
    color:#fff;
    height: 50px;
    padding:20px 20px;
    display:flex;
    justify-content:space-between;
    align-items:center;
    text-align:center;
    box-shadow: 3px 3px 3px 3px   #d9d9d9;
`
//FLEXBOX PARA HOME E DETALHES---
export const HomeFlexBox = styled.main `
height:100vh;
display:flex;
justify-content:center;
justify-content:space-evenly;
flex-wrap: wrap;
padding-top:50px;
`

//POKE CARD ESTILOS ------------------
export const PokeCardContainer = styled.div `
  background-color: #f2f2f2;
  display:flex;
  flex-direction:column;
  justify-content:space-evenly;
  justify-content:center;
  text-align:center;
  height: 300px;
  width: 200px;
  margin:15px;
  box-shadow: 3px 3px 3px 3px   #d9d9d9;

  img{
    background-color:   #d9d9d9;
    border-radius:100%;
    height:400px;
    width:200px;
  }
`
export const DetailsFlexBox = styled.main `
  display: flex;
  justify-content:center;
  flex-wrap: wrap;
 padding-top: 8%;

`
//ESTILOS PARA O DETAILS CARD
export const ImgFlexBox = styled.div `
    display:flex;
    flex-direction: column;
    justify-content:center;
    align-items:center;
    text-align:center;
    align-content:center;
`
export const PokeImgContainer = styled.div `
    background-color:#f2f2f2f2;
    height:250px;
    width:250px;
    margin: 20px;
    box-shadow: 3px 3px 3px 3px   #d9d9d9;
    display:flex;
    justify-content:center;
    text-align:center;
    align-items:center;
`

export const StatsFlexBox = styled.div `
    display:flex;
    justify-content:column;
    text-align:Center;
`
export const PokeStatsContainer = styled.div `
  background-color:#f2f2f2f2;
    height:543px;
    width:300px;
    margin: 20px;
    box-shadow: 3px 3px 3px 3px   #d9d9d9;
    display:flex;
    flex-direction:column;
    justify-content:center;
    text-align:center;
    align-items:center;
    
`
export const TypeMovesFlexBox = styled.div `
    display:flex;
    flex-direction:column;
`
export const PokeTypeContainer = styled.div `
   background-color:#f2f2f2f2;
    height:60px;
    width:400px;
    margin: 20px;
    box-shadow: 3px 3px 3px 3px   #d9d9d9;
    display:flex;
    flex-direction:row;
    justify-content: space-evenly;
`

export const PokeMovesContainer = styled.div`
 background-color:#f2f2f2f2;
    height:439px;
    width:400px;
    margin: 20px;
    box-shadow: 3px 3px 3px 3px   #d9d9d9;
    display:flex;
    flex-direction:column;
    justify-content:center;
    text-align:center;
    align-items:center;
`

//BOTOES -------------------------------------
export const BtnContainer = styled.div`
display: flex;
flex-direction:row;
`
export const ButtonContainer = styled.div `
  margin:10px;

  a{
    color:#ffff33;
      text-decoration:none;
      list-style:none;
  }
`

export const DetailsBtnContainer = styled.div `
    margin:5px;
    color:#fff;
    
    a{
        color:black;
        text-decoration:none;
        list-style:none;
      
    }
`