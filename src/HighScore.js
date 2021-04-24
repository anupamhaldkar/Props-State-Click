import React, {Component} from 'react';
class HighScore extends Component{
    render(){
        if(this.props.overTen){
        return (
            <h3>Beat High score </h3>
        )
        }
        else{
            return null;
        }
    }

}
export default HighScore;