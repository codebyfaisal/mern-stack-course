import { useState } from "react"

const Btn = () => {
    const [clicked, setClicked] = useState()

    const ftn = () => {
        setClicked(!clicked)
        console.log("Clicked on button")
    }
    return (
        <>
            <button type='button' onClick={ftn}>Btn</button>
            {
                clicked && (<h1>You Clicked on button</h1>)
            }
        </>
    )
}

export default Btn