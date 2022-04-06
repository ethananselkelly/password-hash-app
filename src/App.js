import { useState } from "react";
import axios from 'axios'

const App = () => {
  const [username, setUsername] = useState(null)
  const [password, setPassword] = useState(null)
  const [confirmPassword, setConfirmPassword] = useState(null)
  const [error, setError] = useState(null)

  
  const handleSubmit = (event) => {
    event.preventDefault()
    if (password !== confirmPassword) {
      setError('**make sure passwords match!**')
      return
    }
    
    axios.post('/signup', {
      username,
      password
    })

    console.log('username',username)
    console.log('password',password)
    console.log('confirmPassword',confirmPassword)
    setError(null)
  }
  return (
    <form onSubmit={handleSubmit}>
      <input
        type='text'
        id='username'
        name='username'
        placeholder='username'
        required
        onChange={(event) => setUsername(event.target.value)}
      />
      <input
        type='text'
        id='password'
        name='password'
        placeholder='password'
        required
        onChange={(event) => setPassword(event.target.value)}
      />
      <input
        type='text'
        id='password-check'
        name='password-check'
        placeholder='confirm password'
        required
        onChange={(event) => setConfirmPassword(event.target.value)}
      />
      <input type='submit'/>
      <p>{error}</p>
    </form>
  );
}

export default App;
