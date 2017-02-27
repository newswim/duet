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
    this.setState({
      repos: this.props.repos.map(repo => gh.getRepo(...repo.path.split('/'))),
      issues: this.props.repos.map(repo => gh.getIssues(...repo.path.split('/')))
    })
  }

  render () {
    const columnWidth = this.props.repos.length === 1 ? 12 : 6

    return (
      <div>
        {this.state.repos.map((repo, i) => {
          return (
            <Repo
              key={i}
              repo={repo}
              issues={this.state.issues[i]}
              description={this.props.repos[i].description}
              columnWidth={columnWidth}
              labels={this.props.labels}
            />
          )
        })}
      </div>
    )
  }
}

export default RepoList
