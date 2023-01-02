import { useEffect } from "react";
import { Edit } from "react-feather";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getCartes } from "../../../../actions";
import { formatDate } from "../../../../selectors/formatDate";
import Dashboard from "../../../Dashboard";
import './style.scss';

function AllCartes() {

    const dispatch = useDispatch();

    const cartes = useSelector((state) => state.admin.cartes);
    const admin = useSelector((state) => state.user.admin);

    // console.log(users);

    useEffect(() => {
        dispatch(getCartes());    
    }, [dispatch]);

    return (
        <Dashboard>
            <div className="cartes">
            <h2 className="cartes__title">Liste des cartes</h2>
            <div className="cartes__container">
                <table className="table">
                    <thead>
                        <tr className="table__row">
                            <th className="table__cell">Nom</th>
                            <th className="table__cell">Statut</th>
                            <th className="table__cell">Modification</th>
                            <th className="table__cell">Création</th>
                            { admin && <th className="table__cell">Editer</th> }
                        </tr>
                    </thead>
                    <tbody>
                        {cartes.map((carte) => (
                            <tr className="table__row" key={carte.id}>
                                <td className="table__cell"><Link to={`/dashboard/carte/${carte.id}`}>{carte.name}</Link></td>
                                <td className="table__cell">{carte.active ? 'En ligne' : '---'}</td>
                                <td className="table__cell">{formatDate(carte.updated_at)}</td>
                                <td className="table__cell">{formatDate(carte.created_at)}</td>
                                { admin && <td className="table__cell table__cell--edit"><Link to={`/dashboard/carte/edit/${carte.id}`} ><Edit /></Link></td> } 
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            { admin && <Link className="button" to="/dashboard/carte/add"> Ajouter une carte </Link> }
            
        </div>
        </Dashboard>
    )
}

export default AllCartes;
