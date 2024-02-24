import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { LoginContext } from '../context/LoginContext'
import LogoutBtn from '../components/LogoutBtn'

const Header = () => {

  const { user } = useContext(LoginContext);

  const mynav = [
    {
      "title": "Home",
      "to": "/"
    },
    {
      "title": "Contact",
      "to": "#"
    },
  ]



  return (
    <header className='header'>
      <div>
        <h2>Logo</h2>
      </div>
      <nav className='headerNav'>
        <ul>
          {mynav.map((item, index) => (
            <li key={index}>
              <Link to={item.to}>
                {item.title}
              </Link>
            </li>
          ))}
          <li>
            {user ? <Link to={'/admin'}>Admin</Link> : ''}
          </li>
          <li>
            {user ? <LogoutBtn /> : <Link to={'/login'}>Login</Link>}
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header