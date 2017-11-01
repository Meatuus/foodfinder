import React, { Component } from 'react';
import logo from './img/logo.svg';
import './css/App.css';
import Recipe from './containers/Recipe';
import {url, key, id} from './foodApi';

import {data} from './recipeData';

const combineIngredients = function(array) {
    let result = array.reduce(function (accumulator, currentValue) {
        return `${accumulator},${currentValue}`;
    });
    return result
}

class Home extends Component {
    constructor() {
        super();

        this.state = {
            ingredientsList: [
                "onion",
                "tomato",
                "garlic",
                "salt",
                "pepper",
                "basil"
            ],
            newIngredient: "",
            extrasAllowed: 0,
            recipes: data
        }

        // this.combineIngredients = this.combineIngredients.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
        this.recipeSearch = this.recipeSearch.bind(this);
    }

    newIngredientChange(e) {
        this.setState({
            newIngredient: e.target.value
        });
    }

    newExtrasAllowedChange(e) {
        this.setState({ extrasAllowed: e.target.value })
    }
    
    addItem(e) {
        e.preventDefault();
        const list = this.state.ingredientsList;

        if (this.state.newIngredient && !list.includes(this.state.newIngredient)) {
            list.push(this.state.newIngredient);
    
            this.setState({
                ingredientsList: list,
                newIngredient: ""
            })
        } else {
            alert("Please add new ingredient")
        }

        // console.log(combineIngredients(this.state.ingredientsList)); 
    }

    deleteItem(key) {
        console.log("deleting ingredient!");
        const list = this.state.ingredientsList;
        list.splice(key, 1);

        this.setState({
            ingredientsList: list
        });
    }

    clearList(e) {
        console.log("Clearing List!");
        this.setState({
            ingredientsList: []
        });
    }



    recipeSearch(e) {
        console.log('searching...');
        console.log(url);
        console.log(key);
        console.log(id);
       
        fetch(`${url}?q=${combineIngredients(this.state.ingredientsList)}&app_id=${id}&app_key=${key}&ingr=${this.state.ingredientsList.length + parseInt(this.state.extrasAllowed)}`)
            .then((response) => {
                return response.json()
            })
            .then((json) => {
                console.log(json);
                this.setState({ recipes: json.hits })
            })
            .catch((ex) => {
                console.log('An error occured while parsing!', ex);
            })
    }
    
    render() {
        const {ingredientsList, newIngredient, extrasAllowed, recipes} = this.state;

        const matches = recipes.map((recipe, index) => {
            return <li className="recipes__item" key={index}>
                <h3>{recipe.recipe.label}</h3>
                <a href={recipe.recipe.url} target="_blank">View Recipe</a>
                <div>
                    <img src={recipe.recipe.image} alt=""/>
                </div>
                <ul>
                    {recipe.recipe.ingredientLines.map((ing, key) => {
                        return <li key={key}>{ing}</li>
                    })}
                </ul>
            </li>
        })

        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title">Recipe Finder</h1>
                </header>
                <div className="ingredient">
                    <h2 className="ingredient__title">Enter Your Ingredients</h2>
                    <form className="ingredient__form">
                        <input className="ingredient__input" type="text" value={newIngredient} placeholder="New Ingredient" onChange={(e) => this.newIngredientChange(e)}/>                        
                        <button className="ingredient__btn" onClick={(e) => this.addItem(e)}>Add</button>
                    </form>
                    <label>
                        Number of extra ingredients in results: 
                        <input className="ingredient__input" type="text" value={extrasAllowed} onChange={(e) => this.newExtrasAllowedChange(e)} />
                    </label>
                    {/* <button className="ingredient__btn" onClick={(e) => this.addItem(e)}>Add</button> */}
                </div>
                <section className="ingredient__section">
                    <Recipe ingredients={ingredientsList} onDelete={this.deleteItem} />
                    <button className="ingredient__clear" onClick={(e) => this.clearList(e)}>Clear the list!</button>
                </section>
                <div className="recipes">
                    <div className="recipes__heading">
                        <h2 className="recipes__title">Lets Find Some Recipes</h2>
                        <button className="recipes__search" onClick={(e) => this.recipeSearch(e)}>Search</button>
                    </div>
                    <ul className="recipes__list">
                        {matches}
                    </ul>
                </div>
            </div>
        );
    }
}

export default Home;
