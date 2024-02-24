import React, { useContext } from 'react'

/* Import login context filen */
import { LoginContext } from '../context/LoginContext'
import { useNavigate } from 'react-router-dom'


const Login = () => {

  const { signIn, user } = useContext(LoginContext);

  const navigate = useNavigate() // så vi kan navigere væk fra siden, når noget er rettet


  //Hvis der er en user (fx. pga. netop login) -> send til admin side
  if (user) {
    navigate("/admin") // hvis det er forkert sender admin retur til login!
  }


  //Håndtere login
  const handleLogin = e => {
    e.preventDefault()

    signIn(e.target.email.value, e.target.password.value)

  }

  return (
    <>
      <section className='loginSection'>
        <div className='loginForm'>
          <h1>Login</h1>
          <form onSubmit={handleLogin} className='formular'>
            <input type="email" name="email" placeholder='Email' />
            <input type="password" name="password" placeholder='Password' />
            <button type='submit'>Login</button>
          </form>
        </div>
      </section>
    </>
  )
}

export default Login