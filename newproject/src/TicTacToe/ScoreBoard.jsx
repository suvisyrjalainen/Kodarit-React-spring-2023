import React from "react";

export const Scoreboard = ({ scores, isXTurn, clearScoreboard}) => {//Importing states and the function.
    
    return(
        <>
            <div className="scoreboard">
                <span className={`score x-score ${!isXTurn && "inactive"}`}>X - {scores.xScore}</span> {/*Rendering the scores.*/}
                <span className={`score o-score ${isXTurn && "inactive"}`}>O - {scores.oScore}</span>
            </div>
            <button className="buttons" onClick={clearScoreboard}>Clear scores</button>{/*Button to clear the scoreboard with clearScoreboard function from the base component, assigned with onClick.*/}
        </>
    )
}