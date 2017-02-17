import styled from 'styled-components'

export const Container = styled.div`
  font-family: sans-serif;
  margin: 20px 20vw;

  @media (max-width: 420px) {
    margin: 20px 5vw;
  }
`

export const Link = styled.a`
  text-decoration: none;
  color: #3F51B5;
`

export const BorderLink = styled(Link)`
  border-left: 5px solid cornflowerblue;
  padding: 10px 0;
  padding-left: 10px;
  width: 100%;
  display: block;

  &:hover {
    background: whitesmoke;
  }
`
