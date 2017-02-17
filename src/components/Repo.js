import React, { Component } from 'react'
import Issue from './Issue'

class Repo extends Component {
  constructor (props) {
    super(props)
    this.state = {
      details: {},
      issues: []
    }
  }

  componentWillMount () {
    Promise.all([
      this.props.repo.getDetails(),
      this.props.issues.listIssues({ labels: 'first-timers-only', state: 'all' })
    ]).then(values => {
      this.setState({
        details: values[0].data,
        issues: values[1].data
      })
    })
  }

  render () {
    return (
      <li>
        <h2>{this.state.details.name}</h2>
        <p>stars: {this.state.details.stargazers_count}</p>
        {this.state.issues.length === 0 ? <p>No issues currently!</p> : null}
        {this.state.issues.map((issue, i) => {
          return <Issue key={i} {...issue} />
        })}
      </li>
    )
  }
}

export default Repo
