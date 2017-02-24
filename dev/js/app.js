
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header/Header';
import PlayerBoard from './components/PlayerBoard';
import Matrix from './components/Matrix/Matrix';

const css = require('../sass/styles.scss');
let PLAYERS = [
    {
        name:'Player 1',
        score:0
    },
    {
        name:'Player 2',
        score:0
    }
];

export default class App extends Component{
    constructor(props){
        super(props)
        this.state = {
            currentPlayerIdx:0,
            gameStatus:'playing'
        };
    }
    render(){
       return (
           <div>
                <Header title = {this.props.title}/>
                <PlayerBoard 
                            players = {this.props.players} 
                            currentPlayerIdx = {this.state.currentPlayerIdx}
                            />
                <Matrix 
                    currentPlayerIdx = {this.state.currentPlayerIdx} 
                    onSquareClickHandler = {this.onSquareClickHandler.bind(this)}
                     />
           </div>
       );
    }
    onSquareClickHandler(e){
        
        this.state.currentPlayerIdx = (this.state.currentPlayerIdx === 0)?1:0;
        
        this.setState(this.state);
    }
}

ReactDOM.render(
        <App
             players = {PLAYERS}
             title = "Tic Tac Toe"
        />,document.getElementById('container'));