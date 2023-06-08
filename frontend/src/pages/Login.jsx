import styled from 'styled-components'
import { Layout } from '../routes/Layout'
import { FormLogin } from '../components/FormLogin'

const LoginContainer = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const Login = () => {
  return (
    <Layout>
      <LoginContainer>
        <FormLogin />
      </LoginContainer>
    </Layout>
  )
}

export { Login }
