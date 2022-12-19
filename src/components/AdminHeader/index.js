import './style.scss';
import logo from '../LogoMini/logo.svg';
import ToggleButton from '../Header/ToggleButton';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Disconnect from '../Disconnect';

function AdminHeader() {
  const [show, setShow] = useState(false);

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
          <li><Link to="/dashboard/user" className="navbar__nav__item" onClick={handleToggle}>Utilisateurs</Link></li>
          <li><Link to="/dashboard" className="navbar__nav__item">admin</Link></li>
          <Disconnect />
        </ul>
      </div>
    </nav>
    )
}

export default AdminHeader;
