import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { getCartes } from "../../../../actions";
import { formatDate } from "../../../../selectors/formatDate";
import Dashboard from "../../../Dashboard";
import CategoryItem from "./CategoryItem";
import "./style.scss";

function Carte() {
  const dispatch = useDispatch();
  const { id: carteId } = useParams();
  const [loading, setLoading] = useState(true);

  const cartes = useSelector((state) => state.admin.cartes);

  const currentCarte = cartes.find(
    (carte) => carte.id === parseInt(carteId, 10)
  );

  console.log("cur", currentCarte);

  useEffect(() => {
    if (!currentCarte) {
      dispatch(getCartes());
    } else {
      setLoading(false);
    }
  }, [currentCarte]);

  return (
    <Dashboard>
      {loading && <p>Chargement en cours</p>}
      {!loading && (
        <div className="cartes">
          <h2 className="cartes__title">{currentCarte.name}</h2>
          <h3
            className={
              currentCarte.active
                ? "cartes__status cartes__status--active"
                : "cartes__status"
            }
          >
            {currentCarte.active ? "active" : "Non utilisée"}
          </h3>
          <p className="cartes__update">Dernière modification le {formatDate(currentCarte.updated_at)}</p>
          <div className="cartes__container">
            {currentCarte.categories &&
              currentCarte.categories.map((category, index) => (
                <CategoryItem key={index} category={category} />
              ))}
          </div>
        </div>
      )}
    </Dashboard>
  );
}

export default Carte;
