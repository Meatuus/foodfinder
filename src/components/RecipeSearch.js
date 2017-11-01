import React, { Component } from 'react';
import { url, key, id } from '../foodApi';

const combineIngredients = function (array) {
    let result = array.reduce(function (accumulator, currentValue) {
        return `${accumulator},${currentValue}`;
    });
    return result
}

class RecipeSearch extends Component {
    constructor() {
        super();

        this.recipeSearch = this.recipeSearch.bind(this);
    }

    recipeSearch(e) {
        const { ingredientsList, extrasAllowed, onNewRecipes } = this.props;

        console.log('searching...');
        fetch(`${url}?q=${combineIngredients(ingredientsList)}&app_id=${id}&app_key=${key}&ingr=${ingredientsList.length + parseInt(extrasAllowed, 10)}`)
            .then((response) => {
                return response.json()
            })
            .then((json) => {
                onNewRecipes(json.hits)
            })
            .catch((ex) => {
                console.log('An error occured while parsing!', ex);
            })
    }

    render() {
        return (
            <div className="recipes__heading">
                <h2 className="recipes__title">Lets Find Some Recipes</h2>
                <button className="recipes__search" onClick={(e) => this.recipeSearch(e)}>Search</button>
            </div>
        );
    }
}

export default RecipeSearch;