import React, { useState } from 'react'
import { Button } from './components/Button'
import Card from './components/Card'

// * === === useState Code === ===
// function App() {
//   let [counter, setCounter] = useState(0)

//   // const [a, b] = useState = {
//   //   a,
//   //   b(i) {
//   //     this.b = i
//   //   }
//   // }

//   // a
//   // b(45)

//   return <div className='app'>
//     <b>This is counter {counter}</b> <br />
//     <b>This is counter {counter}</b> <br />
//     <b>This is counter {counter}</b> <br />
//     <b>This is counter {counter}</b> <br />
//     <b style={{ color: 'blue', fontSize: '23px' }}>This is counter {counter}</b> <br />
//     <b>This is counter {counter}</b> <br />
//     <br />
//     <button
//       onClick={() => {
//         setCounter(++counter)
//       }}
//     >
//       Clicked
//     </button>
//     <button
//       onClick={() => {
//         setCounter(counter + 2)
//       }}
//     >
//       Clicked
//     </button>

//     <h1 class="text-3xl font-bold underline">
//       Hello world!
//     </h1>
//   </div>
// }

// * --- Tailwind CSS ---
function App() {
  return (
    <div>
      <h1 className="text-3xl font-bold underline animate-pulse">
        Hello world!
      </h1>

      {/* === === Buttons Code === === */}

      {/* <button className='p-2 ring ring-blue-500 rounded-lg'>
        Clicked
      </button>
      <button className='p-2 ring ring-blue-500 rounded-lg'>
        Clicked
      </button>
      <button className='p-2 ring ring-blue-500 rounded-lg'>
        Clicked
      </button> */}

      <Button
        value={"Click"}
        uiType={"secondary"}
        onClick={() => { alert("Clicked") }}
      />
      {/* Button({value:"Click", uiType:"primary"}) */}
      <Button value={"Go back"} onClick={() => { alert("Clicked on 2nd") }} />
      <Button value={"Go Home"} />
      {/* <Button />
      <Button />
      <Button />
      <Button /> */}

      {/* === === Cards Code === === */}
      <div className="grid grid-cols-4 gap-2 px-4">
        <Card
          src={"https://plus.unsplash.com/premium_photo-1736816227895-e0653ceb1f0e?q=80&w=775"}
          title={"Amazon Product"}
          desc={"This is card description"}
        />
        <Card
          src={"https://plus.unsplash.com/premium_photo-1736816227895-e0653ceb1f0e?q=80&w=775"}
          title={"Amazon Product"}
          desc={"This is card description"}
        />
        <Card
          src={"https://plus.unsplash.com/premium_photo-1736816227895-e0653ceb1f0e?q=80&w=775"}
          title={"Amazon Product"}
          desc={"This is card description"}
        />
        <Card
          src={"https://plus.unsplash.com/premium_photo-1736816227895-e0653ceb1f0e?q=80&w=775"}
          title={"Amazon Product"}
          desc={"This is card description"}
        />
      </div>
    </div>
  )
}

function My1() {
  return 12341
}
function My2() {
  return 12342
}

export { My1, My2 }

export default App
