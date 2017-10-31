import React, { Component } from 'react';

class ListItem extends Component {
    // state = {  }
    render() {
        const {item} = this.props;

        return (
            <li>{item}</li>
        );
    }
}

export default ListItem;