import { useEffect, useState } from "react";
import { ChevronDown, ChevronRight, PlusSquare, X } from "react-feather";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { addRecipe } from "../../../../actions";
import { changeaddRecipeDescription, changeaddRecipeName, changeaddRecipePrice, initAddRecipe } from "../../../../reducers/addRecipeSlice";

function CategoryItem({index, category}) {
  const [displayed, setDisplayed] = useState(false);
  const [addModale, setAddModale] = useState(false);
  const [section, setSection] = useState();
  const { id: carteId } = useParams();
  const dispatch = useDispatch();

  const name = useSelector((state) => state.addRecipe.name);
  const description = useSelector((state) => state.addRecipe.description);
  const price = useSelector((state) => state.addRecipe.price);
  const error = useSelector((state) => state.addRecipe.error);
  const response = useSelector((state) => state.addRecipe.response);

  const handleClick = () => {
    setDisplayed(!displayed)
  };

  const handleAddModale = (id) => {
    setAddModale(true);
    setSection(id)
  }

  const handleAddSubmit = (event) => {
    event.preventDefault();
    const sectionId = section;
    dispatch(addRecipe({sectionId, carteId}));
  }

  const handleClose = () => {
    setAddModale(false);
    setSection(null);
    dispatch(initAddRecipe());
  }

  useEffect(() => {
    dispatch(initAddRecipe())
  }, []);

  return (
    <div className="cartes__category__container" key={index}>
        {addModale && (
          <div className="cartes__modale">
            <button className="modale__close" onClick={handleClose}>
              <X />
            </button>
            <form className="modale__form" onSubmit={handleAddSubmit} data-category={category.id}>
              <h3 className="modale__title">Ajouter un plat</h3>
              <div className="form__group">
                <label htmlFor="name" className="form__label">Nom du plat</label>
                <input value={name || ''} onChange={(e) => dispatch (changeaddRecipeName(e.target.value))} type="text" placeholder="Nom du plat" name="name" className="form__input" required />
              </div>
              <div className="form__group">
                <label htmlFor="description" className="form__label">Description du plat</label>
                <input value={description || ''} onChange={(e) => dispatch (changeaddRecipeDescription(e.target.value))} type="text" placeholder="Description du plat" name="description" className="form__input" />
              </div>
              <div className="form__group">
                <label htmlFor="price" className="form__label">Prix du plat</label>
                <input value={price || ''} onChange={(e) => dispatch (changeaddRecipePrice(e.target.value))} type="number" placeholder="Prix du plat" name="price" className="form__input" />
              </div>
              {response && (
                <p className={ !error ? 'form__response' : 'form__response form__response--error'}>{response}</p>
              )}
              <button className="button" type="submit">Ajouter le plat</button>
            </form>
          </div>
        )}
        <h4 className="cartes__category" key={category.name} onClick={handleClick}>{displayed ? <ChevronDown /> : <ChevronRight />} {category.name}</h4>
        {displayed && (
            category.sections.map((section) => {
                const recipes = section.recipes;
                return (
                    <div className="cartes__section__container" key={`${index}-${section.id}`}>
                      <p className="cartes__section__title">
                        {section.name} 
                        <button className="cartes__section__button" type="button" onClick={() => handleAddModale(section.id)}><PlusSquare /></button> 
                      </p>
                      {section.description && <p className="cartes__section__description">{section.description}</p>}
                      {recipes.map(recipe => (
                          <div className="cartes__section__recipe" key={`${index}-${section.id}-${recipe.id}`}>
                            <p className="recipe__title">{recipe.name} <span className="spacer"></span><span className="recipe__price">{recipe.price}€</span></p>
                            {recipe.description && <p className="recipe__description">{recipe.description}</p>}
                          </div>
                      ))}
                    </div>
                )
            })
        )}
    </div>
  )
}

export default CategoryItem;
