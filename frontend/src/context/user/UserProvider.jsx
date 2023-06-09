import { useState, useEffect } from 'react'
import { UserContext } from './UserContext'
import { auth } from '../../services/firebase/config'
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth'

const UserProvider = ({ children }) => {
  const [user, updateUser] = useState(false)
  const [userInfo, setUserInfo] = useState(null)

  useEffect(() => {
    const onSubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log('existe un usuario')
        updateUser(user)
      } else {
        console.log('no existe')
        updateUser(null)
      }
    })

    return () => onSubscribe()
  }, [])

  const signUp = ({ email, password }) => {
    return createUserWithEmailAndPassword(auth, email, password)
  }

  const signIn = ({ email, password }) => {
    return signInWithEmailAndPassword(auth, email, password)
  }

  const signInWithGoogle = () => {
    const provider = new GoogleAuthProvider()
    return signInWithPopup(auth, provider)
  }

  const signOutUser = () => {
    return signOut(auth)
  }

  const updateUserInfo = (info) => {
    return setUserInfo(info)
  }

  const data = {
    user,
    signIn,
    signUp,
    signInWithGoogle,
    signOutUser,
    updateUserInfo,
    userInfo
  }

  return <UserContext.Provider value={data}>{children}</UserContext.Provider>
}

export { UserProvider }
