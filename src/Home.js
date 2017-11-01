import React, { Component } from 'react';
import logo from './img/logo.svg';
import './css/App.css';
import IngredientsContainer from './containers/IngredientsContainer';
import RecipeContainer from './containers/RecipeContainer';

class Home extends Component {
    constructor() {
        super();

        this.state = {
            ingredientsList: [
                // "onion",
                // "tomato",
                // "garlic",
                // "salt",
                // "pepper",
                // "basil"
            ],
            newIngredient: "",
            extrasAllowed: 0
        }

        this.deleteItem = this.deleteItem.bind(this);
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
        console.log('ingredient added!');
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
        const {ingredientsList, newIngredient, extrasAllowed} = this.state;

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
                    <label className="ingredient__extras-label">
                        Number of extra ingredients in results: 
                        <input className="ingredient__extras" type="text" value={extrasAllowed} onChange={(e) => this.newExtrasAllowedChange(e)} />
                    </label>
                </div>
                <section className="ingredient__section">
                    <IngredientsContainer ingredients={ingredientsList} onDelete={this.deleteItem} />
                    <button className={ingredientsList.length ? "ingredient__clear" : "ingredient__clear invisible"} onClick={(e) => this.clearList(e)}>Clear the list!</button>
                </section>
                <RecipeContainer ingredientsList={ingredientsList} extrasAllowed={extrasAllowed} />
            </div>
        );
    }
}

export default Home;
