import React, { Component } from 'react'
import Gx from 'gx'
import {
  MediumHeading,
  Small,
  Link,
  Subtext
} from '../styles'
import Issue from './Issue'

const NoIssuesPlaceholder = () => {
  return <i>Currently there are no open issues, check back later!</i>
}

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
        <Link href={this.state.details.html_url}>
          <MediumHeading>
            {this.state.details.name}
          </MediumHeading>
        </Link>
        <Small>&#9733; {this.state.details.stargazers_count}</Small>
        <Subtext>{this.props.description}</Subtext>
        <br />
        {this.state.issues.length === 0 ? <NoIssuesPlaceholder /> : null}
        {this.state.issues.map((issue, i) => {
          return <Issue key={i} {...issue} />
        })}
      </Gx>
    )
  }
}

export default Repo
