import { useDispatch, useSelector } from "react-redux";
import { addCarte } from "../../../../actions";
import { changeNewCarteName } from "../../../../reducers/newCarteSlice";
import Dashboard from "../../../Dashboard";

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
      <div className="cartes">
        <h2 className="cartes__title">Ajouter une carte</h2>
        <div className="cartes__container">
          <form className="form" onSubmit={handleSubmit}>
            <div className="form__group">
              <label htmlFor="name" className="form__label">Nom de la carte</label>
              <input value={name || ''} onChange={(e) => dispatch(changeNewCarteName(e.target.value))} type="name" placeholder="Nom de la carte" name="name" className="form__input" required />
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

export default AddCarte;
