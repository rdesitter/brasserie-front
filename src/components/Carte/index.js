import SectionTitle from "../SectionTitle";
import menu from './menu.jpg';
import data from '../../data/data';
import { useEffect, useState } from "react";
import Category from "../Category";
import './style.scss';

function Carte() {
  // Initialisation du state family
  let families = data.families;
  // console.log(families);
  const [family, setFamily] = useState(families[0]);

  useEffect(() => {
    // On devra faire une requete pour récupérer les vraies données
  }, []);

  // Au clic sur un bouton on trouve la famille correspondante et on la définie dans family
  const displayFamily = (label) => {
    const family = families.find((item) => item.slug === label);
    setFamily(family)
  }

  return (
    <section id="carte" className="carte">
      <SectionTitle
        title="Menu"
        subtitle="Produits frais, repas sains et légers, découvrez nos cartes."
        img={menu}
      />
      <div className="container">
        <div className="button-container">
          {families && families.map((btn) => (
            <button className={btn.slug === family.slug ? 'carte__button carte__button--active' : 'carte__button'} onClick={() => displayFamily(btn.slug)} key={btn.name}>{btn.name}</button>
          ))}
        </div>

        <div className="family-container">
            {family &&(
              family.categories.map((category) => (
                <Category key={category.slug} data={category} />
              ))
            )}
        </div>
      </div>

    </section>
  )
}

export default Carte;
