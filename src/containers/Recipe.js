import React, { Component } from 'react';
import ListItem from '../components/ListItem';

class Recipe extends Component {
    // state = {  }
    render() {

        const {ingredients} = this.props

        const list = ingredients.map((item, index) => {
            return <ListItem item={item} key={index}/>
        })

        return (
            <ul>
                {list}
            </ul>
        );
    }
}

export default Recipe;