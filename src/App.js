import React from 'react'
import RepoList from './components/RepoList'
import { Container } from './styles'
import Header from './components/Header'
import repos from '../repos.json'

const App = () => {
  return (
    <main>
      <Header />
      <Container>
        <RepoList repos={repos} />
      </Container>
    </main>
  )
}

export default App
