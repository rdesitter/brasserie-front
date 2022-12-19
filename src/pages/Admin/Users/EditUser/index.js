import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { getCurrentUser, saveCurrentUser } from '../../../../actions';
import { changeCurrentUserAdmin, changeCurrentUserEmail, changeCurrentUserName, initCurrentResponse, setCurrentUser } from '../../../../reducers/editUserSlice';
import Dashboard from '../../../Dashboard';
import '../AddUser/style.scss';

function EditUser() {
    const dispatch = useDispatch();
    const loading = useSelector((state) => state.editUser.loading);
    const name = useSelector((state) => state.editUser.name);
    const email = useSelector((state) => state.editUser.email);
    const admin = useSelector((state) => state.editUser.admin);
    const response = useSelector((state) => state.editUser.response);
    const error = useSelector((state) => state.editUser.error);

    // Get selected user id from url
    const { userId } = useParams();
    // Find if user is saved in store
    const selectedUser = useSelector((state) => state.admin.users.find((user) => parseInt(user.id) === parseInt(userId)));
    
    useEffect(() => {
        dispatch(initCurrentResponse());

        //if user doesn't exist request it
        if(!selectedUser) {
            dispatch(getCurrentUser(userId));
        } else {
            dispatch(setCurrentUser({email: selectedUser.email, name: selectedUser.name, admin: selectedUser.admin}));
        }
    }, []);

    const handleSubmit = (event) => {
        event.preventDefault();
        if(!loading) {
            dispatch(saveCurrentUser(userId));
        }
    }

    return (
        <Dashboard>
            <div className="users">
                <h2 className="users__title">Modifier un utilisateur</h2>
                <div className="users__container">
                    <form className="form" onSubmit={handleSubmit}>
                        <div className="form__group">
                            <label htmlFor="name" className="form__label">Nom d'utilisateur</label>
                            <input type="name" value={name} onChange={(e) => dispatch(changeCurrentUserName(e.target.value))} placeholder="Nom d'utilisateur" name="name" className="form__input" required />
                        </div>
                        <div className="form__group">
                            <label htmlFor="email" className="form__label">Adresse Email</label>
                            <input type="email" value={email} onChange={(e) => dispatch(changeCurrentUserEmail(e.target.value))} placeholder="Adresse email" name="email" className="form__input" required />
                        </div>
                        <div className="form__group">
                            <label htmlFor="role" className="form__label">Role</label>
                            <select name="role" value={admin} onChange={(e) => dispatch(changeCurrentUserAdmin(e.target.value))} id="role" className="form__input" required>
                                <option value="">Choisir un role</option>
                                <option value="true">Administrateur</option>
                                <option value="false">Editeur</option>
                            </select>
                        </div>
                        {response && (
                            <p className={ !error ? 'form__response' : 'form__response form__response--error'}>{response}</p>
                        )}
                        <button type="submit" className="form__button">{!loading ? 'Enregistrer' : 'Enregistrement En cours...'}</button>
                    </form>
                </div>
            </div>
        </Dashboard>
    )
}

export default EditUser;
