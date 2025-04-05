import React from "react";
import ClaudeRecipe from "./ClaudeRecipe";
import IngredientsList from "./IngredientList";
import { getRecipeFromMistral } from "./ai";
import CustomAlert from "./CustomAlert";

export default function Main() {
    const [A, setA] = React.useState([]);
    const [recipe, setRecipe] = React.useState("");
    const recipeSection = React.useRef(null);
    const [generating, setGenerating] = React.useState(false)

    React.useEffect(() => {
        if(recipe !== "" && recipeSection.current !== null) {
            setGenerating(false)
            recipeSection.current.scrollIntoView({behavior: 'smooth'})
        }
    }, [recipe])

    async function getRecipe() {
       !recipe && setGenerating(true)
       const recipeMarkdown = await getRecipeFromMistral(A)    
       setRecipe(recipeMarkdown);
    }
  
    function addIngredient(formData) {
        const ingredient = formData.get('ingredient').trim();  
        
        if (ingredient) {
            setA(prev => [...prev, ingredient]); // ✅ Directly update state
        }
    }

    return (
        <>
            <main>
                <form action={addIngredient}>
                    <div className="flex-div">
                        <div className="grid-div">
                            <input 
                            type="text" 
                            aria-label="Add Ingredients"
                            placeholder="e.g. oregano"
                            name="ingredient"
                            />
                            <label>&nbsp;*Add at least 4 ingredients to generate a recipe.</label>
                        </div>
                        <button type="submit" className="addBtn">Add Ingredients</button>
                    </div>
                    
                    {A.length > 0 && <IngredientsList ref={recipeSection} ingredient={A} getRecipeFunc={getRecipe} /> }

                </form>
            </main>
            {generating && <CustomAlert/>}
            {recipe && <ClaudeRecipe recipe={recipe} />}
        </>
    );
}
