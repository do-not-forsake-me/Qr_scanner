import React, {Component} from 'react';
import QrReader from 'react-qr-reader';

class QrScanner extends Component {
    constructor(props){
        super(props);
        this.state = { delay : 1000, result : ''};
    }

    handleError = (err) => {
        alert(err);
    };
    handleScan = (data) => {
        if (data===null)
            console.log("Not a valid QR code");
        else{
            const newState = JSON.parse(JSON.stringify(this.state));
            newState.result = data;
            super.setState(newState);
            console.log(data);
        }
    };
    render() {
        return (
            <div>
                <QrReader
                    delay={this.state.delay}
                    onError={this.handleError}
                    onScan={this.handleScan}
                    style={{width: '25%'}}
                />
            </div>
        )
    }
}

export default QrScanner;