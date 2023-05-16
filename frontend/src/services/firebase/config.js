import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyDkrqtm-UTPip28etSx7lCukDAPZnXPhek',
  authDomain: 'upcircle-bc638.firebaseapp.com',
  projectId: 'upcircle-bc638',
  storageBucket: 'upcircle-bc638.appspot.com',
  messagingSenderId: '691448923868',
  appId: '1:691448923868:web:5b23b93bccf0df47bf5619',
  measurementId: 'G-Q5MW8799BN'
}

const app = initializeApp(firebaseConfig)
const auth = getAuth(app)

export { firebaseConfig, auth }
