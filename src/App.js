import React, {Component} from 'react';
import './App.css';
import ComboList from "./ComboList";
import Scanner from './Scanner';

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
    
    scanQR = () => {
        const newState = JSON.parse(JSON.stringify(this.state));
        newState.selectedView = "Show QR Scanner";
        super.setState(newState);
    }

    render() {
            if (this.state.selectedView === "Show QR Scanner"){
               return(
                   <Scanner />
               ) 
            }
            else{
                return(
                    <div>
                        <div className="App">
                            <header className="App-header">
                                <img src="allstatelogo.jpg" className="App-logo" alt="logo"/>
                                <h1 className="App-title">Welcome to AllState-Eats</h1>
                            </header>
                        </div>
                        <div>
                            <ComboList menu= {this.state.Menu} />
                            <button onClick={this.scanQR}>Test</button>
                        </div>
                    </div>
                )
            }
        
    }
}

export default App;
