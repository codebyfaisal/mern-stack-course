import React, { useState, useRef } from 'react'

// const Form = () => {
//     const [firstName, setFirstName] = useState('')
//     const [lastName, setLastName] = useState('')
//     const [email, setEmail] = useState('')
//     const [password, setPassword] = useState('')
//     const [phone, setPhone] = useState('')
//     const [country, setCountry] = useState('')
//     const [address, setAddress] = useState('')
//     const [terms, setTerms] = useState('')

//     const handleSubmit = (e) => {
//         e.preventDefault()

//         console.log({
//             firstName,
//             lastName,
//             email,
//             password,
//             phone,
//             country,
//             address,
//             terms,
//         })
//     }

//     return (
//         <form className="grid max-w-lg mx-auto gap-2" onSubmit={handleSubmit}>
//             <h1 className='text-4xl font-bold p-4 text-center'>Registration Form</h1>
//             <input type="text" id="firstName"
//                 onChange={(e) => setFirstName(e.target.value)} />

//             <input type="text" id="lastName"
//                 onChange={(e) => setLastName(e.target.value)} />

//             <input type="email" id="email"
//                 onChange={(e) => setEmail(e.target.value)} />

//             <input type="password" id="password"
//                 onChange={(e) => setPassword(e.target.value)} />

//             <input type="tel" id="phone"
//                 onChange={(e) => setPhone(e.target.value)} />

//             <textarea id="address"
//                 onChange={(e) => setAddress(e.target.value)}></textarea>
//             <select id="country"
//                 onChange={(e) => setCountry(e.target.value)}>

//                 <option value="" selected>Select your Country</option>
//                 <option value="pakistan">Pakistan</option>
//                 <option value="india" >India</option>
//                 <option value="bangladesh">Bangladesh</option>
//             </select>

//             <label htmlFor="terms" className='flex items-center gap-1'>
//                 <input type="checkbox" id='terms'
//                     onChange={(e) => setTerms(e.target.checked)} />
//                 Accept the conditions!
//             </label>

//             <button type="submit">Submit</button>
//         </form>
//     )
// }

const initialForm = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    phone: "",
    country: "",
    address: "",
    terms: "",
}

const Form = () => {
    const [formData, setFormData] = useState(initialForm)

    console.log(formData)

    const handleChange = (e) => {
        // console.log(e.target.value)
        // console.log(e.target.name)

        const name = e.target.name

        // if (name !== 'terms') {
        //     setFormData({ ...formData, name: e.target.value })
        // } else {
        //     setFormData({ ...formData, name: e.target.checked })
        // }

        setFormData({
            ...formData,
            name: name === 'terms'
                ? e.target.checked
                : e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(formData)
    }

    return (
        <form
            className="grid max-w-lg mx-auto gap-2"
            onSubmit={handleSubmit}
        >
            <h1 className='text-4xl font-bold p-4 text-center'>Registration Form</h1>
            <input type="text" name="firstName" id="firstName"
                onChange={handleChange} />

            <input type="text" name="lastName" id="lastName"
                onChange={handleChange} />

            <input type="email" name="email" id="email"
                onChange={handleChange} />

            <input type="password" name="password" id="password"
                onChange={handleChange} />

            <input type="tel" name="phone" id="phone"
                onChange={handleChange} />

            <textarea name="address" id="address"
                onChange={handleChange}></textarea>
            <select name="country" id="country"
                onChange={handleChange}>

                <option value="" selected>Select your Country</option>
                <option value="pakistan">Pakistan</option>
                <option value="india" >India</option>
                <option value="bangladesh">Bangladesh</option>
            </select>

            <label htmlFor="terms" className='flex items-center gap-1'>
                <input type="checkbox" name='terms' id='terms'
                    onChange={handleChange} />
                Accept the conditions!
            </label>

            <button type="submit">Submit</button>
        </form>
    )
}

export default Form