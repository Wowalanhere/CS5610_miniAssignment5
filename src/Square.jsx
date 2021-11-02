import React from "react";
import "./Square.css";



function Square(props){

    return (
        <button className = 'square' onClick = {props.onClick} id = {props.squareId} >

        </button>
    );
}

export default Square;