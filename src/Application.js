import React, {Component} from 'react';

class Application extends Component {
    constructor(props){
        super(props);
        this.state = {
            count:0
        }
    }
    handleClick = () => {
        this.setState({
            count:this.state.count+1
        })
    }

    render(){
        let {count} = this.state;
        return (
            <div>
            <h1>Hello {count} times</h1>
            <button onClick={()=>this.handleClick()}>Click to hello</button>
            </div>
        );
    }
}
export default Application;