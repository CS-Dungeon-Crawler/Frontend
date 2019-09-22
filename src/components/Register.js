import React, { useState } from 'react'
import axios from 'axios'

export default function Register() {
  const [values, setValues] = useState({username: "", password: "", confirmpassword: ""})

  const handleChange = event => {
    const {name, value} = event.target
    setValues({...value, [name]: value})
  }

  const handleSubmit = event => {
    event.preventDefault()
    axios.post("https://lambda-mud-test.herokuapp.com/api/registration/", values)
      .then(res => {
        console.log(res)
      }).catch(err => console.log(err))
  }

  return (
    <div>
      <p>Register Page</p>
      <form>
        <input
          name="username"
          type="text"
          placeholder="username"
          onChange={handleChange}
          value={values.username}
         />
         <input
          name="password"
          type="password"
          placeholder="password"
          onChange={handleChange}
          value={values.password}
         />
         <input 
          name="confirmpassword"
          type="password"
          placeholder="confirm password"
          onChange={handleChange}
          value={values.confirmpassword}
         />
      </form>
      <button type="submit" onClick={handleSubmit}>
        Submit
      </button>
    </div>
  )
}
