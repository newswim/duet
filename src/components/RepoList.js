import React, { Component } from 'react'
import GitHub from 'github-api'
import Repo from './Repo'

class RepoList extends Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  componentWillMount () {
    const gh = new GitHub()
    const repos = ['jekyll/jekyll']
    this.setState({
      repos: repos.map(repo => gh.getRepo(...repo.split('/'))),
      issues: repos.map(repo => gh.getIssues(...repo.split('/')))
    })
    console.log(this.state.repos)
  }

  render () {
    return (
      <ul>
        {this.state.repos.map((repo, i) => {
          return <Repo key={i} repo={repo} issues={this.state.issues[i]} />
        })}
      </ul>
    )
  }
}

export default RepoList
