import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  flex-direction: column;
  padding: 0 10% 0 10%;
`
export const GridContainerMain = styled.div`
  display: grid;
  grid-row-gap: 20px;
  grid-template-columns: auto;
`

export const GridContainer = styled.div`
  display: grid;
  border: 1px solid rgb(237, 237, 237);
  grid-template-columns: 24% 24% 24% 24%;
  padding: 15px;
  grid-gap: 10px;
  @media(max-width: 1080px) {
    grid-template-columns: 32% 32% 32%;
  }
  @media(max-width: 850px) {
    grid-template-columns: auto;
  }
`

export const GridItem = styled.div`
  background-color: rgba(255, 255, 255);
  border: 0px solid rgba(0, 0, 0, 0.8);
  font-size: 15px;
  text-align: ${props => props.notBtn ? "start" : "center"};
  align-self: center;
  @media(max-width: 850px) {
    text-align: center;
  }
`

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 24px;
`

export const InfoContainer = styled.div`
  padding: 24px 0px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const H2Div = styled.div`
  color: rgba(107, 115, 124, 255);
  font-size: 20px;
  font-weight: bold;
`
export const H3Div = styled.div`
  color: rgba(190, 190, 190, 255);
  font-size: 20px;
  margin-top: 10px;
`

export const UserIconSt = styled.img`
  height: 40px;
  fill: white;
  margin-right: 20px;
`
export const BtEditPage = styled.button`
  background-color:  ${props => props.novo ? "rgba(226,153,51,255)" : "white"};
  color: ${props => props.novo ? "white":"rgba(226,153,51,255)"};
  border-color: rgba(229,203,154,255);
  padding: ${props => props.novo ? "10px 20px 10px 20px": "10px 25px 10px 25px"};
  font-size: 18px;
  border-radius: 5px;
  margin-right:  ${props => props.novo ? "5%" : ""};;
  width: ${props => props.novo ? "" : "50%"};
  min-width: 100px;

  &:hover{
    background-color: ${props => props.novo ? "white":"rgba(226,153,51,255)"};
  color: ${props => props.novo ? "rgba(226,153,51,255)" : "white"};
  }

  @media(max-width: 820px) {
    padding: 5px 10px 5px 10px;
    font-size: 14px;
  }
  
`
export const Dot = styled.span`
  height: 14px;
  width: 14px;
  background-color: ${props => props.tipo === 'active'? "green" : 
                                props.tipo === 'waiting' ? "yellow":
                                props.tipo === 'inactive' ? "red": "gray"};
  border-radius: 50%;
  display: inline-block;
  margin-right: 5px;
`
export const Bold = styled.div`
  font-weight: bold;
  color: rgba(190, 190, 190, 255);
`

export const UserValues = styled.div`
  color: rgba(190, 190, 190, 255);
`