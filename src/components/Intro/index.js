import './style.scss';
import logo from './logo.svg';
import { HashLink } from 'react-router-hash-link';

function Intro() {
  return (
    <header id="header" className='intro'>
        <div className="intro__text">
          <div className="svg-container">
            <img src={logo} alt="logo" />
          </div>
          <a href="tel:0467588880" className="intro__phone">04 67 58 88 80</a>
          <HashLink to="#about" className="intro__button">Découvrir</HashLink> 
        </div>
      <div className="intro__information">Ouvert de 12h00 à 15h du lundi au samedi</div>
      <div className="intro__overlay"></div>
    </header>
  )    
}

export default Intro;

