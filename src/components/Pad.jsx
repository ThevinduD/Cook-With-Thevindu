import React from "react"

export default function Pad(props) {

    return (
        <>
            <button 
                onClick={() => props.toggle(props.id)}
                className={props.on ? "padBtn on" : "padBtn"} 
                style={{backgroundColor:props.color}}
                > 
                {props.id}
            </button>
        </>
        
    )
}