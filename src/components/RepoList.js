import React, { Component } from 'react'
import Repo from './Repo'

class RepoList extends Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  componentWillMount () {
    this.setState({repos: [
      {
        'name': 'jekyll',
        'description': 'blah',
        'issues': [
          { 'id': 1, 'label': 'first-timers-only', 'title': 'im cool' }
        ]
      }
    ]})
  }

  render () {
    return (
      <ul>
        {this.state.repos.map((repo, i) => {
          return <Repo key={i} {...repo} />
        })}
      </ul>
    )
  }
}

export default RepoList
