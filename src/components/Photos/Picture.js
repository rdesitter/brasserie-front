import PropTypes from "prop-types";
import './style.scss';

function Picture({src, name}) {
  return (
    <article className="picture__item">
      <div className="picture__hover">
        <div className="picture__container">
          <div className="picture__text">
            <p className="picture__name">{name}</p>
          </div>
          <img src={src} className="picture__image" alt={name} />
        </div>
      </div>
    </article>
  )
}

Picture.propTypes = {
  src: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
}

export default Picture;
