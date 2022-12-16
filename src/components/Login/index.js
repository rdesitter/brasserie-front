import './style.scss';
import logo from '../LogoMini/logo.svg'
import { useDispatch, useSelector } from 'react-redux';
import { changeLoginEmail, changeLoginPassword } from '../../reducers/loginSlice';
import { useState } from 'react';
import { logIn } from '../../actions';

function Login() {
  const email = useSelector((state) => state.login.email);
  const password = useSelector((state) => state.login.password);
  const response = useSelector((state) => state.login.response);
  const error = useSelector((state) => state.login.error);
  const loading = useSelector((state) => state.login.loading);

  const [visible, setVisible] = useState(false);

  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(logIn());
  }

  return (
    <main className="login">
      <div className="login__container">
        <img src={logo} alt="" className="logo" />
        {response && (
            <p className={ !error ? 'form__response' : 'form__response form__response--error'}>{response}</p>
          )}
        <form className="form" onSubmit={handleSubmit} >
          <div className="form__group">
            <label htmlFor="email" className="form__label">Email</label>
            <input type="email" value={email || ''} placeholder="Votre email" autoComplete='email' name="email" className="form__input" required onChange={(e) => dispatch(changeLoginEmail(e.target.value))} />
          </div>
          <div className="form__group">
            <label htmlFor="password" className="form__label">Mot de passe</label>
            <input type={visible ? 'text' : 'password'} value={password || ''} placeholder="Votre mot de passe" className="form__input" name="password" id="password" autoComplete='current-password' required onChange={(e) => dispatch(changeLoginPassword(e.target.value) )} />
          </div>
          <div className="form__group">
            <input type="checkbox" name="display-password" id="display-password" className="form__checkbox" onChange={() => setVisible(!visible)}/>
            <label htmlFor="display-password">Afficher mot de passe</label>
          </div>
          <button type="submit" className="form__button">{!loading ? 'Se connecter' : 'Connexion...'}</button>
        </form>
      </div>
    </main>
  )
}

export default Login;
