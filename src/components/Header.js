import React from 'react'
import {
  Container,
  HeaderContainer,
  BigHeading,
  HeaderDescription,
  HeaderImage,
  Link
} from '../styles'

const Header = props => {
  return (
    <HeaderContainer>
      <Container>
        <HeaderImage src='/static/img/logo-notext.png' width={120} height={120} />
        <BigHeading>{props.title}</BigHeading>
        <HeaderDescription>
          {props.description}
        </HeaderDescription>
      </Container>
    </HeaderContainer>
  )
}

export default Header
