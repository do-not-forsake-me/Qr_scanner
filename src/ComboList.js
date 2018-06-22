import React,{Component} from 'react';

class ComboList extends Component{

    constructor(props){
        super(props);
        this.state = {
            menu : props
        }
    }
    render(){
        return(
            <div className="ComboList">
                <h4><i>Menu List</i></h4>
                <div>
                    <ul>
                        {this.props.menu.map((m) => {
                            return (<li>{m.name} {m.type} {m.price}</li>)
                        })}
                    </ul>
                </div>
            </div>
        )
    }
}
export default ComboList;