import React, { Component } from 'react';
import ListItem from '../components/ListItem';

class IngredientsContainer extends Component {
    constructor() {
        super();

        this.removeItem = this.removeItem.bind(this);
    }

    removeItem(index) {
        this.props.onDelete(index);
    }

    render() {

        const {ingredients} = this.props

        const list = ingredients.map((item, index) => {
            return <li className="ingredient__item" key={index}><ListItem item={item} /> <button onClick={(e) => this.removeItem(index, e)}>X</button></li>
        })

        return (
            <ul className="ingredient__list">
                {list}
            </ul>
        );
    }
}

export default IngredientsContainer;