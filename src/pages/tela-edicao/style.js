import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  flex-direction: column;
`
export const GridContainerMain = styled.div`
  display: grid;
  /* grid-row-gap: 20px; */
  grid-template-columns: auto auto;
  width: 300px;
  
  @media(max-width: 350px) {
    width: 90%;
  }
`

export const GridButton = styled.div`
  background-color: rgba(255, 255, 255);
  border: 0px solid rgba(0, 0, 0, 0.8);
  font-size: 15px;
  text-align: center;
  align-self: center;
  width: 100%;
`

export const GridItem = styled.div`
  background-color: rgba(255, 255, 255);
  border: 0px solid rgba(0, 0, 0, 0.8);
  font-size: 15px;
  text-align: start;
  align-self: center;
  grid-column-start: 1;
  grid-column-end: 3;
  padding: 4px 0px;
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

export const TextBox = styled.input`
  width: 100%;
  padding: 10px;
  border-radius: 5px;
`
export const SelectBox = styled.select`
  width: 100%;
  padding: 10px;
  border-radius: 5px;
`
export const ButtonCriar = styled.button`
  width: 90%;
  padding: 5%;
  border-radius: 5px;
  border-color: rgba(228, 177, 105, 255);
  border-width: 1px;
  background-color: rgba(226, 153, 51, 255);
  color: ${(props) =>
    props.tipo === 'voltar' ? 'white' : 'rgba(226, 153, 51, 255)'};
`
export const ButtonVoltar = styled.button`
  width: 90%;
  padding: 5%;
  border-radius: 5px;
  border-color: rgba(228, 177, 105, 255);
  border-width: 1px;
  background-color: white;
  color: rgba(226, 153, 51, 255);
`
export const UserIconSt = styled.img`
  height: 40px;
  fill: white;
  margin-right: 20px;
`
