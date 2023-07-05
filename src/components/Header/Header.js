import React from 'react';
import './Header.css';

// image
import Dark_Souls_Logo from '../../images/DarkSouls-logo.png'

const Header = () => {
  return (
    <header className='header-container'>
        <img src={Dark_Souls_Logo} alt='Dark Souls Logo'/>
    </header>
  )
}

export default Header