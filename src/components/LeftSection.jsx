import React from 'react'
import styled from 'styled-components'
import Text from './Text'

const OuterDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
`

const StyledSection = styled.div`
    margin-top: 3.5vh;
    text-align: start;
    box-shadow: 0px 0px 10px 0px #00000028;
    border-radius: 15px;
    padding: 3vw;
    width: fit-content;
`

const StyledHeader = styled.h1`
    font-size: 2.5em;
    @media (max-width: 500px) {
     font-size: 1em;
    }
`

// Making the Holidays Brighter

function LeftSection(props) {
  return (
    <OuterDiv>
        <StyledSection title={""}>
            <StyledHeader>{props.title}</StyledHeader>
            <Text>{props.children}</Text>
        </StyledSection>
    </OuterDiv>
  )
}

export default LeftSection