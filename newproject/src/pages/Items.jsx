import React from "react";
import { Item } from './Item';
import { items } from './itemDatabase';

//This component will render the items of itemDatabase.js using .map method, and the child component.
export const Items = () => {
    return (
        <div className="maincontent">
            {
                items.map(({title, description, img, id}) => //mapping the items of itemDatabase.js array.
                <Item //*Feeding the data to the child component through props.
                    title={title} 
                    description={description} 
                    img={img} 
                    id={id} 
                />)
            }
        </div>
    );
}