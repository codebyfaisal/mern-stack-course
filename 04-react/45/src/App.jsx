// import React, { useEffect, useState } from 'react'

// const App = () => {
//   const [num, setNum] = useState(0)
//   const [color, setColor] = useState(0)
//   const [color1, setColor1] = useState(0)

//   const print = () => {
  //     alert("Hello")
  //     console.log({ num, color, color1 })
  //   }
  
// * --- Run on every render ---
//   useEffect(print)

// * --- Run only on first render or first time when page reload ---
//   useEffect(print, [])

// * --- Run only on specific render or when specific state changes ---
//   useEffect(print, [num])

//   // alert("Hello")

//   return (
//     <>
//       <div className='flex gap-4'>
//         <button onClick={() => { setNum(num + 1) }}>Add</button>
//         <button onClick={() => { setColor("#ff" + Math.floor(Math.random() * 3)) }}>Change Color</button>
//         <button onClick={() => { setColor1("#ff" + Math.floor(Math.random() * 3)) }}>Change Color1</button>
//       </div>

//       <p>{num}</p>
//       <p>{color}</p>
//       <p>{color1}</p>
//     </>
//   )
// }

// export default App


import React from 'react'
import { Toaster } from 'react-hot-toast';
import Form from './components/Form';

const App = () => {
  return (
    <>
      <Form />
      <Toaster
        position="top-right"
        reverseOrder={false}
      />
    </>
  )
}

export default App