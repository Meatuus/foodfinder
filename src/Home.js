import React, { Component } from 'react';
import logo from './img/logo.svg';
import './css/App.css';
import Recipe from './containers/Recipe';




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
                "basil",
                "feta"
            ],
            newIngredient: ""
        }
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

    
    render() {
        const {ingredientsList, newIngredient} = this.state;

        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title">Recipe Finder</h1>
                </header>
                <p className="App-intro">
                    To get started, edit <code>src/App.js</code> and save to reload.
                </p>
                <Recipe ingredients={ingredientsList} />
                <form>
                    <input type="text" value={newIngredient} placeholder="Add Ingredient" onChange={(e) => this.newIngredientChange(e)}/>
                    <button onClick={(e) => this.addItem(e)}></button>
                </form>
            </div>
        );
    }
}

export default Home;
