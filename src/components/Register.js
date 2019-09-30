import React, { useState } from 'react'
import axios from 'axios'

export default function Register(props) {
  const [values, setValues] = useState({username: "", password1: "", password2: ""})

  const handleChange = event => {
    const {name, value} = event.target
    setValues({...values, [name]: value})
  }

  const handleSubmit = event => {
    event.preventDefault()
    axios.post("https://lambdamud-crawler.herokuapp.com/api/auth/register/", values)
      .then(res => {
        console.log("success", res)
        localStorage.setItem('token', res.data.key)
        props.history.push('/map')
      }).catch(err => console.log("what the f?", err))
  }

  return (
    <div>
      {/* <p>Register Page</p> */}
      <form>
        <input
          name="username"
          type="text"
          placeholder="username"
          onChange={handleChange}
          value={values.username}
          className="inputField"

         />
         <input
          name="password1"
          type="password"
          placeholder="password"
          onChange={handleChange}
          className="inputField"
          value={values.password1}
         />
         <input 
          name="password2"
          type="password"
          placeholder="confirm password"
          onChange={handleChange}
          value={values.password2}
          className="inputField"

         />
      </form>
      <button type="submit" onClick={handleSubmit} className="navButton">
        Submit
      </button>
    </div>
  )
}
