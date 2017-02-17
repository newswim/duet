import React from 'react'
import styled from 'styled-components'

const StyledIssue = styled.div`
  border-left: 4px solid cornflowerblue;
  padding: 5px 0;
  padding-left: 10px;
`

const Issue = props => {
  return (
    <StyledIssue>
      <a href={props.html_url}>{props.title}</a>
    </StyledIssue>
  )
}

export default Issue
