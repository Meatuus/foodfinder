import React, { Component } from 'react';
import {url, key, id} from '../foodApi';

import { data } from '../recipeData';

const combineIngredients = function(array) {
    let result = array.reduce(function (accumulator, currentValue) {
        return `${accumulator},${currentValue}`;
    });
    return result
}

class RecipeSearch extends Component {
    constructor() {
        super();

        this.state = {
            recipes: data
        }

        this.recipeSearch = this.recipeSearch.bind(this);
        // this.handleNewRecipes = this.handleNewRecipes.bind(this);
    }

    recipeSearch(e) {
        console.log('searching...');
        fetch(`${url}?q=${combineIngredients(this.props.ingredientsList)}&app_id=${id}&app_key=${key}&ingr=${this.props.ingredientsList.length + parseInt(this.props.extrasAllowed, 10)}`)
            .then((response) => {
                return response.json()
            })
            .then((json) => {
                this.setState({ recipes: json.hits })
            })
            .catch((ex) => {
                console.log('An error occured while parsing!', ex);
            })
    }

    // handleNewRecipes(recipes) {

    // }

    render() {
        const { recipes } = this.state;
        const { ingredientsList, extrasAllowed } = this.props;

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
            <div className="recipes">
                <div className="recipes__heading">
                    <h2 className="recipes__title">Lets Find Some Recipes</h2>
                    <button className="recipes__search" onClick={(e) => this.recipeSearch(e)}>Search</button>
                </div>
                <ul className="recipes__list">
                    {matches}
                </ul>
            </div>
        );
    }
}

export default RecipeSearch;