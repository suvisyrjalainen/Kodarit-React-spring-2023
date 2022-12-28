import React from "react";
import { Square } from './Square';

//Board component that is rendered in the base component, board contains 9 Square components. 
export const Board = ({ gameState, onSquareClick }) => { //Passing the state and function to the component from the base component.
    return (
      <>
        <div className="row">
          <Square
            className="b-bottom-right"
            state={gameState[0]} //Setting an unique id to each squares from base components gameState.
            onClick={() => onSquareClick(0)}//Passing the square the onSquareClick function to work using the squares index(gameState we passed above).
          />
          <Square
            className="b-bottom-right"
            state={gameState[1]}
            onClick={() => onSquareClick(1)}
          />
          <Square
            className="b-bottom"
            state={gameState[2]}
            onClick={() => onSquareClick(2)}
          />
        </div>
        <div className="row">
          <Square
            className="b-bottom-right"
            state={gameState[3]}
            onClick={() => onSquareClick(3)}
          />
          <Square
            className="b-bottom-right"
            state={gameState[4]}
            onClick={() => onSquareClick(4)}
          />
          <Square
            className="b-bottom"
            state={gameState[5]}
            onClick={() => onSquareClick(5)}
          />
        </div>
        <div className="row">
          <Square
            className="b-right"
            state={gameState[6]}
            onClick={() => onSquareClick(6)}
          />
          <Square
            className="b-right"
            state={gameState[7]}
            onClick={() => onSquareClick(7)}
          />
          <Square 
            state={gameState[8]} 
            onClick={() => onSquareClick(8)} />
        </div>
      </>
    );
  };