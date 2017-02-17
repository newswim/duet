import React from 'react'
import {
  Container,
  HeaderContainer,
  BigHeading,
  HeaderDescription
} from '../styles'

const Header = () => {
  return (
    <HeaderContainer>
      <Container>
        <BigHeading>Welcome to duet!</BigHeading>
        <HeaderDescription>
          duet is a tool that helps newcomers to open-source find
          their first contribution to Jekyll, and to help maintainers
          keep an overview.
        </HeaderDescription>
      </Container>
    </HeaderContainer>
  )
}

export default Header
