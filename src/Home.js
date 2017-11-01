import React, { Component } from 'react';
import logo from './img/logo.svg';
import './css/App.css';
import Recipe from './containers/Recipe';
import {url, key, id} from './foodApi';

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
            newIngredient: ""
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
        // fetch('https://api.edamam.com/search?q=tomato,basil,onion,salt,pepper&app_id=d95b6206&app_key=705d712b9853abe39d95ed9f28ddfff8&ingr=6')
            .then((response) => {
                return response.json()
            })
            .then((json) => {
                console.log(json);
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
        const {ingredientsList, newIngredient} = this.state;

        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title">Recipe Finder</h1>
                </header>
                <Recipe ingredients={ingredientsList} onDelete={this.deleteItem} />
                <form className="App-intro">
                    <input type="text" value={newIngredient} placeholder="New Ingredient" onChange={(e) => this.newIngredientChange(e)}/>
                    <button onClick={(e) => this.addItem(e)}>Add</button>
                </form>
                <button onClick={(e) => this.clearList(e)}>Clear the list!</button>
                <div>
                    <button onClick={(e) => this.recipeSearch(e)}>Search</button>
                </div>
            </div>
        );
    }
}

export default Home;
