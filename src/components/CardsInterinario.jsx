import React from 'react'
import Lugar from './Lugar'
import { styled } from 'styled-components'


function CardsInterinario() {
  return (
    <>
        <ContainerCard>
            <div className='cards'>
              <Lugar/>
              <hr />
              <i class='bx bxs-plane'></i>
              <hr />
              <Lugar/>
            </div>
            <div className='hrs'></div>
        </ContainerCard>
    </>
  )
}

export default CardsInterinario

const ContainerCard = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
    gap: 20px;
    .bxs-plane{
      color: #000;
      rotate: calc(90deg);
    }
    .cards{
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 2px;
      flex-direction: row;
    }
    hr{
      width: 50px;
      height: 2px;
      border-radius: 10px;
      border: dashed #8F8F8F;
      background-color: dashed #8F8F8F;
    }
    .hrs{
      width: 100%;
      height: 1px;
      background-color: #8F8F8F;
    }
`