import React, { Component } from 'react';
import logo from './img/logo.svg';
import './css/App.css';
import Recipe from './containers/Recipe';
import {url, key, id} from './foodApi';

import {data} from './recipeData';

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
            recipes: data
        }

        this.deleteItem = this.deleteItem.bind(this);
        this.recipeSearch = this.recipeSearch.bind(this);
    }

    newIngredientChange(e) {
        this.setState({
            newIngredient: e.target.value
        });
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
       
        fetch(`${url}?q=tomato,basil,onion,salt,pepper&app_id=${id}&app_key=${key}`)
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

        // fetch('http://api.openweathermap.org/data/2.5/weather?zip=85001,us&appid=052f26926ae9784c2d677ca7bc5dec98&&units=imperial')
        //     .then((response) => {
        //         return response.json()
        //     }).then((json) => {
        //         console.log(json);
        //         // base.setState({
        //         //     city: json.name,
        //         //     description: json.weather[0].description,
        //         //     highTemp: json.main.temp_max,
        //         //     lowTemp: json.main.temp_min
        //         // });
        //     }).catch((ex) => {
        //         console.log('An error occured while parsing!', ex)
        //     });

        // https://api.edamam.com/search?q=tomato,basil,olive oil,onion,salt,pepper&app_id=d95b6206&app_key=705d712b9853abe39d95ed9f28ddfff8&ingr=6

    }
    
    render() {
        const {ingredientsList, newIngredient, recipes} = this.state;

        const matches = recipes.map((recipe, index) => {
            return <li className="recipes__item" key={index}>{recipe.recipe.label}</li>
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
