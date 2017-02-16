import React from 'react'
import Issue from './Issue'

const Repo = props => {
  return (
    <li>
      <h2>{props.name}</h2>
      <p>{props.description}</p>
      {console.log(props.issues)}
      {props.issues.length === 0 ? <p>No issues currently!</p> : null}
      {props.issues.map((issue, i) => {
        return <Issue key={i} {...issue} />
      })}
    </li>
  )
}

export default Repo
