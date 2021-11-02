import React from "react";
import "./Board.css"
import Square from "./Square";

class Board extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            squares: Array(4).fill(1),
        }
    };

    colorChanger(i){
        var theSquare = document.getElementById(i);
        const squares = this.state.squares.slice();

        if (this.state.squares[i] == 1){
            theSquare.style.backgroundColor = 'black';
            squares[i] = 0;
            this.setState({
                squares: squares
            });
        }

        if (this.state.squares[i] == 0){
            theSquare.style.backgroundColor = 'white';
            squares[i] = 1;
            this.setState({
                squares: squares
            });
        }
    }

    renderSquare(i){
        return (
            <Square
            value = {this.state.squares[i]} 
            onClick = {() => this.colorChanger(i)}
            squareId = {i}
            />
        )
    }

    render(){
        const counter = 'Counter: ' + (4 - this.state.squares[0] - 
        this.state.squares[1] - this.state.squares[2] 
        - this.state.squares[3]);

        return (
            <div>
                <div>{counter}</div>
                <div>
                    {this.renderSquare(0)} {this.renderSquare(1)}
                </div>
                <div>
                    {this.renderSquare(2)} {this.renderSquare(3)}
                </div>
            </div>
        )
    };
}

export default Board;