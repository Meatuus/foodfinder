import React, { Component } from 'react';
import ListItem from '../components/ListItem';
import ClearListBtn from '../components/ClearListBtn';

class IngredientsContainer extends Component {
    constructor() {
        super();

        this.removeItem = this.removeItem.bind(this);
        this.handleClearList = this.handleClearList.bind(this);
    }

    removeItem(index) {
        this.props.onDelete(index);
    }

    handleClearList(list) {
        this.props.onClearList(list)
    }

    render() {

        const {ingredients} = this.props

        const list = ingredients.map((item, index) => {
            return <li className="ingredient__item" key={index}><ListItem item={item} /> <button onClick={(e) => this.removeItem(index, e)}>X</button></li>
        })

        return (
            <section className="ingredient__section">
                <ul className="ingredient__list">
                    {list}
                </ul>
                <ClearListBtn 
                    className={ingredients.length ? "ingredient__clear" : "ingredient__clear invisible"} 
                    onClear={this.handleClearList}
                />
            </section>
        );
    }
}

export default IngredientsContainer;