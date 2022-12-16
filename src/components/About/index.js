import brasserie from './notrebrasserie.jpg';
import './style.scss';

function About() {
  return (
    <div id="about" className="about">
      <div className="container">
        <div className="about__image">
          <img src={brasserie} alt="" />
        </div>

        <div className="about__text">
          <h2 className="about__title">notre brasserie</h2>
          <hr />
          <p>Située à quelques pas de la place de la Comédie, face à l'opéra côté entrée des artistes, cet élégant restaurant a tous les atouts pour séduire.</p>

          <p>Dés l'accueil, banquettes en cuir, larges baies vitrées plantent le décor d'un lieu chaleureux et intimiste.<br />
          A cette sensation de bien être s'ajoute évidemment celle du plaisir gustatif. Ici, qualité rime avec générosité, à l'image des célèbres plateaux de fruits de mer : une fraîcheur parfaite avec de belles variétés d’huîtres et les saveurs intactes des coquillages et crustacés à déguster sur place.</p>

          <p>Si les viandes sont de premier choix, de magnifiques poissons offrent eux-aussi leur gout délicat.<br />
          La formule &laquo;&nbsp;Garçon&nbsp;&raquo;, servie le midi, ravira les hommes et femmes d'affaires mais aussi et surtout les familles et amis gourmets.<br />
          Un Menu &laquo;&nbsp;entré-plat-dessert&nbsp;&raquo; fait peau neuve toutes les semaines afin de profiter des produits de saison.</p>

          <p>Sans oublier sa splendide terrasse ouverte dès avril.</p>
        </div>
      </div>
    </div>
  )    
}

export default About;

