import React from 'react';
import { Link } from 'react-router-dom';
import '../DarkSouls.css';

// image
import DarkSouls1 from '../../images/Dark-Souls.png';

const DarkSouls = () => {
  return (
    <div className='Dark_Souls-container'>
        <img src={DarkSouls1} alt='Dark Souls'/>
        <h1>Dark Souls Remastered</h1>
        <div className='sinopse'>
          <h2>Sinopse</h2>
            <p>
                Em Dark Souls, os jogadores são transportados para um mundo obscuro e devastado pela maldição. 
                Os jogadores devem embarcar em uma jornada épica para descobrir a causa dessa maldição e encontrar 
                uma maneira de revertê-la ou controlá-la. À medida que os jogadores exploram um ambiente sombrio e implacável, 
                enfrentam inimigos desafiadores, superam armadilhas mortais e descobrem segredos ocultos. Através de uma narrativa 
                fragmentada, os jogadores desvendam a história por trás desse mundo enigmático e são desafiados a tomar decisões que 
                afetam diretamente o destino do seu personagem e do mundo ao seu redor.
            </p>
        </div>
        <div className='plataforms'>
            <span>Plataformas: </span><p>PS4, XBOX One e PC</p>
            <span>Ano de lançamento: </span><p>23 de maio de 2018</p>
        </div>
        <button><Link to='/'>Voltar</Link></button>
    </div>
  )
}

export default DarkSouls