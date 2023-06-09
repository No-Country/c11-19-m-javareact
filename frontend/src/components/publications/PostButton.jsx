import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 16px 12px;

  width: 264px;
  height: 44px;

  /* Green 3 */

  background: #99c2a2;
  /* Drop Shadow 16 */

  box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.16);
  border-radius: 30px;

  /* Inside auto layout */

  flex: none;
  order: ${({ orden }) => orden};
  flex-grow: 0;
`

const StyledButton = styled.button`
  width: 59px;
  height: 24px;

  /* Paragraph l bold */

  font-family: 'Mukta';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  /* identical to box height, or 150% */

  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: 0.38px;

  /* Text/3 */

  color: #ffffff;

  /* Inside auto layout */

  flex: none;
  order: 1;
  flex-grow: 0;
`

function PostButton({ handleClose, orden }) {
  return (
    <Container onClick={handleClose} orden={orden}>
      {/* <Link to="/supplier-profile"> */}
      <StyledButton type='submit'>Guardar</StyledButton>
      {/* </Link> */}
    </Container>
  )
}

export default PostButton
