import { useContext } from 'react'
import { LoginContext } from '../context/LoginContext'

const LogoutBtn = () => {

  const { signOut } = useContext(LoginContext)

  return (
    <button onClick={signOut} className='btn btn-loguot'>
      Log out
    </button>
  )
}

export default LogoutBtn