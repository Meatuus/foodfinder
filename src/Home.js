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
                "basil"
                // {
                //     "item": "onion",
                //     "key": 0
                // },
                // {
                //     "item": "tomato",
                //     "key": 1
                // },
                // {
                //     "item": "garlic",
                //     "key": 2
                // },
                // {
                //     "item": "salt",
                //     "key": 3
                // },
                // {
                //     "item": "pepper",
                //     "key": 4
                // },
                // {
                //     "item": "basil",
                //     "key": 5
                // }
            ],
            newIngredient: ""
        }

        this.deleteItem = this.deleteItem.bind(this);
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
            </div>
        );
    }
}

export default Home;
