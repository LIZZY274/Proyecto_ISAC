import React from 'react'
import { styled } from 'styled-components'


function Lugar() {
  return (
    <ContainerLugar>
        <h5>London</h5>
        <h1>LTN</h1>
        <h5>9:20 pm</h5>
        <h5>Sun, 20 Mar 2023</h5>
    </ContainerLugar>
  )
}

export default Lugar

const ContainerLugar = styled.div`
    width: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    h1{
        color: #ED7D91;
    }
    h5{
        color: #8F8F8F;
        font-size: 10px;
    }
`