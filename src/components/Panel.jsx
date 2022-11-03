import React from 'react'
import styled from 'styled-components'
import { TakeDown, Repair, Request } from "../index.js";
import { Link } from "react-router-dom";

const StyledPanel = styled(Link)`
    border-radius: 10px;
    border: 1px solid #0202021a;
    padding: 5vw;
    margin: 2vw;
    box-shadow: 0px 10px 10px 0px #00000028;
    background-color: #f1f1f176;
    cursor: pointer;
    color: white;
    text-decoration: none;

    &:hover {
        background-color: #f1f1f147;
    }

    @media (max-width: 500px) {
        padding: 5vw;
    }
`

const Image = styled.img`
    height: 10vw;
    filter: drop-shadow(0px 0px 10px #00000073);
    @media (max-width: 500px) {
        height: 15vw;
    }
`

const Title = styled.h1`
    font-size: 3vw;
`

function Panel(props) {
    
    if (props.panel == "TakeDown") {
        return (
        <StyledPanel to='/takedown'>
            <Title>Take Down Request</Title>
            <Image src={TakeDown} alt="Take Down Img" />
        </StyledPanel>
        )

    } else if (props.panel == "Repair") {

        return (
        <StyledPanel to='/repair'>
            <Title>Repair Request</Title>
            <Image src={Repair} alt="Repair Img" />
        </StyledPanel>
        )
        
    } else if (props.panel == "Request") {

        return (
        <StyledPanel to='/quote'>
            <Title>Request a Quote</Title>
            <Image src={Request} alt="Quote Img" />
        </StyledPanel>
        )
    }
}

export default Panel