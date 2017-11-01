import React, { Component } from 'react';

class RecipeList extends Component {
    render() {
        const { recipes } = this.props;

        const matches = recipes.map((recipe, index) => {
            return <li className="recipes__item" key={index}>
                <h3>{recipe.recipe.label}</h3>
                <a href={recipe.recipe.url} target="_blank">View Recipe</a>
                <div>
                    <img src={recipe.recipe.image} alt="" />
                </div>
                <ul>
                    {recipe.recipe.ingredientLines.map((ing, key) => {
                        return <li key={key}>{ing}</li>
                    })}
                </ul>
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