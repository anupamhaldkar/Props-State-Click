import React, {Component} from 'react';
class HighScore extends Component{
    render(){
        if(this.props.overTen){
        return (
            <div>
            <h3>Beat High score
                <br />
                <button onClick={(e)=>this.props.onReset(e)}>Reset</button>
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