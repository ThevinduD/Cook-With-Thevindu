import ReactMarkdown from "react-markdown"

export default function ClaudeRecipe(props) {

    return (
        <div className="testPara suggested-recipe-container" aria-live="polite">
            <h2>Chef Thevindu Recommends :</h2>
            <ReactMarkdown>{props.recipe}</ReactMarkdown>   
        </div>
    )
}