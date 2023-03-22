import React, { useState } from 'react'
import {MemoizedChild} from './Child';
// import { Child } from './Child'

 const Parent = () => {
    const [count, setcount] = useState(0);
    const [color, setcolor] = useState('Black');
    console.log("Parent rendered!");
  return (
    <div>Parent
        {count}
        <button onClick={()=> setcount(prevCount => prevCount+1)}>Increment</button>
        <button onClick={()=> setcolor("White")}>Change Color</button>
        <MemoizedChild color={color}/>
    </div>
  )
}
export default Parent;
