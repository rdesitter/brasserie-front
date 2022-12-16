import PropTypes from 'prop-types';

function ToggleButton({ toggle }) {
  return (
    <button type="button" className="navbar__toggle" onClick={toggle} >
      <span className="sr-only">Toggle navigation</span>
      <span className="icon-bar"></span>
      <span className="icon-bar"></span>
      <span className="icon-bar"></span>
    </button>
  )
}

ToggleButton.propTypes = {
  toggle: PropTypes.func.isRequired,
}

export default ToggleButton;
