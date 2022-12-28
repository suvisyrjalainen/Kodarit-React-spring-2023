import React from 'react';
import { useState } from "react";

export const List = () => {
    const [content, setContent] = useState([]); // States of the component, list that will be rendered.
    const [inputValue, setInputValue] = useState(''); //Data submitted by the input field to the content array.

    const removeHandler = (removeIndex) => { //Remove handler that deletes individual items from content array using the item index.
        const removeItem = content.filter((content, index) => {
                return removeIndex !== index;
              });
              setContent(removeItem);
      };

      function clearList() {// Function to clear the whole array by using setContent, setting the state to empty array, like it is in the initial state.
        setContent([]);
      }

    return (
        <div className='maincontent'>{/*HTML form*/}
            <div>
                <form onSubmit={(event) => {
                    event.preventDefault() //Preventing the page from refreshing after submit
                    const temp = [inputValue, ...content]; {/*Since we can't push content straight to the content array (Because we're using setContent, which requires a completely new array)
                                                            we will take copy of the existing array and with the spread method adding both, 
                                                            the content array and sumbitted item into to the same array. After that setting the 
                                                            content to the temp array using useState.*/}
                    setContent(temp);
                    setInputValue(''); // Clearing the text field after submit.
                }}>
                    <div className='inputheader'>
                    <h2 >Input tutorial</h2>
                    <span>Component that renders data submitted in the form and deletes individual rows.</span>
                    </div>
                    <input 
                        type='text'
                        className='inputfield'
                        placeholder='Type here...'
                        value={inputValue}
                        onChange={e => setInputValue(e.target.value)} //Setting the e.target.value(data being submitted aka written on the text field) as the inputValue state.
                        required
                    />
                    
                    <input type="submit" value='Add' className='btn-add'/>
                {
                    content.map((content, index) => ( //Mapping the content array using item index.
                    <div className='inputmap'>
                        <ul>
                            <li className='mapitem'>
                                <div className='jokulista'>
                                    <h4 className='mapheader' key={index}>{content}</h4>
                                    <button onClick={() => removeHandler(index)} type="button" className='btn-delete'>✖</button>   {/*Button to remove the individual items, 
                                                                                                                                    remove handler passed with onClick.*/}
                                </div>
                            </li>
                            
                        </ul>
                    </div>
                    )
                )}
                </form>
                <button className='btn-clear' onClick={clearList}>Clear list</button> {/*Button where clearList function is assigned with onClick.*/}
            </div>
        </div>
)}