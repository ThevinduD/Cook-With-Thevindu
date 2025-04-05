import React, { useRef } from 'react';

export default function RefCheck() {

    const recipeSection = useRef(null); 
    console.log(recipeSection);  

    const showElement = () => {
      if (recipeSection.current) {
        console.log("Recipe section is now accessible!");
      }else {
        console.log("NOT Available");
      }
    };

    return ( 
        <div>
            <button onClick={showElement}>Show Recipe Section</button>
            <div ref={recipeSection}>
                <h1>Recipe Section</h1>
                <p>This is where the recipe details will go!</p>
            </div> 
        </div>
    )
}