import React from 'react'
import {
  Container,
  HeaderContainer,
  BigHeading,
  HeaderDescription,
  HeaderImage
} from '../styles'

const Header = () => {
  return (
    <HeaderContainer>
      <Container>
        <HeaderImage src='/static/img/logo-notext.png' width={120} height={120} />
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
