import styled from 'styled-components'

export const HeaderContainer = styled.div`
  background-color: whitesmoke;
  padding: 10px 20px;
`

export const HeaderDescription = styled.p`
  width: 70%;
  line-height: 27px;
  font-size: 18px;

  @media (max-width: 420px) {
    width: 100%;
  }
`

export const HeaderImage = styled.img`
  float: right;
  max-width: 100%;
  max-height: 120px;
  margin-left: 2rem;

  @media (max-width: 420px) {
    max-height: 30px;
    max-width: 30px;
  }
`
