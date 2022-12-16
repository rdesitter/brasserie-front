import PropTypes from 'prop-types';
import './style.scss';

function Category({ data }) {
  const { recipes } = data;

  // TODO DOMpurify ?
  const setDesc = (html) =>  ({__html: html});
  
  return (
    <div className="carte-category">
      <h3 className="category__name">{data.name}</h3>
      {data.desc && (
        <p className="category__description" dangerouslySetInnerHTML={setDesc(data.desc)} />
      )}
                 
      <div className="items-container">
        {recipes.map((recipe) => (
          <article key={recipe.name} className="category-item">
            <h6 className="category-item__name">{recipe.name}</h6>
            <p className="category-item__price">{recipe.price} €</p>
            {recipe.desc && (
              <p className="category-item__description">{recipe.desc}</p>
            )}
          </article>
        ))}
      </div>
    </div>
  )
}

Category.propTypes = {
  data: PropTypes.object.isRequired,
}

export default Category;
