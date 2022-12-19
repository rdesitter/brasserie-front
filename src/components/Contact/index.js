import './style.scss';
import { PhoneCall } from 'react-feather';
import { useDispatch, useSelector } from 'react-redux';
import { changeName, changeEmail, changeMessage } from '../../reducers/formSlice';
import { sendMessage } from '../../actions';

function Contact() {
  const name = useSelector((state) => state.form.name);
  const email = useSelector((state) => state.form.email);
  const message = useSelector((state) => state.form.message);
  const response = useSelector((state) => state.form.response);
  const error = useSelector((state) => state.form.error);
  const loading = useSelector((state) => state.form.loading);

  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(sendMessage())
  }
  return (
    <section id="contact" className="contact">
      <div className="contact__header">
        <h2 className="contact__header__title">Réservation : <a className="contact__header__link" href="tel:0467588880"><PhoneCall />&nbsp;04&nbsp;67&nbsp;58&nbsp;88&nbsp;80</a></h2>
      </div>
      <div className="container">
        <h2 className="contact__title">Nous contacter</h2>
        <hr />
        <p className="contact__text">Pour toute demande d'information, de réservation, de réservation de groupe (séminaire, mariage, buffet, soirée privée, etc.) merci de nous contacter.</p>

        <form onSubmit={handleSubmit} className="contact__form">
          <div className="form__group">
            <label htmlFor="name" className="form__label">Nom</label>
            <input type="text" value={name || ''} placeholder="Votre nom" name="name" className="form__input" required onChange={(e) => dispatch(changeName(e.target.value))} />
          </div>
          <div className="form__group">
            <label htmlFor="email" className="form__label">Email</label>
            <input type="email" value={email || ''} placeholder="Votre adresse email" name="email" className="form__input" required onChange={(e) => dispatch(changeEmail(e.target.value))} />
          </div>
          <div className="form__group form__group--fullwidth">
            <label htmlFor="email" className="form__label">Message</label>
            <textarea name="message" value={message || ''} id="message" rows="4" placeholder="Votre message" className="form__input" onChange={(e) => dispatch(changeMessage(e.target.value)) }></textarea>
          </div>
          <button type="submit" className="form__button">{!loading ? 'Envoyer le message' : 'Envoi en cours'}</button>
          {response && (
            <p className={ !error ? 'form__response' : 'form__response form__response--error'}>{response}</p>
          )}
        </form>
      </div>
    </section>
  )
}

export default Contact;
