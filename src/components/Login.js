import React, { useState } from 'react'
import axios from 'axios'

export default function Login(props) {
  const [values, setValues] = useState({username: "", password: ""})


  const handleChange = event => {
    const {name, value} = event.target
    setValues({...values, [name]: value})
  }

  const handleSubmit = event => {
    event.preventDefault()
    axios.post("https://lambdamud-crawler.herokuapp.com/api/auth/login/", values)
      .then(res => {
        localStorage.setItem('token', res.data.key)
        props.history.push('/game')
      }).catch(err => console.log(err))
  }

  return (
    <div>
      <p>Login Page</p>
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
      </form>
      <button type="submit" onClick={handleSubmit}>
        Submit
      </button>
    </div>
  )
}
