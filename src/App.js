import React from 'react'
import styled from 'styled-components'
import RepoList from './components/RepoList'

const Container = styled.div`
  font-family: sans-serif;
  margin: 20px 20vw;
`

const Heading = styled.h1`
  font-size: 24px;
`

const Small = styled.span`
  font-size: 16px;
  font-weight: normal;
`

const App = () => {
  return (
    <Container>
      <Heading>duet <Small>accessible issue browser for jekyll</Small></Heading>
      <RepoList />
    </Container>
  )
}

export default App
