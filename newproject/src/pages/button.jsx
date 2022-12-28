import React from 'react';
import { useState } from "react";

//Button component that teaches the useState hook and onClick event handler.

export const Button = (handleClick, resetCount) => {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);
  
  //First button that adds one with every click.
  function handleClick() {
    setCount(count + 1);
  }

  //Second button that works identically as the previous.
  function handleClick2() {
    setCount2(count2 + 1);
  }

  //Button to reset the count of both buttons together.
  function resetCount() {
    setCount(0);
    setCount2(0);
  }

  //Rendering the buttons.
    return (
      <div className='maincontent'>
        <div className='buttonscontent'>
          <h2>Buttons</h2>
          <span>Counters that update separately but reset together</span>
        </div>
        <div className='btn-group'>
          <button className='btn-count' onClick={() => handleClick()}>{/*Functions assigned to the buttons with onClick.*/}
            Clicked {count} times
          </button><br></br>
          <button className='btn-count' onClick={() => handleClick2()}>
            Clicked {count2} times
          </button><br></br>
        </div>
          <button className='btn-clear' onClick={() => resetCount()}>
            Clear count
          </button>          
      </div>
    );
  }
