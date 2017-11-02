import React, { Component } from 'react';

class ClearListBtn extends Component {

    clearList(e) {
        console.log("Clearing List!");
        this.props.onClear([])
    }

    render() {
        return (
            <button className={this.props.className} onClick={(e) => this.clearList(e)}>Clear the list!</button>
        );
    }
}

export default ClearListBtn;