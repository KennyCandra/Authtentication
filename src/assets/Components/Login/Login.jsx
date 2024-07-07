import { useEffect, useState } from 'react'
import useAccountStore from '../../Zustand/AccountsStore'
import './Login.css'
import { useNavigate } from 'react-router-dom'

function Login() {

    const { accounts, login } = useAccountStore()
    const [focused , setFocused] = useState(false)
    const navigate = useNavigate()
    const [values , setValues] = useState({
        username : '',
        Password : '',
    })

    const inputs = [
        {
            id: 1,
            name: 'username',
            type: 'text',
            placeholder : 'Your Username',
            label : 'Username',
            pattern : '^[A-Za-z0-9]{3,16}$',
            required : true,
            value : values.username
        },
        {
            id: 2,
            name: "Password",
            type: "password",
            placeholder: "Password",
            label: "Password",
            required: true,
            value: values.Password
        }
    ]

    const handleChange = (event) => {
        setValues((prev) => {
            return {...prev, [event.target.name] : event.target.value}
        })}

    const handleSubmit = (event) => {
        event.preventDefault()
        const foundAccount = accounts.find((account) => {
            if (account.username === values.username) {
                if (account.Password === values.Password) {
                    login(account.username)
                    navigate('/' , {replace : true})
                    return true
                } else {
                    alert(account.username + ' ' + ' Incorrect Password!')
                }
            }
            return false
        })
    
        if (!foundAccount) {
            alert('Not found')
        }
    }

    const handleBlur = () => {
        setFocused(true)
    }


  return (
    <div className='form'>
        <form onSubmit={handleSubmit}>
            <h1>Login</h1>
            <div className='container'>
                {inputs.map((input) => (
                    <div className='inputs' key={input.id}>
                        <label>{input.label}</label>
                        <input {...input} onChange={handleChange} onBlur={handleBlur} focused={focused.toString()} />
                        <span>{input.errorMessage}</span>
                    </div>
                ))}
            </div>
                <button type="submit">Login</button>
        </form>
    </div>
  )
}

export default Login


