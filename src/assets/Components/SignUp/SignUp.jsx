import {  useEffect, useState } from 'react'
import useAccountStore from '../../Zustand/AccountsStore'
import './SignUp.css'
import { useNavigate } from 'react-router-dom'
function SignUp() {

    const initialState = {
        Password : '',
        username : ''
    }

    const addAccount = useAccountStore()
    const [focused , setFocused] = useState(false)
    const [values , setValues] = useState(initialState)
    const Navigate = useNavigate()

    const inputs = [
        {
            id: 1,
            name: 'username',
            type: 'text',
            placeholder : 'Your Username',
            errorMessage : 'Username should be 3-16 characters and shouldn\'t include any special character!',
            label : 'Username',
            required : true,
            value : values.username
        },
        {
            id: 2,
            name: "Password",
            type: "password",
            placeholder: "Password",
            errorMessage: "Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!",
            label: "Password",
            required: true,
            value: values.Password
        },
    ]

    const handleChange = (event) => {
        setValues((prev) => {
            return {...prev, [event.target.name] : event.target.value}
        })}

    const handleSubmit = (event) => {
        event.preventDefault()
        console.log(values)
        addAccount.addAccount(values)
        console.log(addAccount.accounts)
        setValues(initialState)
        Navigate('/' , {replace : true})
    }


    const handleBlur = () => {
        setFocused(true)
    }


  return (
    <div className='form'>
        <form onSubmit={handleSubmit}>
            <h1>Sign Up</h1>
            <div className='container'>
                {inputs.map((input) => (
                    <div className='inputs' key={input.id}>
                        <label>{input.label}</label>
                        <input {...input} onChange={handleChange} onBlur={handleBlur} focused={focused.toString()} />
                        <span>{input.errorMessage}</span>
                    </div>
                ))}
            </div>
                <button type="submit">Sign Up</button>
        </form>
    </div>
  )
}

export default SignUp
