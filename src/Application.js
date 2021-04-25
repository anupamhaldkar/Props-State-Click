import React, {Component} from 'react';
import HighScore from './HighScore';
class Application extends Component {
    constructor(props){
        super(props);
        this.state = {
            count:0,
            overTen:false

        }
    }
    onResete = (e) => {
        this.setState({
            count:0,
            overTen:false
        });
    }

    handleClick = () => {
        this.setState({
            count:this.state.count+1
        });
    }

    componentDidUpdate(props, state){
        if(this.state.count > 10&& !this.state.overTen&&this.state.count!== state.count){
            console.log("Updating over Ten");
            this.setState({overTen:true});
        }
    }

    render(){
        let {count} = this.state;
        return (
            <div>
            <h1>Hello {count} times</h1>
            <HighScore 
            overTen={this.state.overTen}
            onReset = {this.onResete}
            />
            <button onClick={()=>this.handleClick()}>Click to hello</button>
            </div>
        );
    }
}
export default Application;