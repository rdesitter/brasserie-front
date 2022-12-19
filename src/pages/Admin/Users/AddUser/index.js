import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../../../../actions";
import { changeNewUserAdmin, changeNewUserEmail, changeNewUserName } from "../../../../reducers/registerSlice";
import Dashboard from "../../../Dashboard";
import './style.scss'

function AddUser() {
  const dispatch = useDispatch();

  const username = useSelector((state) => state.register.name);
  const email = useSelector((state) => state.register.email);
  const admin = useSelector((state) => state.register.admin);
  const loading = useSelector((state) => state.register.loading);
  const response = useSelector((state) => state.register.response);
  const error = useSelector((state) => state.register.error);

  console.log(username, 'test');

  const handleSubmit = (event) => {
    event.preventDefault();
    if(!loading) {
      dispatch(registerUser());
    }
  }

  return (
    <Dashboard>
      <div className="users">
        <h2 className="users__title">Ajouter un utilisateur</h2>
        <div className="users__container">
          <form className="form" onSubmit={handleSubmit}>
            <div className="form__group">
              <label htmlFor="name" className="form__label">Nom d'utilisateur</label>
              <input value={username || ''} onChange={(e) => dispatch(changeNewUserName(e.target.value))} type="name" placeholder="Nom d'utilisateur" name="name" className="form__input" required />
            </div>
            <div className="form__group">
              <label htmlFor="email" className="form__label">Adresse Email</label>
              <input value={email || ''} onChange={(e) => dispatch(changeNewUserEmail(e.target.value))} type="email" placeholder="Adresse email" name="email" className="form__input" required />
            </div>
            <div className="form__group">
              <label htmlFor="role" className="form__label">Role</label>
              <select value={admin || ''} onChange={(e) => dispatch(changeNewUserAdmin(e.target.value))}  name="role" id="role" className="form__input" required>
                <option value="">Choisir un role</option>
                <option value="true">Administrateur</option>
                <option value="false">Editeur</option>
              </select>
            </div>
            {response && (
              <p className={ !error ? 'form__response' : 'form__response form__response--error'}>{response}</p>
            )}
            <button type="submit" className="form__button">{ !loading ? 'Ajouter' : 'AJout en cours...' }</button>
          </form>
        </div>
      </div>
    </Dashboard>
  )
}

export default AddUser;
