import React, { useEffect, useRef, useState } from 'react'
import toast from 'react-hot-toast'

const Form = () => {
    const [name, setName] = useState('guest')
    const [email, setEmail] = useState('')
    const [accept, setAccept] = useState(false)
    const input = useRef(null)

    useEffect(() => {
        console.log(input.current)
    })

    // name.addEventListener('change', (e)=>{})

    const handleSubmit = (e) => {
        e.preventDefault()

        if (!name || name === "" || name === " ")
            toast.error("Please enter valid name")

        if (!email || email === "" || email === " ")
            toast.error("Please enter valid email")

        if (!accept) toast.error("Please first accept the Rules")

        console.log({ e, name, email, accept })
        // alert("Abdullah alert run ko")
    }

    return (
        <form
            onSubmit={handleSubmit}
            className='p-6 grid max-w-md gap-2'
        >
            <input type="text"
                className='ring ring-indigo-300 p-2'
                onChange={(e) => {
                    setName(e.target.value)
                }}
                placeholder="Faisal"
                value={name}
                ref={input}
            />

            <input type="email"
                className='ring ring-indigo-300 p-2'
                onChange={(e) => {
                    setEmail(e.target.value)
                }}
                placeholder="faisal@gmail.com"
                value={email}
            />

            <label htmlFor='accept'>
                <input type="checkbox"
                    className='p-2'
                    onChange={(e) => {
                        setAccept(e.target.checked)
                    }}
                    id='accept'
                    checked={accept}
                />
                Accept this rules !
            </label>

            <br />
            <div className="flex gap-4">
                <button type="button" className='ring ring-indigo-300 p-2 font-bold text-indigo-300 cursor-pointer'>
                    Go home
                </button>
                <button type="submit" className='bg-indigo-300 p-2 text-white font-bold cursor-pointer'>
                    Send
                </button>
            </div>
        </form>
    )
}

export default Form