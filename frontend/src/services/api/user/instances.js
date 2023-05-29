import axios from 'axios';

const login = axios.create({
  baseURL: 'https://c11-19-m-javareact-production.up.railway.app/api/auth/login'
})

const registerEcosupplier = axios.create({
  baseURL: 'https://c11-19-m-javareact-production.up.railway.app/api/auth/registerEcoproveedor'
})

const registerEcoCreator = axios.create({
  baseURL: 'https://c11-19-m-javareact-production.up.railway.app/api/auth/registerEcocreador'
})

export { login, registerEcosupplier, registerEcoCreator }
