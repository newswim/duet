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
    const repos = [
      'jekyll/jekyll',
      'jekyll/plugins',
      'jekyll/jekyll-admin',
      'jekyll/minima'
    ]
    this.setState({
      repos: repos.map(repo => gh.getRepo(...repo.split('/'))),
      issues: repos.map(repo => gh.getIssues(...repo.split('/')))
    })
    console.log(this.state.repos)
  }

  render () {
    return (
      <div>
        {this.state.repos.map((repo, i) => {
          return (
            <Repo key={i} repo={repo} issues={this.state.issues[i]} />
          )
        })}
      </div>
    )
  }
}

export default RepoList
