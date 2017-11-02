import React, { Component } from 'react';

class IngredientsForm extends Component {

    newIngredientChange(e) {
        this.props.onNewIngredient(e.target.value);
    }

    addItem(e) {
        e.preventDefault();
        const list = this.props.ingredientsList;

        if (this.props.newIngredient && !list.includes(this.props.newIngredient)) {
            list.push(this.props.newIngredient);

            this.props.onAddItem(list);
            this.props.onNewIngredient("");
        } else {
            alert("Please add new ingredient")
        }
        console.log('ingredient added!');
    }

    newExtrasAllowedChange(e) {
        this.props.onExtrasChange(e.target.value);
    }

    render() {
        const { newIngredient, extrasAllowed } = this.props;

        return (
            <div className="ingredient">
                <h2 className="ingredient__title">Enter Your Ingredients</h2>
                <form className="ingredient__form">
                    <input 
                        className="ingredient__input" 
                        type="text" 
                        value={newIngredient} 
                        placeholder="New Ingredient"
                        onChange={(e) => this.newIngredientChange(e)} 
                    />
                    <button className="ingredient__btn" onClick={(e) => this.addItem(e)}>Add</button>
                </form>
                <label className="ingredient__extras-label">
                    Number of extra ingredients in results:
                    <input 
                        className="ingredient__extras" 
                        type="text" 
                        value={extrasAllowed} 
                        onChange={(e) => this.newExtrasAllowedChange(e)} 
                    />
                </label>
            </div>
        );
    }
}

export default IngredientsForm;