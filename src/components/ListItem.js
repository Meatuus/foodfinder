import React, { Component } from 'react';

class ListItem extends Component {
    // state = {  }
    render() {
        const {item} = this.props;

        return (
            <p>{item}</p>
        );
    }
}

export default ListItem;