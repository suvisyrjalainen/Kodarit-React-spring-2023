import React from 'react';
import { useState, useEffect } from "react";

//Component that teaches the different ways to tigger useEffect using counters.
export const Counters = () =>{
//States of the counters.
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);
  const [count3, setCount3] = useState(0);

//First counter with and dependency array, making it only run once.
  useEffect(() => {
    setTimeout(function () { setCount(count + 1) }, 1000);
  }, []);

//Second counter with no dependency array, but a setTimeout making the counter work as a timer, adding one every second.
  useEffect(() => {
    setTimeout(function () { setCount2(count2 + 1) }, 1000);
  });


//Third counter using the counter above as its trigger, making it trigger the same time as the previous.
  useEffect(() => {
    setCount3(count3 + 1);
  }, [count2]);


//Rendering the states.
  return (
    <div className='maincontent'>
        <span>text</span>
        <h1>I've rendered {count} times!</h1>
        <h1>I've rendered {count2} times!</h1>
        <h1>I've rendered {count3} times!</h1>
    </div>  
  )
}