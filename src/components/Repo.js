import React, { Component } from 'react'
import Gx from 'gx'
import { Heading, Small } from '../styles'
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
      this.props.issues.listIssues({ labels: 'first-timers-only' })
    ]).then(values => {
      this.setState({
        details: values[0].data,
        issues: values[1].data
      })
    })
  }

  render () {
    return (
      <Gx col={6}>
        <Heading>
          {this.state.details.name}
          <Small>&#9733; {this.state.details.stargazers_count}</Small>
        </Heading>
        {this.state.issues.length === 0 ? <p>No issues currently!</p> : null}
        {this.state.issues.map((issue, i) => {
          return <Issue key={i} {...issue} />
        })}
      </Gx>
    )
  }
}

export default Repo
