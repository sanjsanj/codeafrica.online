import styled from 'styled-components'

export const StyledSection = styled.section`
  background-color: ${props => props.theme.codeGrey};
  color: ${props => props.theme.textColour};
  padding: 20px;

  li {
    display: inline-block;
    max-width: 200px;
    width: 30%;
  }
`
