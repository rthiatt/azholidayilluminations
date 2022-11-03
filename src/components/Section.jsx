import React from 'react'
import styled from 'styled-components'
import Text from './Text'

const OuterDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;

    scroll-margin-top: 10vw;
    
`

const StyledSection = styled.div`
    margin-top: 3.5vh;
    text-align: center;
    box-shadow: 0px 0px 20px 0px #00000053;
    border-radius: 15px;
    padding: 3vw;
    padding-bottom: 4vw;
    width: 75%;

    background-color: #e2e2e21f;
    z-index: 1000;

    @media (max-width: 500px) {
        width: 85%;
        margin-top: 1vh;
    }
`

const StyledHeader = styled.h1`
    font-size: 2vw;
    @media (max-width: 500px) {
     font-size: 4vw;
    }
`

// Making the Holidays Brighter

const Section = React.forwardRef((props, ref) => (
  <OuterDiv ref={ref}>
    <StyledSection title={""}>
        <StyledHeader>{props.title}</StyledHeader>
        <Text>{props.children}</Text>
    </StyledSection>
</OuterDiv>
))

export default Section
