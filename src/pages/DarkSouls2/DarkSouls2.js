import React from 'react';
import { Link } from 'react-router-dom';
import '../DarkSouls.css';

// image
import DarkSouls_2 from '../../images/Dark-Souls-2.png'

const DarkSouls2 = () => {
  return (
    <div className='Dark_Souls-container'>
        <img src={DarkSouls_2} alt='Dark Souls 2'/>
        <h1>Dark Souls 2: Scholar Of The First Sin</h1>
        <div className='sinopse'>
            <h2>Sinopse</h2>
            <p>
                Dark Souls II: Scholar of the First Sin é uma experiência única e desafiadora no 
                renomado universo de Dark Souls II. Adentre novamente no mundo sombrio de Drangleic 
                e prepare-se para enfrentar novos perigos e desafios mortais. Com melhorias gráficas, 
                ajustes de jogabilidade aprimorados e todo o conteúdo adicional anteriormente lançado, 
                Scholar of the First Sin oferece a experiência definitiva de Dark Souls II.
            </p>
            <p>
                Descubra a história de Drangleic enquanto você viaja por suas terras misteriosas e encontra 
                personagens cativantes. Enfrente inimigos formidáveis em combate estratégico e supere obstáculos 
                mortais em seu caminho. Com seu mundo interconectado, cheio de segredos e descobertas, 
                Dark Souls II: Scholar of the First Sin proporciona uma aventura épica e imersiva que testará sua coragem, 
                habilidade e perseverança.
            </p>
            <p>
                Prepare-se para mergulhar na escuridão mais uma vez, pois a maldição aguarda aqueles que ousarem enfrentar o 
                desafio de Dark Souls II: Scholar of the First Sin.
            </p>
        </div>
        <div className='plataforms'>
            <span>Plataformas: </span><p>PS3, PS4, XBOX 360, Xbox One e PC</p>
            <span>Ano de lançamento: </span><p>31 de março de 2015</p>
        </div>
        <button><Link to='/'>Voltar</Link></button>
    </div>
  )
}

export default DarkSouls2