import React from 'react';

import logo from '../assets/logo.png';
import './Header.css';

export default function Header() {
  return(
    <nav>
      <div className="wrapper">
        <img src={logo} alt="Facebook"/>

        <span>Meu perfil</span>
      </div>
    </nav>
  )
}