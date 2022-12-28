import React from "react";

//Individual box of the tictactoe game, the board component is built with them.
export const Square = (props) => {
    const classes = props.className?`${props.className} square`:'square';//Swapping the className with ternary operator for the individual squares using props.
    return (
        <div className={classes} onClick={props.onClick}>{/*Making the squares clickable with onClick and setting the classes as a className.*/}
            {props.state} {/*Rendering gameState, passed with props from tha parent component (Board.jsx).*/}
        </div>
    )
}