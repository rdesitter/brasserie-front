import { useEffect, useState } from "react";
import { Edit, X } from "react-feather";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getUsers } from "../../actions";
import './style.scss';

function Users() {
    const dispatch = useDispatch();

    const users = useSelector((state) => state.admin.users);
    const admin = useSelector((state) => state.user.admin);

    // console.log(users);

    useEffect(() => {
        dispatch(getUsers());    
    }, [dispatch]);

    return (
        <div className="users">
            <h2 className="users__title">Liste des utilisateurs</h2>
            <div className="users__container">
                <table className="table">
                    <thead>
                        <tr className="table__row">
                            <th className="table__cell">Email</th>
                            <th className="table__cell">Nom</th>
                            <th className="table__cell">Role</th>
                            <th className="table__cell">Statut</th>
                            { admin && <th className="table__cell">Editer</th> }
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user) => (
                            <tr className="table__row" key={user.id}>
                                <td className="table__cell">{user.email}</td>
                                <td className="table__cell">{user.name}</td>
                                <td className="table__cell">{user.admin ? 'admin' : 'editeur'}</td>
                                <td className="table__cell">{user.active ? 'actif' : 'en attente'}</td>
                                { admin && <td className="table__cell table__cell--edit"><Link to={`/dashboard/user/edit/${user.id}`} ><Edit /></Link></td> }
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            { admin && <Link className="button" to="/dashboard/user/add"> Ajouter un utilisateur </Link> }
            
        </div>
    )
}

export default Users;
