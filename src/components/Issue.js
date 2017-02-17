import React from 'react'

const Issue = props => {
  return (
    <a href={props.html_url}>{props.title}</a>
  )
}

export default Issue
