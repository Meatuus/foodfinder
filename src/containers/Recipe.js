import React, { Component } from 'react';
import ListItem from '../components/ListItem';

class Recipe extends Component {
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
            return <li key={index}><ListItem item={item} /> <button onClick={(e) => this.removeItem(index, e)}>X</button></li>
        })

        return (
            <ul>
                {list}
            </ul>
        );
    }
}

export default Recipe;