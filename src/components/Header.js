import React from 'react'
import { Container, HeaderContainer, BigHeading } from '../styles'

const Header = () => {
  return (
    <HeaderContainer>
      <Container>
        <BigHeading>Welcome to duet!</BigHeading>
        <p>
          duet is a tool that helps newcomers to open-source find
          their first contribution to Jekyll.
        </p>
      </Container>
    </HeaderContainer>
  )
}

export default Header
