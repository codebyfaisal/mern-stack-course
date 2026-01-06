import React from 'react'

// const Button = (props) => {
//     console.log(props)

//     const btnType = {
//         primary: "ring ring-green-500",
//         secondary: "bg-green-500 text-white"
//     }

//     return (
//         <button
//             className={`p-2 rounded-lg ${btnType[props.uiType] || btnType.primary}`}
//             onClick={props.onClick}
//         >
//             {props.value}
//         </button>
//     )
// }

const Button = ({ value, uiType, onClick }) => {
    // const primary = "ring ring-green-500"
    // const secondary = "bg-green-500 text-white"

    console.log({ value, uiType, onClick })

    const btnType = {
        primary: "ring ring-green-500",
        secondary: "bg-green-500 text-white"
    }

    return (
        <button
            // className={`p-2 rounded-lg ${uiType === 'primary' ? primary : secondary}`}>
            className={`p-2 rounded-lg ${btnType[uiType] || btnType.primary}`}
            onClick={onClick}
        >
            {value}
        </button>
    )
}

export { Button }