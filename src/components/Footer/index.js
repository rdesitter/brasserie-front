import { Facebook, Instagram } from 'react-feather';
import { Link } from 'react-router-dom';
import './style.scss';

function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer__main">
                    <div className="footer__column">
                        <h3 className="footer__title">Accès</h3>
                        <p className="footer__text">22 Boulevard Victor Hugo</p>
                        <p className="footer__text">34000 Montpellier</p>
                    </div>
                    <div className="footer__column">
                        <h3 className="footer__title">Horaires d'ouverture</h3>
                        <p className="footer__text">Ouvert de 12h00 à 15h et de 19h30 à 23h</p>
                        <p className="footer__text">Du lundi au samedi</p>
                    </div>
                    <div className="footer__column">
                        <h3 className="footer__title">NOUS CONTACTER</h3>
                        <p className="footer__text">Restaurant : 04 67 58 88 80</p>
                        <p className="footer__text">contact@brasseriedutheatre.fr</p>
                    </div>
                </div>
            </div>
            <div className="footer__social">
                <div className="container">
                    <a href="https://www.facebook.com/labrasseriedutheatre/" target="_blank" rel="noreferrer" className="footer__social__link"><Facebook /> Suivez nous sur Facebook</a>
                    <a href="https://www.instagram.com/brasseriedutheatre/" target="_blank" rel="noreferrer" className="footer__social__link"><Instagram /> Suivez nous sur Instagram</a>
                </div>
            </div>
            <div className="footer__bottom">
                <p className="footer__copyright">Tous droits réservés &copy; 1988 - {new Date().getFullYear()}</p>
                <Link to="/connexion" className="footer__connect">Se connecter</Link>
            </div>
        </footer>
    )
}

export default Footer;
