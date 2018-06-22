import React, {Component} from 'react';
import './App.css';
import ComboList from "./ComboList";

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            Menu: [
                {name: 'Combo 1', type: 'Veg', price: 100},
                {name: 'Combo 2', type: 'Veg', price: 70},
                {name: 'Combo 3', type: 'Veg', price: 50},
            ],
            selectedView: '',
        };
    }

    render() {
        return (
            <div>
                <div className="App">
                    <header className="App-header">
                        <img src="allstatelogo.jpg" className="App-logo" alt="logo"/>
                        <h1 className="App-title">Welcome to AllState-Eats</h1>
                    </header>
                </div>
                <div>
                    <ComboList menu= {this.state.Menu} />
                </div>
            </div>
        );
    }
}

export default App;
