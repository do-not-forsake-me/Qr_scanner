import React, {Component} from 'react';
import QrScanner from "./QrScanner.js";

class App extends Component {

    render() {
        return (
            <div className="App">
                <QrScanner />
            </div>
        );
    }
}

export default App;
