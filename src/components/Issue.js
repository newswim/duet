import React from 'react'
import { BorderLink } from '../styles'

const Issue = props => {
  return (
    <BorderLink href={props.html_url}>{props.title}</BorderLink>
  )
}

export default Issue
