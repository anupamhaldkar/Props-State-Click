import React, {Component} from 'react';
class HighScore extends Component{
    render(){
        if(this.props.overTen){
        return (
            <div>
            <h3>Beat High score
                <br />
                <button onClick={this.props.onReset}>Reset</button>
                 </h3>
                 </div>

        )
        }
        else{
            return null;
        }
    }

}
export default HighScore;