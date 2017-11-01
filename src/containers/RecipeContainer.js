import React, { Component } from 'react';
import RecipeSearch from '../components/RecipeSearch';
import RecipeList from '../components/RecipeList';

import { data } from '../recipeData';

class RecipeContainer extends Component {
    constructor() {
        super();

        this.state = {
            recipes: data
        }

        this.handleNewRecipes = this.handleNewRecipes.bind(this);
    }

    handleNewRecipes(recipes) {
        this.setState({recipes: recipes})
    }

    render() {
        const { recipes } = this.state;
        const { ingredientsList, extrasAllowed } = this.props;

        return (
            <div className="recipes">
                <RecipeSearch ingredientsList={ingredientsList} extrasAllowed={extrasAllowed} onNewRecipes={this.handleNewRecipes} />
                <RecipeList recipes={recipes} />
            </div>
        );
    }
}

export default RecipeContainer;