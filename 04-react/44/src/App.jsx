import React, { useState } from 'react'

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

function App() {
  return (
    <div>
      <h1 className="text-3xl font-bold underline animate-pulse">
        Hello world!
      </h1>
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
