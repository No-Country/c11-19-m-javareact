import { useContext } from 'react'
import { UserContext } from '../../context/user/UserContext'

const useAuth = () => {
  const context = useContext(UserContext)
  return context
}

export { useAuth }
