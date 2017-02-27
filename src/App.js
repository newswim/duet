import React from 'react'
import RepoList from './components/RepoList'
import { Container } from './styles'
import Header from './components/Header'
import config from '../config.json'

const App = () => {
  return (
    <main>
      <Header title={config.title} description={config.description} />
      <Container>
        <RepoList repos={config.repos} labels={config.labels} />
      </Container>
    </main>
  )
}

export default App
