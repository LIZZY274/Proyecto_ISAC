import React from 'react'
import mundo from '../assets/mundo.svg'

function Header() {
  return (
    <div className="header">
        <img src={mundo} alt="" />
        <div className="iconos">
          <i class='bx bx-chevron-left'></i>
          <i class='bx bx-menu'></i>
        </div>
        <div className="title">
          <h2>My Flights</h2>
        </div>
    </div>
  )
}

export default Header