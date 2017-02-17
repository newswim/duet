import React from 'react'
import RepoList from './components/RepoList'
import { Heading, Small, Container } from './styles'

const App = () => {
  return (
    <Container>
      <Heading big>duet <Small>accessible issue browser for jekyll</Small></Heading>
      <RepoList />
    </Container>
  )
}

export default App
