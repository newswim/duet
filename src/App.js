import React from 'react'
import RepoList from './components/RepoList'
import { BigHeading, Small, Container } from './styles'

const App = () => {
  return (
    <Container>
      <BigHeading>
        duet
        <Small>accessible issue browser for jekyll</Small>
      </BigHeading>
      <RepoList />
    </Container>
  )
}

export default App
