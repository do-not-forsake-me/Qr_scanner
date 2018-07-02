import React, { Components } from 'react';
import QrReader from 'react-qr-reader';


export default class Scanner{
    constructor(props){
        super(props);
        this.state = { delay : 1000, result : ''};
    }
    
    handleError = (err) => {
        console.log(err);
    }
    
    handleScan = (data) => {
        if (data===null)
            console.log("Not a valid QR code");
        else {
            const newState = JSON.parse(JSON.stringify(this.state));
            newState.result = data;
            super.setState(newState);
        }
    }
    render(){
        return(
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