import React from "react";

export default function Jokes(props) { 
    const [isShown, setIsShown] = React.useState(false);

    function toggle() {
        setIsShown(prev => !prev);
        console.log(isShown);
    }

    return (
        <>
           <section>
                {props.topic && <h1>{props.topic}</h1>}
                {isShown ? <p>{props.punchline}</p> : null}
           </section>
           
           <button onClick={toggle}> {isShown ? "Hide" : "Click"} Me</button>
        </> 
    )
}