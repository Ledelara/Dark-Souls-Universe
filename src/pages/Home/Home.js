import React from 'react';
import { Link } from 'react-router-dom'
import './Home.css';

// images
import DarkSouls from '../../images/Dark-Souls.png';
import DarkSouls2 from '../../images/Dark-Souls-2.png';
import DarkSouls3 from '../../images/Dark-Souls-3.png';

const Home = () => {
  return (
    <div className='home-container'>
        <div className='images-div'>
          <Link to='/dark-souls'>
            <img src={DarkSouls} alt='Dark Souls'/>
          </Link>
          <Link to='/dark-souls-2'>
            <img src={DarkSouls2} alt='Dark Souls 2'/>
          </Link>
          <Link to='/dark-souls-3'>
            <img src={DarkSouls3} alt='Dark Souls 3'/>
          </Link>
        </div>
    </div>
  )
}

export default Home