import React from 'react';
import { useState, useEffect } from "react";
import { Scoreboard } from './ScoreBoard';
import { Board } from './Board';
import "./TicTacToe.css"
const intialBoard=['', '', '', '', '', '', '', '', '',]; //The empty game board array,

export const TicTacToe = () => {
    const [gameState, setGameState] = useState(intialBoard); //Gameboard that we pass to the squares in Board.jsx.
    const [isXTurn, setIsXTurn] = useState(true);//Checks the turn with boolean value true=X.
    const [status, setStatus] = useState('');//State that contains the status of the game, which we use to make if statements and conditional rendering.
    const [scores, setScores] = useState({ xScore: 0, oScore: 0})//Scores of the scoreboard.
    
    const onSquareClick = (index) =>{ //Function that handles the clicking of the squares = making moves on the game.
        let strings = Array.from(gameState);//Storing the gameState(current state of the game) as a variable.

        if (status.includes("Winner")) { //Stops the function(game as a whole) if a winner is found.
            return
        }

        if (strings[index] !== '') {//Check if the square where the move is being made is empty, if it is the move will be inserted.
            return;
        }

        strings [index] = isXTurn ? 'X' : 'O'; //Ternary operator checks whose turn it is (true X false O).
        setGameState(strings); //Setting the gameState as the strings array made in the first line of this function.
        setIsXTurn(!isXTurn);//Setting the turn to the next player.
    }

    function clearScoreboard(){ //Function that clears the scoreboard. Passed to the button in Scoreboard.jsx
        setScores({ xScore: 0, oScore: 0 }) //Setting the scores to their initial state
        setGameState(intialBoard) //Clearing the game boars
        setIsXTurn(true) //Setting the turn to X
    }

    useEffect(() => { //useEffect hook to manage status's.
        const winner = checkWinner(); //Storing the winner from winner calculator in a variable.

        if(winner){
            setStatus(`Winner: ${winner}`) //If winner is found, function sets the status to display the winner annoucement.
        } else if (!gameState.includes('')){//If a winner isn't found and the board contains no empty squares (!gameState.includes('')) the status renders the draw annoucement.
            setStatus(`It's a draw`)
        } else {
            setStatus(`${isXTurn ? 'X' : 'O'}'s turn`)//If winner isn't found, and there is still empty squares(game in progress), the status displays the current turn.
        }
    }, [gameState]) //Hook runs when gameState updates.

    useEffect(() => { //useEffect hook to manage scoreboard.
    const winner = checkWinner();//Storing the winner from winner calculator in a variable.
    
        if(winner === null){ //If winner isn't found, function stops.
            return;
        }

        if (winner === "X") { //If winner is found and is X adding one to xScore state.
            setScores({ xScore: scores.xScore + 1, oScore: scores.oScore});
        } else { //If winner is found and is O adding one to oScore state.
            setScores({ xScore: scores.xScore, oScore: scores.oScore + 1 });
        }
    }, [status])


    const checkWinner = () => {//Winner calculator.
        const lines = [ //Array that contains all the unique possible lines on a 3x3 board. Line being 3 same variables in a row.
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];

        for (let i = 0; i < lines.length; i++) {//Looping through the lines array to see if the a,b,c variables has the same value (winner found).
            const [a, b, c] = lines[i]; //Assigning variables to the lines by item index.
            if (gameState[a] && gameState[a] === gameState[b] && gameState[a] === gameState[c]) {
                return gameState[a];//Checks if a line contains three same values, return the first one.
                                    //We only need one because the values has to be the same to have a winner(Three X's in a row for an example).
            }
        }
        return null; //If winner is not found, null is returned.
    }

    return (
        <div className='maincontent'>
            <div className='game'>
                <p className='gametitle'>Tic-Tac-Toe</p>
                <Scoreboard scores={scores} isXTurn={isXTurn} clearScoreboard={clearScoreboard}/>{/*Rendering the Scoreboard component.    
                                                                                                    Also passing it the scores and isXTurn states and the clearScoreboard function.*/}                

                <div>
                    <Board gameState={gameState} onSquareClick={onSquareClick} /> {/* Rendering the board component, also passing the gameState and onSquareClick to it.*/}
                </div>

                <div className='gameinfo'>
                    {!status.includes("Winner") && (//Conditional render that displays status and a clear clear board button. This render happens if the winner is not found.
                        <>
                        <span className='status'>{status}</span><br></br>
                        <button className='btn-clear btn-draw' onClick={() => {//Clear button setting the gameState as the empty board, and setting the turn to X
                            setGameState(intialBoard);
                            setIsXTurn(true);
                        } }>Clear board</button>
                        </>     
                    )}
                    {status.includes("Winner") && (//Conditional render that displays the status in green, and a green play again button. This render happens if a winner is found
                        <>
                        <span className='status' style={{ color: "green" }}>{status}</span><br></br>
                        <button className='btn-clear btn-count' onClick={() => {//Play again button that clears the board and resets the turn, like the clear board button above.
                            setGameState(intialBoard);
                            setIsXTurn(true);
                        } }>Play again</button>
                        </>
                    )}                     


                </div>

            </div>

        </div>
    );
  }