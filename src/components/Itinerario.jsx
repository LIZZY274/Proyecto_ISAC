import React from 'react'
import { styled } from 'styled-components'
import logo from '../assets/logo.svg'
import avion from '../assets/Avion.svg'
import Lugar from './Lugar'
import CardsInterinario from './CardsInterinario'

function Itinerario() {
  return (
    <>
        <ContainerItinerario>
            <img className='logo' src={logo} alt="" />
            <img className='avion' src={avion} alt="" />
            <div className='card1s'>
                <CardsInterinario/>
                <CardsInterinario/>
                <CardsInterinario/>
                <CardsInterinario/>
            </div>
        </ContainerItinerario>
    </>
  )
}

export default Itinerario

const ContainerItinerario = styled.div`
    
    position: relative;
    width: 100%;
    height: auto;
    background-color: #fff;
    clip-path: polygon(0 0, 100% 3%, 100% 100%, 0 100%);
    padding: 20px 10px;
    .avion{
        position: relative;
    }
    .card1s{
        display: flex;
        flex-direction: column;
        gap: 10px;
    }
    
`