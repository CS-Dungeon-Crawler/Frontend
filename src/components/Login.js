import React, {useState} from 'react'

export default function Login() {
  const [values, setValues] = useState({username: "", password: ""})

  const handleChange = event => {
    const {name, value} = event.target
    setValues({...value, [name]: value})
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
      </form>
      <button type="submit" onClick="handleSubmit">
        Submit
      </button>
    </div>
  )
}
