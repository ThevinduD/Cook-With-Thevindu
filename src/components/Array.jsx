import React from "react";

export default function Array() {

    const [myFavouriteThings, setmyFavouriteThings] = React.useState([]);
    const allFavourthings = ["A","B","C","D","E"];
    const thingsElement = myFavouriteThings.map((thing) => <p key={thing}>{thing}</p>)
    
    function addFavouriteThings() {
        setmyFavouriteThings(prev => [...prev, allFavourthings[prev.length]])
    }

    return (
        <>
            <button onClick={addFavouriteThings}>Add Item</button>
            <section>
                {thingsElement} 
            </section>
        </>
    )
}