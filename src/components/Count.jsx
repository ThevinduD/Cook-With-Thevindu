import React from "react"

export default function Count() {
    
    const [count,setCount] = React.useState(0)

    function add() {
        setCount(prev => prev + 1)
    }
   
    function minus() {
        setCount(prev => prev - 1)
    }
   
    return (
        <>
            <button onClick={add}>+</button>
            <h2>{count}</h2>
            <button onClick={minus}>-</button>   
        </>
        
    )
}