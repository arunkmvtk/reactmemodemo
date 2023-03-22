import React from 'react'

 const Child = ({color}) => {
    console.log("Child rendered!");
  return (
    <div>Child color is {color}</div>
  )
}
export default Child
export const MemoizedChild = React.memo(Child)