import './App.css'
import {useState} from "react";

function App() {

    const [count, setCount] = useState<number>(0)

    function increaseCount(){
        setCount(count+1)
        console.log(count)
    }

    function ifComp(){
        if(count % 2 === 0){
           return <h2>Even</h2>
        }else{
           return <h2>Odd</h2>
        }
    }
  return (
    <>
        <h1>{count}</h1>
        {count % 2 === 0 ? <h2>Even</h2> : <h2>Odd</h2> }
        {count % 2 === 0 && <h2>Even</h2>}
        {ifComp()}
      <button onClick={increaseCount}>Click me!</button>
    </>
  )
}

export default App
