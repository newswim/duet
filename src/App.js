import React from 'react'
import RepoList from './components/RepoList'
import { Container } from './styles'
import Header from './components/Header'

const App = () => {
  return (
    <Container>
      <Header />
      <RepoList />
    </Container>
  )
}

export default App
