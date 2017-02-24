import React, {Component} from 'react';

export default class Square extends Component{

    constructor(props){
        super(props);
        this.state = {
            wasClicked:false,
            clickCount:0
        }
    }

    wasClickH(e){
        if(!this.state.wasClicked && this.state.clickCount === 0){
            e.target.innerHTML = (this.props.currentPlayerIdx === 0)?'O':'X';
            this.setState({
                wasClicked:true,
                clickCount:this.state.clickCount+1
            });
           
        }
    }

    render(){
        return (
            <td onClick = {function(e){this.props.onSquareClickHandler(e); this.wasClickH(e)}.bind(this)}></td>
        );
    }
    
}

