import React from 'react';
import { Link } from 'react-router-dom';
import '../DarkSouls.css';

// image
import DarkSouls_3 from '../../images/Dark-Souls-3.png';

const DarkSouls3 = () => {
  return (
    <div className='Dark_Souls-container'>
        <img src={DarkSouls_3} alt='Dark Souls 3'/>
        <h1>Dark Souls 3: The Fire Fades Edition</h1>
        <div className='sinopse'>
            <h2>Sinopse</h2>
            <p>
                Em Dark Souls III, os jogadores são transportados para um mundo sombrio e desolado, 
                onde a chama está se apagando e a maldição continua a se espalhar. Os jogadores embarcam 
                em uma jornada épica através de um reino assolado pelo caos, enfrentando inimigos formidáveis, 
                criaturas grotescas e chefes poderosos. Com armas letais e uma jogabilidade estratégica, eles devem 
                sobreviver a batalhas intensas, explorar ambientes atmosféricos e desvendar a história misteriosa que 
                envolve o mundo de Lothric.
            </p>
            <p>
                À medida que a trama se desenrola, os jogadores descobrem mais sobre o destino de Lothric e o papel que desempenham 
                em sua preservação ou destruição. O jogo oferece uma experiência desafiadora, com combate tático, exploração 
                meticulosa e uma narrativa obscura e rica em detalhes. Conforme os jogadores progridem, eles enfrentam escolhas 
                difíceis, desvendam segredos ocultos e se deparam com encontros memoráveis que testarão sua coragem e habilidade.
            </p>
            <p>
                Dark Souls III leva os jogadores a uma jornada sombria e intensa, onde a sobrevivência é incerta e cada passo pode ser o último. 
                Prepare-se para enfrentar os perigos do mundo desolado e descobrir seu papel no ciclo interminável da chama.
            </p>
        </div>
        <div className='plataforms'>
            <span>Plataformas: </span><p>PS4, XBOX One e PC</p>
            <span>Ano de lançamento: </span><p>24 de março de 2016</p>
        </div>
        <button><Link to='/'>Voltar</Link></button>
    </div>
  )
}

export default DarkSouls3