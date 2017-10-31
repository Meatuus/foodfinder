import React, { Component } from 'react';

class ListItem extends Component {
    // state = {  }
    render() {
        const {item, index} = this.props;

        return (
            <li key={index}>{item}</li>
        );
    }
}

export default ListItem;