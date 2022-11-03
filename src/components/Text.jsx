import React from 'react'
import styled from 'styled-components'

const StyledText = styled.div`
    font-size: 2em;

    @media (max-width: 500px) {
     font-size: 0.75em;
    }
`

function Text(props) {
  return (
    <StyledText>{props.children}</StyledText>
  )
}

export default Text