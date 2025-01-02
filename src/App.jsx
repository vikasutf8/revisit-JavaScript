import { useEffect, useMemo, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
// it run at least once on mounting time..
  // useEffect(()=>{
  //   //that code we want to run
  //   console.log("this is count ",count);

  //   //optional return function
  //   return ()=>{
  //     console.log("I am being cleaned up!!")
  //   }
  // },[
  //   //what it should listen to,so that it run code
  //   count
  // ])
  const items =1
  const selecteditem = useMemo(()=>(items.find((item)=> item.isSelected)),[items])
  return (
  <>
    <div>
      <h1>Count : {count} </h1>
      <button onClick={()=> setCount(count+1)}>incremant</button>
      <button onClick={()=>setCount(count-1)}>decrement</button>

    </div>
  </>
  )
}

export default App
