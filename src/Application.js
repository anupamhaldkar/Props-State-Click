import React, {Component} from 'react';

class Application extends Component {
    constructor(props){
        super(props);
        this.state = {
            count:0
        }
    }
    render(){
        let name ="Anupam Haldkar"
        return (
            <div>
            <h1>Hello {name}</h1>
            <span>Hmm</span>
            </div>
        );
    }
}
export default Application;