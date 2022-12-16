import SectionTitle from "../SectionTitle";
import photo from './bg.jpg';
import Picture from "./Picture";
import './style.scss';

function Photos() {
  const button = {
    url: "https://www.instagram.com/brasseriedutheatre/",
    text: "brasseriedutheatre",
    icon: "instagram",
  }

  function importAll(r) {
    let images = {};
    r.keys().map(item => images[item.replace('./', '').replace('.jpg', '')] = r(item));
    return images;
  }

  const images = importAll(require.context('./guest', false, /\.(png|jpg|svg)$/));

  return (
    <section id="photos" className="picture">
      <SectionTitle
        title="Photos"
        subtitle="Ils sont venus nous voir."
        button={button}
        img={photo}
      />
      <div className="container">
        <Picture src={images['01']} name="Harry Roselmack" />
        <Picture src={images['02']} name="Daniel Herrero" />
        <Picture src={images['03']} name="Johnny Hallyday" />
        <Picture src={images['04']} name="Christophe Willem" />
        <Picture src={images['05']} name="Josiane Balasko" />
        <Picture src={images['06']} name="Paris Hilton" />
        <Picture src={images['07']} name="Manu et Laurence Katché" />
        <Picture src={images['08']} name="Patrick Chesnais" />
        <Picture src={images['09']} name="Lorànt Deutsch" />
        <Picture src={images['10']} name="Youri Djorkaeff" />
        <Picture src={images['11']} name="José Garcia" />
        <Picture src={images['12']} name="Roschdy Zem" />
        <Picture src={images['13']} name="Noémie Lenoir" />
        <Picture src={images['14']} name="Alice Pol et Dany Boon" />
        <Picture src={images['15']} name="Élodie Fontan, Philippe Lacheau et Julien Arruti" />
        <Picture src={images['16']} name="Ary Abittan" />
        <Picture src={images['17']} name="Bernard Campan" />
        <Picture src={images['18']} name="Philippe Katerine" />
        <Picture src={images['19']} name="Alexandra Lamy" />
      </div>
    </section>
  )
}

export default Photos;
