import PropTypes from 'prop-types';
import { Instagram, Facebook } from 'react-feather';
import './style.scss';

function SectionTitle({ title, subtitle, img, button }) {
  const setIcon = (icon) => {
    switch (icon) {
      case "instagram":
        return <Instagram />
      
      case "facebook":
        return <Facebook />
        
      default:
        break;
    } 
  }
  return (
    <div className="section__header" style={{ backgroundImage : `url(${img})` }}>
      <div className="section__overlay">
        <h2 className="section__title">{title}</h2>
        {subtitle && (
          <>
            <hr />
            <p className="section__subtitle">{subtitle}</p>
          </>
        )}
        {button && (
          <a href={button.url} target="_blank" rel="noreferrer" className="section__link">{setIcon(button.icon)} {button.text}</a>
        )}
      </div>
    </div>
  )
}

SectionTitle.defaultProps = {
  subtitle: null,
  button: null,
}

SectionTitle.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  img: PropTypes.any.isRequired,
  button: PropTypes.object,
}
export default SectionTitle;
