import React, { Component } from 'react';

class RecipeList extends Component {
    render() {
        const { recipes } = this.props;

        const matches = recipes.map((recipe, index) => {
            return <li className="recipes__item" key={index}>
                <h3 className="recipe__title">{recipe.recipe.label}</h3>
                <div className="recipe__container">
                    <div className="recipe__image-wrap">
                        <img className="recipe__image" src={recipe.recipe.image} alt="" />
                    </div>
                    <div className="recipe__info">
                        <ul className="recipe__ing-list">
                            {recipe.recipe.ingredientLines.map((ing, key) => {
                                return <li className="recipe__ing-item" key={key}>{ing}</li>
                            })}
                        </ul>
                        <a className="recipe__link" href={recipe.recipe.url} target="_blank">View Recipe</a>
                    </div>
                </div>
            </li>
        })

        return (
            <ul className="recipes__list">
                {matches}
            </ul>
        );
    }
}

export default RecipeList;