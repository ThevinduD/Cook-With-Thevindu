export default function IngredientsList(props) {

    const ingredientList = props.ingredient.map((x, index) => <li key={index}>{x}</li>)

    return (
        <section className="ingSection">
            <h2>Ingredients on hand : </h2>
            <ul> {ingredientList} </ul>
            {props.ingredient.length > 3 && 
                <div className="boxRecipe" >
                    <div ref={props.ref}>
                        <h3>Ready for a recipe?</h3>
                        <p>Generate a recipe from your list of ingredients</p>
                    </div>
                    <button id="recipeBtn" onClick={props.getRecipeFunc} className="recipeBtn">Get a recipe </button>
                </div> 
            }   
        </section>
    )
}