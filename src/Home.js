import React, { Component } from 'react';
import logo from './img/logo.svg';
import './css/App.css';
import Recipe from './containers/Recipe';

class Home extends Component {
    render() {
        let list = [
            "onion",
            "tomato",
            "garlic",
            "salt",
            "pepper",
            "basil",
            "feta"
        ]

        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title">Recipe Finder</h1>
                </header>
                <p className="App-intro">
                    To get started, edit <code>src/App.js</code> and save to reload.
                </p>
                <Recipe ingredients={list} />
            </div>
        );
    }
}

export default Home;
