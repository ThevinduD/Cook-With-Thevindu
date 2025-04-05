import Header from "./components/Header"
import Body from "./components/Body" 
import Contact from "./components/Contact"
import Array from "./components/Array"
import FormTest from "./components/Forms"
import joke from "./components/joke"
import Jokes from "./components/Jokes"
import Count from "./components/Count"
import Inbox from "./components/Inbox"
import React from "react"
import padsData from "./components/pads"
import Pad from "./components/Pad"
import Body2 from "./components/Body2"
import Header2 from "./components/Header2"
import RefCheck from "./components/RefCheck"


export default function App() {

    // const jokeElements = joke.map((A) => {
    //   return (
    //       <Jokes 
    //         topic={A.topic}
    //         punchline={A.punchline}
    //       />
    //   )
    // })

    // const [userName, setUserName] = React.useState("Joe")

    // const [pads, setPads] = React.useState(padsData)

    // const Element = pads.map((x) => <Pad toggle={toggle} key={x.id} id={x.id} color={x.color} on={x.on} />)

    // function toggle(id) {
    //    setPads(prev => prev.map((x) => {
    //        return x.id === id ? {...x, on: !x.on} : x
    //    }))
    // } 

    // function turnOff() {
    //    setPads(prev => prev.map((x) => {
    //        return {...x, on: false}
    //    }))
    // }

    // function turnOn() {
    //   setPads(prev => prev.map((x) => {
    //       return {...x, on: true}
    //   }))
    // }



  return ( 
    <>
      <Header />
      <Body />
      {/* <Array /> */}
      {/* <Contact /> */}
      {/* <FormTest /> */}
      {/* {jokeElements} */}
      {/* <Inbox /> */}
      {/* <Count  /> */}
      {/* <Header2 name={userName} />
      <Body2 name={userName} /> */}

      {/* <main style={{backgroundColor:"black"}}>
        <div>
            {Element}
            <button onClick={turnOff}>Turn Off All</button>
            <button onClick={turnOn}>Turn On All</button>
        </div>
      </main> */}
      {/* <RefCheck /> */}

    </>    
  )
}