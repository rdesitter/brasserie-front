import { useDispatch, useSelector } from "react-redux";
import { addCarte, registerUser } from "../../../../actions";
import { changeNewCarteName } from "../../../../reducers/newCarteSlice";
import Dashboard from "../../../Dashboard";
import './style.scss'

function AddCarte() {
  const dispatch = useDispatch();

  const name = useSelector((state) => state.newCarte.name);
  const loading = useSelector((state) => state.newCarte.loading);
  const response = useSelector((state) => state.newCarte.response);
  const error = useSelector((state) => state.newCarte.error);

  console.log(name, 'test');

  const handleSubmit = (event) => {
    event.preventDefault();
    if(!loading) {
      dispatch(addCarte());
    }
  }

  return (
    <Dashboard>
      <div className="users">
        <h2 className="users__title">Ajouter une carte</h2>
        <div className="users__container">
          <form className="form" onSubmit={handleSubmit}>
            <div className="form__group">
              <label htmlFor="name" className="form__label">Nom de la carte</label>
              <input value={name || ''} onChange={(e) => dispatch(changeNewCarteName(e.target.value))} type="name" placeholder="Nom de la carte" name="name" className="form__input" required />
            </div>
            {/* <div className="form__group">
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
            </div> */}
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

export default AddCarte;
