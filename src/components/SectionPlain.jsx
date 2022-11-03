import React from 'react'
import styled from 'styled-components'
import { Ornament } from '..'

const StyledHeader = styled.h1`
    font-size: 2vw;
    @media (max-width: 500px) {
     font-size: 4vw;
    }
    margin-top: 6vw;
`

const ListItem = styled.div`
    font-size: 1.5vw;
    text-align: center;
    font-weight: 600;

    @media (max-width: 500px) {
     font-size: 2vw;
     line-break: strict; 
    }
`

const OuterDiv = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-bottom: 4vw;
    padding: 2vw;

    position: relative;
    z-index: 1000;
`

const Image = styled.img`
    height: 4vw;
    margin-left: 3vw;
`

function SectionPlain(props) {
  return (
    <>
    <StyledHeader>{props.title}</StyledHeader>
    <OuterDiv title="What We Offer">
        <Image src={Ornament} alt="" />
        <ListItem>Tree Wrapping</ListItem>
        <Image src={Ornament} alt="" />
        <ListItem>Shrub Decorating</ListItem>
        <Image src={Ornament} alt="" />
        <ListItem>House Trim</ListItem>
        <Image src={Ornament} alt="" />
        <ListItem>Live Tree Delivery and Set Up</ListItem>
    </OuterDiv>
    </>
  )
}

export default SectionPlain