import React, {Component} from 'react';
export default class PlayerBoard extends Component{
       constructor(props){
           super(props);
       }

       render(){
           return(
            <div>
                <span>It's {this.props.players[this.props.currentPlayerIdx].name}'s turn!</span>    
            </div>  
        );
       }       
}
