import { useSearchParams } from 'react-router-dom';
import jwtDecode from 'jwt-decode';
import { useDispatch, useSelector } from 'react-redux';
import { changeNewUserPassword, changeNewUserPasswordConfirm, displayNewUserError } from '../../reducers/registerSlice';
import '../Dashboard/style.scss';
import './style.scss';
import { setPassword } from '../../actions';
import { Link } from 'react-router-dom';

function Register() {
    // useEffect(() => {
    //     if(localStorage.getItem('accessToken')) {
    //         localStorage.clear();
    //     }
    // },[]);

    const dispatch = useDispatch();

    const [ searchParams ] = useSearchParams();
    const newUserToken = searchParams.get('token');

    const { name, email } = jwtDecode(newUserToken);
    const password = useSelector((state) => state.register.password);
    const passwordConfirm = useSelector((state) => state.register.passwordConfirm);
    const loading = useSelector((state) => state.register.loading);
    const error = useSelector((state) => state.register.error);
    const response = useSelector((state) => state.register.response);
    const activated = useSelector((state) => state.register.activated);

    const handleSubmit = (event) => {
        event.preventDefault();
        if(password !== passwordConfirm) {
           return dispatch(displayNewUserError('Les mots de passe ne sont pas identiques'));
        }
        dispatch(setPassword({ email, password, newUserToken }))
    }

    return (
        <div className="dashboard">
            <div className="container">
                <div className="form-container">
                    {!activated && (
                        <form className="form" onSubmit={handleSubmit}>
                            <h2 className="form__title">Finalisation de l'inscription</h2>
                            <p className="form__text">Email: <span className="form__text--bold">{email}</span></p>
                            <p className="form__text">Nom d'utilisateur: <span className="form__text--bold">{name}</span></p>
                            <div className="form__group">
                                <label htmlFor="password" className="form__label">Mot de passe</label>
                                <input type="password" value={password || ''} placeholder="Votre mot de passe" name="password" className="form__input" required onChange={(e) => dispatch(changeNewUserPassword(e.target.value))} />
                            </div>
                            <div className="form__group">
                                <label htmlFor="password-confirm" className="form__label">Mot de passe</label>
                                <input type="password" value={passwordConfirm || ''} placeholder="Confirmez votre mot de passe" name="password-confirm" className="form__input" required onChange={(e) => dispatch(changeNewUserPasswordConfirm(e.target.value))} />
                            </div>
                            {response && (
                                <p className={ !error ? 'form__response' : 'form__response form__response--error'}>{response}</p>
                            )}
                            <button type="submit" className="form__button">{ !loading ? 'Ajouter' : 'AJout en cours...' }</button>
                        </form>
                    )}
                    {activated && (
                        <>
                            <h3 className="form__title">Vous pouvez maintenant vous connecter.</h3>
                            <Link to="/connexion" className="form__button form__button--flex">Se connecter</Link>
                        </>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Register;