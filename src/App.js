import React from 'react'
import RepoList from './components/RepoList'
import { Container } from './styles'
import Header from './components/Header'

const App = () => {
  return (
    <main>
      <Header />
      <Container>
        <RepoList />
      </Container>
    </main>
  )
}

export default App
