import React from "react";

//This is the child component of Items.jsx. It will work as a "frame" for the items we want to render, using props.
export const Item = (props) => {
    return (
        <div>      
            <div className="itemparent">{/*Using the data the parent component feeds, it will be inserted in the p tags.*/}
                <p className="itemtitle"><b>Title: </b>{props.title}</p>
                <p className="itemdesc"><b>Description: </b>{props.description}</p>
                <img className="itemimg" src={props.img} alt='img'/>        
            </div>    
        </div>
    );
}