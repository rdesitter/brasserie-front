import { HashLink } from 'react-router-hash-link';
import './style.scss';
import logo from '../LogoMini/logo.svg';
import ToggleButton from './ToggleButton';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

function Header() {
  const [show, setShow] = useState(false);
  const logged = useSelector((state) => state.user.logged);

  const handleToggle = () => {
    setShow(!show);
  };

  useEffect(() => {
    document.addEventListener('scroll', (event) => {

      const navbarElt = document.getElementsByClassName('navbar')[0];
      if(navbarElt) {
        navbarElt.style.padding = "20px";
        navbarElt.style.background = "#2a2623";
      }

      if(window.scrollY > 300 && navbarElt) {
        navbarElt.style.padding = "10px 20px";
      }
    })
  });

  return (
    <nav id="menu" className="navbar">
      <div className="container"> 
        <div className="navbar__header">
          <Link className="navbar__logo" to="/">
            <img src={logo} alt="" width="150px" />
          </Link>
          <ToggleButton toggle={handleToggle} />
        </div>
      
        <ul className={show ? 'navbar__nav show' : 'navbar__nav'}>
          <li><HashLink to="#about" className="navbar__nav__item" onClick={handleToggle}>la brasserie</HashLink></li>
          <li><HashLink to="#carte" className="navbar__nav__item" onClick={handleToggle}>carte</HashLink></li>
          <li><HashLink to="#photos" className="navbar__nav__item" onClick={handleToggle}>photos</HashLink></li>
          <li><HashLink to="#contact" className="navbar__nav__item" onClick={handleToggle}>contact</HashLink></li>
          {logged && (
            <li><Link to="/dashboard" className="navbar__nav__item" onClick={handleToggle}>admin</Link></li>
          )}
        </ul>
      </div>
    </nav>
    )
}

export default Header;
