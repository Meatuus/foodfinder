import React, { Component } from 'react';
import logo from './img/logo.svg';
import './css/App.css';
import IngredientsForm from './components/IngredientsForm';
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

        this.handleIngredientAdd = this.handleIngredientAdd.bind(this);
        this.handleNewIngredient = this.handleNewIngredient.bind(this);
        this.handleExtrasChange = this.handleExtrasChange.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
    }

    handleIngredientAdd(ingredients) {
        this.setState({ingredientsList: ingredients});
    }

    handleNewIngredient(item) {
        this.setState({
            newIngredient: item
        });
    }

    handleExtrasChange(num) {
        this.setState({extrasAllowed: num});
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
                <IngredientsForm 
                    ingredientsList={ingredientsList}
                    newIngredient={newIngredient} 
                    extrasAllowed={extrasAllowed} 
                    onAddItem={this.handleIngredientAdd}
                    onNewIngredient={this.handleNewIngredient}
                    onExtrasChange={this.handleExtrasChange}
                />
                {/* ingredients list */}
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
